import AuthGuard from "@/components/AuthGuard";
import DashboardLayout from "@/pages/dashboard/DashboardLayout";
import LightningBoltIcon from "@/assets/icon/LightningBolt";
import { ChevronUpIcon, EllipsisIcon, HistoryIcon, SparklesIcon, UploadIcon } from "lucide-react";
import React, { MouseEventHandler } from "react";
import DashboardGraph from "./DashboardGraph";

export default function Dashboard() {
	return (
		<AuthGuard>
			<DashboardLayout>
				<div className="grid h-full grid-cols-12 grid-rows-[auto_auto_1fr] gap-4 p-10">
					<div className="col-span-12 row-span-1">
						<DashboardHeader title={"Charging Station"} />
					</div>

					<div className="col-span-12 row-span-1">
						<DashboardResult />
					</div>

					<div className="col-span-8 row-span-1">
						<DashboardGraph />
					</div>
					<div className="col-span-4 row-span-1">{/* Key Performance Indicators */}</div>
				</div>
			</DashboardLayout>
		</AuthGuard>
	);
}

interface DashboardHeaderProps {
	title: string;
}

function DashboardHeader({ title }: DashboardHeaderProps) {
	return (
		<div className="flex w-full items-center justify-between">
			<h1 className="flex items-center gap-x-4 text-[32px] font-bold text-white">
				<LightningBoltIcon size={30} className="inline-flex fill-white" />
				{title}
			</h1>
			<div className="flex items-center justify-evenly gap-x-4">
				<DashboardHeaderButton content={<HistoryIcon size={22} stroke="#B9B9B9" />} />
				<DashboardHeaderButton content={<span className="text-white">Edit Variables</span>} />
				<DashboardHeaderButton content={<UploadIcon size={22} stroke="#B9B9B9" />} />
			</div>
		</div>
	);
}

interface DashboardHeaderButtonProps {
	content: React.ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

function DashboardHeaderButton({ content, onClick }: DashboardHeaderButtonProps) {
	return (
		<button
			className="h-[41px] rounded bg-[#242424] px-3 py-2 outline outline-1 outline-[#5A5A5A]"
			onClick={onClick}
		>
			{content}
		</button>
	);
}

function DashboardResult() {
	return (
		<div className="flex w-full flex-col gap-y-5">
			<div className="flex w-full items-center justify-between">
				<h2 className="flex items-center gap-x-4 text-2xl font-semibold text-[#DCFF7FFD]">
					<SparklesIcon size={24} className="inline-flex fill-[#DCFF7FFD] stroke-1" />
					Best Scenario Results
				</h2>
				<div className="grid place-items-center">
					<button className="rounded-full px-3 py-1 outline outline-1 outline-[#C8E972]">
						<ChevronUpIcon size={24} stroke="#C8E972" />
					</button>
				</div>
			</div>
			<DashboardResultBanner text="The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles." />
			<DashboardResultBanner text="The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles." />
		</div>
	);
}

interface DashboardResultBannerProps {
	text: string;
}

function DashboardResultBanner({ text }: DashboardResultBannerProps) {
	return (
		<div className="flex items-center justify-between rounded bg-[#CCFF0005] px-6 py-4 outline outline-[0.5px] outline-[#C8E972]">
			<span className="text-[16px] font-medium text-[#C9FF3B]">{text}</span>
			<EllipsisIcon size={24} stroke="#C8E972" />
		</div>
	);
}
