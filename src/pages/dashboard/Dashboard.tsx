import AuthGuard from "@/components/AuthGuard";

export default function Dashboard() {
	return (
		<AuthGuard>
			<h1>Dashboard</h1>
		</AuthGuard>
	);
}
