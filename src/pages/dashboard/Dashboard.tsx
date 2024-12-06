import AuthGuard from "@/components/AuthGuard";
import DashboardGraph from "@/pages/dashboard/DashboardGraph";
import DashboardHeader from "@/pages/dashboard/DashboardHeader";
import DashboardLayout from "@/pages/dashboard/DashboardLayout";
import DashboardPerformance from "@/pages/dashboard/DashboardPerformance";
import { DashboardPerformanceInfoProps } from "@/pages/dashboard/DashboardPerformanceInfo";
import DashboardResult from "@/pages/dashboard/DashboardResult";
import { DashboardResultBannerProps } from "@/pages/dashboard/DashboardResultBanner";

export default function Dashboard() {
	return (
		<AuthGuard>
			<DashboardLayout>
				<div className="flex h-full w-full flex-col gap-x-4 gap-y-8 p-8">
					<div>
						<DashboardHeader title={"Charging Station"} />
					</div>

					<div>
						<DashboardResult results={dashboardResults} />
					</div>

					<div className="grid h-full w-full grid-flow-col grid-cols-7 gap-x-6">
						<div className="col-span-4">
							<DashboardGraph />
						</div>
						<div className="col-span-3">
							<DashboardPerformance info={dashboardPerformanceInfo} />
						</div>
					</div>
				</div>
			</DashboardLayout>
		</AuthGuard>
	);
}

const dashboardResults = [
	{
		text: "The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.",
	},
	{
		text: "The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles.",
	},
] satisfies DashboardResultBannerProps[];

const dashboardPerformanceInfo = [
	{
		title: "Infrastructure Units",
		description: "This describes variable two and what the shown data means.",
		indicator: "€421.07",
	},
	{
		title: "Charging Growth",
		description: "This describes variable two and what the shown data means.",
		indicator: "33.07",
	},
	{
		title: "Localization change",
		description: "This describes variable two and what the shown data means.",
		indicator: "21.9%",
	},
	{
		title: "Fleet growth",
		description: "This describes variable two and what the shown data means.",
		indicator: "7.03%",
	},
] satisfies DashboardPerformanceInfoProps[];
