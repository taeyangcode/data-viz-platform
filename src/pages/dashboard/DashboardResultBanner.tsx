import { EllipsisIcon } from "lucide-react";

export interface DashboardResultBannerProps {
	text: string;
}

export default function DashboardResultBanner({ text }: DashboardResultBannerProps) {
	return (
		<div className="flex items-center justify-between rounded bg-[#CCFF0005] px-4 py-4 outline outline-[0.5px] outline-[#C8E972]">
			<span className="px-2 font-medium text-[#C9FF3B] sm:text-sm lg:text-[16px]">{text}</span>
			<EllipsisIcon size={24} stroke="#C8E972" />
		</div>
	);
}
