import { useEffect } from "react";

import useAuth from "@/lib/auth";
import supabase, { handleAuthStateChange } from "@/lib/supabase";
import { Navigate } from "react-router";
import GoogleSignInButton from "@/components/originui/GoogleSignInButton";

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
		<div className="w-screen h-screen grid place-items-center">
			<GoogleSignInButton />
		</div>
	);
}
