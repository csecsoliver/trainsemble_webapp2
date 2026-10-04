import { db } from '#lib/server/db/index.js';
import { station } from '#lib/server/db/schema.js';
import { query } from '$app/server';
import { eq } from 'drizzle-orm';
import { string } from 'zod';
export const getStation = query(string(), async (id: string) => {
	const station_entry = await db.select().from(station).where(eq(station.id, id)).limit(1);

	return station_entry[0];
});
