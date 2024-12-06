import DashboardPerformanceInfo, { DashboardPerformanceInfoProps } from "@/pages/dashboard/DashboardPerformanceInfo";
import { PlusIcon } from "lucide-react";

export interface DashboardPerformanceProps {
	info: DashboardPerformanceInfoProps[];
}

export default function DashboardPerformance({ info }: DashboardPerformanceProps) {
	return (
		<div className="flex h-full flex-col gap-y-4">
			<div className="flex flex-row items-center justify-between">
				<span className="text-lg font-semibold text-[#FDFDFDFD] lg:text-xl">Key Performance Indicators</span>
				<button className="flex flex-row items-center gap-x-2 rounded bg-transparent text-base font-medium text-[#FCFCFC] outline outline-1 outline-[#525252] sm:px-2 sm:py-1 lg:px-4 lg:py-2">
					Variables
					<PlusIcon size={24} fill="#FCFCFC" />
				</button>
			</div>
			<div className="grid h-full grid-cols-2 grid-rows-2 gap-6">
				{info.map((info) => (
					<DashboardPerformanceInfo {...info} key={info.title} />
				))}
			</div>
		</div>
	);
}
