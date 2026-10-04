import { getUserFromToken } from '#lib/server/auth.js';
import { db } from '#lib/server/db/index.js';
import { car } from '#lib/server/db/schema.js';
import { query, form } from '$app/server';
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

		const user = await getUserFromToken()
		if (!user) error(401, 'Unauthorized');

		const slug = title.toLowerCase().replace(/ /g, '-');

		// Insert into the database
		
		await db.update(car).set({uic: uic})

		// Redirect to the newly created page
		
		redirect(303, `/blog/${slug}`);
	}
);