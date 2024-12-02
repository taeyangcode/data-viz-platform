import logger from "@/lib/logger";
import { z } from "zod";

export const envSchema = z.object({
	VITE_PORT: z.string(),

	NEXT_PUBLIC_VERCEL_URL: z.optional(z.string()),

	VITE_SUPABASE_PROJECT_URL: z.string(),
	VITE_SUPABASE_API_KEY: z.string(),
});

export type Env = z.infer<typeof envSchema>;

const envParse = envSchema.safeParse({
	VITE_PORT: import.meta.env.VITE_PORT,

	VITE_SUPABASE_PROJECT_URL: import.meta.env.VITE_SUPABASE_PROJECT_URL,
	VITE_SUPABASE_API_KEY: import.meta.env.VITE_SUPABASE_API_KEY,
});

if (!envParse.success) {
	logger.error(envParse.data, "PANIC: could not parse environment file.");
	throw new Error("PANIC: could not parse environment file.");
}

export default envParse.data;
