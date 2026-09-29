import { defineConfig } from 'drizzle-kit';

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.DATABASE_URL,
		password: process.env.DATABASE_PASSWORD,
		user: process.env.DATABASE_USER
	},
	verbose: true,
	strict: true
});
