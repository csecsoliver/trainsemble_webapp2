import { db } from '#lib/server/db/index.js';
import {  station } from '#lib/server/db/schema.js';
import { query } from '$app/server';
export const getStations = query(async () => {
    const stations = await db.select().from(station);
    return stations;
});
