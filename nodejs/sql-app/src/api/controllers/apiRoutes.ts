<<<<<<< HEAD
import { AuthService } from "../../app/services/authService";
import { RoleService } from "../../app/services/roleService";
import { UserService } from "../../app/services/userService";
import { RoleRepositoryImpl } from "../../infrastructure/repositories/roleRepositoryImpl";
import { UserRepositoryImpl } from "../../infrastructure/repositories/userRepositoryImpl";
import { EncryptImpl } from "../../infrastructure/utils/encrypt.jwt";
import { AuthController } from "./authController";
import { RoleController } from "./roleController";
import { UserController } from "./userController";
import { RedisCacheService } from './../../infrastructure/cache/redis.cache';

const redisCacheService = new RedisCacheService();
=======
import { Router } from 'express';
import { AuthService } from '../../app/services/authService';
import { RoleService } from '../../app/services/roleService';
import { UserService } from '../../app/services/userService';
import { RoleRepositoryImpl } from '../../infrastructure/repositories/roleRepositoryImpl';
import { UserRepositoryImpl } from '../../infrastructure/repositories/userRepositoryImpl';
import { AuthController } from './authController';
import { RoleController } from './roleController';
import { UserController } from './userController';
import { EncryptImpl } from '../../infrastructure/utils/encrypt.jwt';
import { RedisCacheService } from '../../infrastructure/cache/redis.cache';
>>>>>>> a835975f115a8c3727601bff87a8535648678367

const redisCacheService = new RedisCacheService();
const encrypt = new EncryptImpl();
const roleRepository = new RoleRepositoryImpl();
const roleService = new RoleService(roleRepository);
const roleController = new RoleController(roleService);

const userRepository = new UserRepositoryImpl();
const userService = new UserService(userRepository, roleRepository, redisCacheService);
const userController = new UserController(userService);
<<<<<<< HEAD

=======
>>>>>>> a835975f115a8c3727601bff87a8535648678367
const authService = new AuthService(userRepository, encrypt, redisCacheService);
const authController = new AuthController(authService);

export function apiRoutes(): Router {
    const router = Router();

    router.use('/users', userController.router);
    router.use('/roles', roleController.router);
    router.use('/auth', authController.router);

    return router;
}