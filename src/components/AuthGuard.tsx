import useAuth from "@/lib/auth";
import { PropsWithChildren, useEffect } from "react";
import { Navigate } from "react-router";

export default function AuthGuard({ children }: PropsWithChildren): JSX.Element {
	const { user, fetchUser } = useAuth();

	// consistently update user auth state
	useEffect(() => {
		fetchUser();
	}, [fetchUser]);

	// redirect user to index if user auth is missing
	return user ? <>{children}</> : <Navigate to="/" />;
}
