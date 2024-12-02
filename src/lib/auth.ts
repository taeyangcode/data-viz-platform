import { create } from "zustand";
import { AuthError, User } from "@supabase/supabase-js";
import { Cause, Exit, Option } from "effect";

import logger from "@/lib/logger";
import supabase from "@/lib/supabase";

export interface AuthState {
	user: User | null;
	setUser: (user: User | null) => void;
	fetchUser: () => Promise<void>;
	signOut: () => Promise<void>;
}

const useAuth = create<AuthState>((set) => ({
	user: null,

	setUser: (user) => set({ user }),

	fetchUser: async () => {
		const user = await fetchUser();
		Option.match(user, {
			onNone: () => signOutUser(),
			onSome: (user) => set({ user }),
		});
	},

	signOut: async () => {
		const result = await signOutUser();
		Exit.mapError(result, (_) => set({ user: null }));
	},
}));

export default useAuth;

// user authentication helper functions
// essentially for logging purposes

async function fetchUser(): Promise<Option.Option<User>> {
	const { data, error } = await supabase.auth.getUser();

	if (data.user) {
		logger.info(data.user, "user fetched");
		return Option.some(data.user);
	}

	logger.error(error, "error when fetching user");
	return Option.none();
}

async function signOutUser(): Promise<Exit.Exit<Cause.Cause<Cause.Empty>, AuthError>> {
	const { error } = await supabase.auth.signOut();
	if (error) {
		logger.error(error, "error when signing out user");
		return Exit.fail(error);
	}
	return Exit.succeed(Cause.empty);
}
