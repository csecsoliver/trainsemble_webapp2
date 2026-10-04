import { eq } from "drizzle-orm"
import { db } from "./db"
import { user, token } from "./db/schema"

export async function getUserFromToken(tokenstr: string): Promise<{ id: string, username: string, email: string | null} | null> {
    
    const token_row = await db.select()
                .from(token)
                .innerJoin(user, eq(token.user_id, user.id))
                .where(eq(token.token, tokenstr))
    const user_row = token_row[0] ? token_row[0].users : null;
    return user_row;
}