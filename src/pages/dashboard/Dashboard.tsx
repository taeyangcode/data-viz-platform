import AuthGuard from "@/components/AuthGuard";
import DashboardLayout from "./DashboardLayout";

export default function Dashboard() {
	return (
		<AuthGuard>
			<DashboardLayout></DashboardLayout>
		</AuthGuard>
	);
}
