import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
	server: {
		AUTH_SECRET: z.string().min(1),
		DATABASE_URL: z.string().url(),
	},
	client: {},
	runtimeEnv: {
		AUTH_SECRET: process.env.AUTH_SECRET,
		DATABASE_URL: process.env.DATABASE_URL,
	},
})
