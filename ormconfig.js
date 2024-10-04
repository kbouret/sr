import dotenv from 'dotenv';

dotenv.config();

export default {
    type: 'mysql',
    host: process.env.DB_HOST || 'db',
    port: 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_DATABASE || 'projectdb',
    entities: ['src/entity/**/*.js'],
    migrations: ['src/migration/**/*.js'],
    cli: {
        migrationsDir: 'src/migration',
    },
    synchronize: false,
};
