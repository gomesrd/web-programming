// create datasource fot typeorm
import "reflect-metadata"
import {DataSource} from 'typeorm';
import dotenv from "dotenv";

dotenv.config()

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'rootpassword',
  database: process.env.DB_DATABASE || 'mydatabase',
  synchronize: true,
  logging: false,
  entities: ['src/models/*.ts'],
  migrations: ['src/migrations/*.ts'],
});