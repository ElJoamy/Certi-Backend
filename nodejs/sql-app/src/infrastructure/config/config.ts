import dotenv from 'dotenv';
dotenv.config();

export const env = {
    port: process.env.PORT || 3000,
    environment: process.env.ENV || 'develop'
};

export const db = {
    port: process.env.DB_PORT || 3306,
    type: process.env.DB_TYPE || 'mysql',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'app',
}

export const lg = {
    level: process.env.LOGGER_LEVEL || 'info'
}

export const jwt = {
    secretKey: process.env.JWT_SECRET || 'your_secret_key',
    expirationTime: process.env.JWT_EXPIRATION_TIME
}
<<<<<<< HEAD
console.log(jwt);

export const redis_env = {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASSWORD || ''
}
console.log(redis_env);
=======

export const redis_env = {
    url: process.env.RD_URL || 'localhost'
}
<<<<<<< HEAD
>>>>>>> a835975f115a8c3727601bff87a8535648678367
=======

export const swagger_env = {
    title: process.env.SW_TITLE || 'app',
    version: process.env.SW_VERSION || '1.0.0'
}
>>>>>>> 2eaeb0f2f5cec647a0f318d0a7e1f8a9eaa836a6
