import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	schema: './src/lib/db/schema.ts',
	dialect: 'mysql',
	out: './drizzle',
	dbCredentials: {
		url: 'mysql://root:chowbird@localhost/vetClinic'
	}
});
