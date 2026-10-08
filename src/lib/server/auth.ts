import { and, eq, gt, sql } from 'drizzle-orm';
import { db } from './db';
import { user, token } from './db/schema';
import { randomBytes } from 'crypto';
import { getRequestEvent } from '$app/server';

export async function getUserFromToken(
	tokenstr: string
): Promise<{ id: string; username: string; email: string | null } | null> {
	const token_row = await db
		.select()
		.from(token)
		.innerJoin(user, eq(token.user_id, user.id))
		.where(
			and(
				eq(token.token, tokenstr),
				eq(token.valid, true),
				gt(token.created_at, sql`now() - interval '7 days'`)
			)
		);
	const user_row = token_row[0]?.users ?? (()=>{return null;})();
    void (user_row?(()=>{
        
    })():(()=>{

    })())
	return user_row;
}
export async function getUser() {
	return getRequestEvent().locals.user
}

export async function loginUser(loginName: string, password: string): Promise<string | null> {
	const userRow = (
		await db
			.select()
			.from(user)
			.where(and(eq(user.username, loginName), eq(user.passhash, password)))
	)[0];
	if (!userRow) {
		return null;
	}
	const tokenRow = (
		await db
			.insert(token)
			.values({ user_id: userRow.id, valid: true, token: randomBytes(128).toBase64() })
			.returning()
	)[0];
	return tokenRow?.token;
}

export async function logout() {
	const ev = getRequestEvent();
	const authToken = ev.cookies.get('authToken');
	if (authToken) {
		await db.update(token).set({ valid: false }).where(eq(token.token, authToken));
	}
	ev.cookies.delete('authToken', {path:"/"});
	ev.locals.user = null;
}
