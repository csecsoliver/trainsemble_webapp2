import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import { DATABASE_URL, DATABASE_PASSWORD, DATABASE_USER } from '$app/env/private';

if (!DATABASE_URL) throw new Error('DATABASE_URL is not set');
if (!DATABASE_USER) throw new Error('DATABASE_USER is not set');
if (!DATABASE_PASSWORD) throw new Error('DATABASE_PASSWORD is not set');

const client = postgres(DATABASE_URL, { password: DATABASE_PASSWORD, user: DATABASE_USER });

export const db = drizzle(client, { schema });
