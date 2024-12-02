import env from "@/env/env";
import logger from "@/lib/logger";
import { AuthChangeEvent, createClient, OAuthResponse, Session } from "@supabase/supabase-js";
import { AuthState } from "./auth";

const supabaseProjectUrl = env.VITE_SUPABASE_PROJECT_URL;
const supabaseApiKey = env.VITE_SUPABASE_API_KEY;

const supabase = createClient(supabaseProjectUrl, supabaseApiKey);

export default supabase;

export async function signInGoogle() {
	const result: OAuthResponse = await supabase.auth.signInWithOAuth({
		provider: "google",
		options: { redirectTo: siteUrl() },
	});
	if (result.error) {
		logger.error(result.error, "sign in error");
	}
}

export async function signOutGoogle() {
	const result = await supabase.auth.signOut();
	if (result.error) {
		logger.error(result.error, "sign out error");
	}
}

export async function handleAuthStateChange(
	_: AuthChangeEvent,
	session: Session | null,
	options: AuthState,
): Promise<void> {
	options.setUser(session?.user ?? null);
}

function siteUrl(): string {
	logger.info(import.meta.env.VITE_DEV_SERVER_URL);
	const url: string = env.NEXT_PUBLIC_VERCEL_URL ?? `http://localhost:${env.VITE_PORT}/`;
	const prefixFormat = url.startsWith("http") ? url : `https://${url}`;
	const trailingFormat = url.endsWith("/") ? prefixFormat : `${prefixFormat}/`;

	return trailingFormat;
}
