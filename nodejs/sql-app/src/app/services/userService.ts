import { IUserEntity } from "../../domain/entities/IUserEntity";
import { RoleRepository } from "../../domain/interfaces/roleRepository";
import { UserRepository } from "../../domain/interfaces/userRepository";
import { User } from "../../domain/models/user";
import logger from "../../infrastructure/logger/logger";
import { CreateUserDTO } from "../dtos/create.user.dto";
import { UserDto } from '../dtos/user.dto';
import { ICacheService } from '../../domain/interfaces/IRedisCache';

export class UserService {
    constructor(private userRepository: UserRepository, private roleRepository: RoleRepository, private redisCacheService: ICacheService) { }

    // Obtener todos los usuarios
    async getUsers(): Promise<UserDto[]> {
        const users = await this.userRepository.findAll();

        const usersResponse: UserDto[] = users.map((user: User) => ({
            id: user.id,
            username: user.username,
            email: user.email,
            lastLogin: user.lastLogin
        }));

        return usersResponse;
    }

    async getUserById(id: string): Promise<UserDto | null> {
        const userCache = await this.redisCacheService.get(`USER:${id}`);
        if (userCache) {
            logger.debug(`UserService: Obteniendo al usuario con ID: ${id} desde la cache`);
            const userObject = JSON.parse(userCache);
            return userObject;
        }

        const userDB = await this.userRepository.findById(id);
        logger.debug(`UserService: Intentando obtener al usuario con ID: ${id}`);

        if (!userDB) {
            return null;
        }

        const userResponse: UserDto = {
            id: userDB.id,
            username: userDB.username,
            email: userDB.email,
            lastLogin: userDB.lastLogin
        };

        await this.redisCacheService.set(`USER:${id}`, JSON.stringify(userResponse));
        return userResponse;
    }

    async createUser(userDto: CreateUserDTO): Promise<User> {
        const role = await this.roleRepository.findById(userDto.roleId);
        if (!role) {
            throw new Error('Rol no encontrado');
        }

        const userEntity: IUserEntity = {
            username: userDto.username,
            email: userDto.email,
            passwordHash: userDto.password,
            createdAt: new Date(),
            lastLogin: null,
            role
        };

        const newUser = new User(userEntity);
        return this.userRepository.createUser(newUser);
    }

    async deleteUser(userId: string): Promise<void> {
        logger.debug(`UserService: Intentando eliminar al usuario con ID: ${userId}`);
        await this.userRepository.deleteUser(userId);
    }

    async updateUser(userId: string, updateData: Partial<CreateUserDTO>): Promise<User> {
        logger.debug(`UserService: Intentando actualizar al usuario con ID: ${userId}`);
        return this.userRepository.updateUser(userId, updateData);
    }
}
