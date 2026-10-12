import { getUser } from '#lib/server/auth.js';
import { db } from '#lib/server/db/index.js';
import { car } from '#lib/server/db/schema.js';
import { refreshAll } from '$app/navigation';
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
		const user = await getUser()
		if (!user) {
			redirect(303, "/login")
			return;
		}
		await db.update(car).set({uic: uic}).where(eq(car.id, id))
		await getCar(id).refresh();
	}
);

export const editCarAgency = form(
	object({
		id: string(),
		agency: string()
	}),
	async ({ id, agency }) => {
		const user = await getUser()
		if (!user) {
			redirect(303, "/login")
			return;
		}
		await db.update(car).set({agency}).where(eq(car.id, id))
		await getCar(id).refresh();
	}
);
export const editCarType = form(
	object({
		id: string(),
		type: string()
	}),
	async ({ id, type }) => {
		const user = await getUser()
		if (!user) {
			redirect(303, "/login")
			return;
		} 
		await db.update(car).set({type}).where(eq(car.id, id))
		await getCar(id).refresh();
	}
);
export const editCarNick = form(
	object({
		id: string(),
		nick: string()
	}),
	async ({ id, nick }) => {
		const user = await getUser()
		if (!user) {
			redirect(303, "/login")
			return;
		}
		await db.update(car).set({nick}).where(eq(car.id, id))
		await getCar(id).refresh();
	}
);
export const editCarVagonweb = form(
	object({
		id: string(),
		vagonweb: string()
	}),
	async ({ id, vagonweb }) => {
		const user = await getUser()
		if (!user) {
			redirect(303, "/login")
			return;
		}
		await db.update(car).set({vagonweb}).where(eq(car.id, id))
		await getCar(id).refresh();
	}
);

