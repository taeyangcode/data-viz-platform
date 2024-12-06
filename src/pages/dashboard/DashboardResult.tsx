import DashboardResultBanner, { DashboardResultBannerProps } from "@/pages/dashboard/DashboardResultBanner";
import { ChevronUpIcon, SparklesIcon } from "lucide-react";

export interface DashboardResultProps {
	results: DashboardResultBannerProps[];
}

export default function DashboardResult({ results }: DashboardResultProps) {
	return (
		<div className="flex w-full flex-col gap-y-5">
			<div className="flex w-full items-center justify-between">
				<h2 className="flex items-center gap-x-4 font-semibold text-[#DCFF7FFD] sm:text-xl lg:text-2xl">
					<SparklesIcon size={24} className="inline-flex fill-[#DCFF7FFD] stroke-1" />
					Best Scenario Results
				</h2>
				<div className="grid place-items-center">
					<button className="rounded-full px-3 py-1 outline outline-1 outline-[#C8E972]">
						<ChevronUpIcon size={24} stroke="#C8E972" />
					</button>
				</div>
			</div>
			{results.map((result) => (
				<DashboardResultBanner {...result} key={result.text} />
			))}
		</div>
	);
}
