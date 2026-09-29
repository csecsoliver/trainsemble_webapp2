import { db } from '#lib/server/db/index.js';
import { car } from '#lib/server/db/schema.js';
import { query } from '$app/server';
export const getCars = query(async () => {
	const cars = await db.select().from(car)
	return cars;
});