import { IUserEntity } from "../../domain/entities/IUserEntity";
import { UserRepository } from "../../domain/interfaces/userRepository";
import logger from "../../infrastructure/logger/logger";
import { LoginDTO } from "../dtos/login.dto";
import { jwt as jwtConfig } from '../../infrastructure/config/config';
import jwt from 'jsonwebtoken';
import { UserDto } from "../dtos/user.dto";
import { User } from "../../domain/models/user";
import { Encrypt } from './../utils/encrypt';
import bcrypt from 'bcrypt';
<<<<<<< HEAD
import { RedisCacheService } from './../../infrastructure/cache/redis.cache';

export class AuthService {
    constructor(private userRepository: UserRepository, private encrypt: Encrypt, private redisCacheService: RedisCacheService) { 
        this.getCache();
    }

    async getCache() {
        const USER_KEY = 'USER';
        const userID = '1';
        const sol = await this.redisCacheService.get('${USER_KEY}:${userID}');
        console.log("🚀 ~ file: authService.ts:22 ~ AuthService ~ getCache ~ sol:", sol)
    }
=======
import { RedisCacheService } from "../../infrastructure/cache/redis.cache";

export class AuthService {
    constructor(private userRepository: UserRepository, private encrypt: Encrypt, private redisCacheService: RedisCacheService) { }
>>>>>>> 2eaeb0f2f5cec647a0f318d0a7e1f8a9eaa836a6

    async login(loginDTO: LoginDTO): Promise<UserDto> {
        const userEntity: Partial<IUserEntity> = {
            email: loginDTO.email,
            passwordHash: loginDTO.password
        };
        const user: User = await this.userRepository.findByEmail(userEntity.email);
        console.log("🚀 ~ file: authService.ts:32 ~ AuthService ~ login ~ user:", user)
        const USER_KEY = 'USER'
        this.redisCacheService.set(`${USER_KEY}:${user.id}`, JSON.stringify(user));
        if (!user) {
            logger.error(`El usuario con email: ${userEntity.email} no existe`);
            throw new Error('El email o la contraseña son incorrectos');
        }

        const isPasswordValid = await bcrypt.compare(userEntity.passwordHash, user.passwordHash);
        console.log("🚀 ~ file: authService.ts:31 ~ AuthService ~ login ~ isPasswordValid:", isPasswordValid)
        if (!isPasswordValid) {
            logger.error(`La contraseña del usuario es incorrecta`);
            throw new Error('El email o la contraseña son incorrectos');
        }

        const token = this.encrypt.encrypt({ userId: user.id });
        console.log("🚀 ~ file: authService.ts:37 ~ AuthService ~ login ~ token:", token)
        user.token = token;
        user.lastLogin = new Date();

        const userUpdated = await this.userRepository.updateUser(user.id, user);

        return {
            id: userUpdated.id,
            username: userUpdated.username,
            email: userUpdated.email,
            lastLogin: userUpdated.lastLogin,
            token: user.token
        };
    }
}