import type { Handle } from '@sveltejs/kit/hooks';
import { getUserFromToken, logout } from '#lib/server/auth.js';

export const handle: Handle = async ({ event, resolve }) => {
	
    const token = event.cookies.get("authToken")
    
    event.locals.user = await getUserFromToken(token ?? "");
	if (!event.locals.user) {
		await logout();
	}
	

	const response = await resolve(event);
	return response;
};