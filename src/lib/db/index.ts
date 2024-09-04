import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { env } from '$env/dynamic/private';

const connection = await mysql.createConnection({
	host: env.DATABASE_HOST,
	user: env.DATABASE_USER,
	database: env.DATABASE_NAME,
	password: env.DATABASE_PASSWORD,
	port: Number(env.DATABASE_PORT)
});

const db = drizzle(connection);

export default db;
