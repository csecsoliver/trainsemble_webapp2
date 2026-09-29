import { db } from '#lib/server/db/index.js';
import { car } from '#lib/server/db/schema.js';
import { query } from '$app/server';
import { eq } from 'drizzle-orm';
import { string } from "zod";
export const getCar = query(string(),async ( id: string ) => {
	const car_entry = (await db.select().from(car).where(eq(car.id, id)).limit(1));
    
	return car_entry[0];
});