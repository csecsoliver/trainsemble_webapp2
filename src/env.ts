import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	DATABASE_URL: { description: 'The database connection string.' },
	DATABASE_USER: { description: 'The database connection username.' },
	DATABASE_PASSWORD: { description: 'The database connection password.' }
});
