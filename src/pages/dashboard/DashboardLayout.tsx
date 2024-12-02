import Navbar from "@/components/navbar/Navbar";

export interface DashboardLayoutProps {
	children?: React.ReactNode;
}

export default function DashboardLayout(_: DashboardLayoutProps) {
	return <Navbar />;
}
