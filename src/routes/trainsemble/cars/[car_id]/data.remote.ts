import { getUser } from '#lib/server/auth.js';
import { db } from '#lib/server/db/index.js';
import { car } from '#lib/server/db/schema.js';
import { query, form } from '$app/server';
import { redirect } from '@sveltejs/kit'
import { eq } from 'drizzle-orm';
import { string, object } from 'zod';
export const getCar = query(string(), async (id: string) => {
	const car_entry = await db.select().from(car).where(eq(car.id, id)).limit(1);

	return car_entry[0];
});


export const editCarUIC = form(
	object({
		id: string(),
		uic: string()
	}),
	async ({ id, uic }) => {
		// Check the user is logged in

		const user = await getUser()
		if (!user) redirect(303, "/login")
		
		await db.update(car).set({uic: uic}).where(eq(car.id, id))
		await getCar(id).refresh();

	}
);
