import { Button } from "@/components/ui/button";
import { signInGoogle } from "@/lib/supabase";
import { RiGoogleFill } from "@remixicon/react";

export default function GoogleSignInButton() {
	return (
		<div className="flex flex-col gap-2">
			<Button variant="outline" onClick={signInGoogle}>
				<RiGoogleFill className="me-3 text-lime-300" size={16} aria-hidden="true" />
				<span className="text-accent-foreground bold">Login with Google</span>
			</Button>
		</div>
	);
}
