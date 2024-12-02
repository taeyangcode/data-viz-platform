import { useEffect } from "react";

import useAuth from "@/lib/auth";
import supabase, { handleAuthStateChange, signInGoogle } from "@/lib/supabase";
import { Navigate } from "react-router";

export default function App() {
	const { user, setUser, fetchUser, signOut } = useAuth();

	// handle user authentication changes
	useEffect(() => {
		fetchUser();

		const result = supabase.auth.onAuthStateChange((event, session) =>
			handleAuthStateChange(event, session, { user, setUser, fetchUser, signOut }),
		);

		return () => result.data.subscription.unsubscribe();
	}, [fetchUser, setUser]);

	// if user is already authenticated redirect to dashboard
	if (user) {
		return <Navigate to="dashboard" />;
	}

	return (
		<div>
			<h1>Please sign in</h1>
			<button onClick={signInGoogle}>Sign in with Google</button>
		</div>
	);
}
