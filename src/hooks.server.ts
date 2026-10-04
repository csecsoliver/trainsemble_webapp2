import type { Handle } from '@sveltejs/kit/hooks';
import { getUserFromToken } from '#lib/server/auth.js';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/custom')) {
		return new Response('custom response');
	}
    const token = event.cookies.get("token")
    
    event.locals.user = await getUserFromToken(token ?? "");


	const response = await resolve(event);
	return response;
};