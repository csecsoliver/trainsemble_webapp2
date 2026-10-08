
import { error, redirect } from '@sveltejs/kit';
import { form, getRequestEvent } from '$app/server';
import * as auth from '#lib/server/auth.js';
import { nonoptional, object, optional, string } from 'zod';

// export const getPosts = query(async () => { /* ... */ });

// export const getPost = query(v.string(), async (slug) => { /* ... */ });

export const loginForm = form(
	object({
		loginName: nonoptional(string()),
		password: nonoptional(string()),
		redirectTarget: optional(string())
	}),
	async ({ loginName, password, redirectTarget }) => {
		const authToken = await auth.loginUser(loginName, password);
		if (!authToken) error(401, 'Unauthorized');
		const ev = getRequestEvent();
		ev.cookies.set("authToken", authToken);
		ev.locals.user = await auth.getUserFromToken(authToken ?? "");
		redirect(303, redirectTarget??"/");
	}
);