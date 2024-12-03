import Navbar from "@/components/navbar/Navbar";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";

export interface DashboardLayoutProps {
	children?: React.ReactNode;
}

export default function DashboardLayout(props: DashboardLayoutProps) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="grid h-screen w-screen grid-rows-[auto_1fr]">
				<Navbar />
				<MainContent>{props.children}</MainContent>
			</main>
		</SidebarProvider>
	);
}

function MainContent({ children }: PropsWithChildren) {
	return <div className="h-full w-full rounded border border-[#525252] bg-[#161618]">{children}</div>;
}
