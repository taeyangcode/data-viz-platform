import AuthGuard from "@/components/AuthGuard";
import DashboardLayout from "@/pages/dashboard/DashboardLayout";
import DashboardGraph from "@/pages/dashboard/DashboardGraph";
import LightningBoltIcon from "@/assets/icon/LightningBolt";
import { ChevronUpIcon, EllipsisIcon, HistoryIcon, PlusIcon, SparklesIcon, UploadIcon } from "lucide-react";
import React, { MouseEventHandler } from "react";

export default function Dashboard() {
	return (
		<AuthGuard>
			<DashboardLayout>
				<div className="grid h-full grid-cols-12 grid-rows-[auto_auto_auto] place-content-between gap-x-4 p-10">
					<div className="col-span-12 row-span-1">
						<DashboardHeader title={"Charging Station"} />
					</div>

					<div className="col-span-12 row-span-1">
						<DashboardResult />
					</div>

					<div className="col-span-7 row-span-1">
						<DashboardGraph />
					</div>
					<div className="col-span-5 row-span-1">
						<DashboardPerformance />
					</div>
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
		<div className="flex items-center justify-between rounded bg-[#CCFF0005] px-4 py-4 outline outline-[0.5px] outline-[#C8E972]">
			<span className="px-2 text-[16px] font-medium text-[#C9FF3B]">{text}</span>
			<EllipsisIcon size={24} stroke="#C8E972" />
		</div>
	);
}

function DashboardPerformance() {
	return (
		<div className="flex h-full w-full flex-col gap-y-4">
			<div className="flex flex-row items-center justify-between">
				<span className="text-2xl font-semibold text-[#FDFDFDFD]">Key Performance Indicators</span>
				<button className="flex flex-row items-center gap-x-2 rounded bg-transparent px-4 py-2 text-base font-medium text-[#FCFCFC] outline outline-1 outline-[#525252]">
					Variables
					<PlusIcon size={24} fill="#FCFCFC" />
				</button>
			</div>
			<div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-6">
				<DashboardPerformanceInfo
					title="Infrastructure Units"
					description="This describes variable two and what the shown data means."
					indicator="€421.07"
				/>
				<DashboardPerformanceInfo
					title="Charging Growth"
					description="This describes variable two and what the shown data means."
					indicator="33.07"
				/>
				<DashboardPerformanceInfo
					title="Localization change"
					description="This describes variable two and what the shown data means."
					indicator="21.9%"
				/>
				<DashboardPerformanceInfo
					title="Fleet growth"
					description="This describes variable two and what the shown data means."
					indicator="7.03%"
				/>
			</div>
		</div>
	);
}

interface DashboardPerformanceInfoProps {
	title: string;
	description: string;
	indicator: string;
}

function DashboardPerformanceInfo(props: DashboardPerformanceInfoProps) {
	const { title, description, indicator } = props;

	return (
		<div className="flex aspect-square w-full flex-col justify-between rounded bg-[#222324] p-6 outline outline-1 outline-[#525252]">
			<div className="flex h-fit w-full flex-col gap-4">
				<span className="text-lg font-medium text-white">{title}</span>
				<span className="text-[12px] font-light text-[#BBBBBB]">{description}</span>
			</div>
			<div className="flex items-end justify-end">
				<span className="text-3xl font-bold text-white">{indicator}</span>
			</div>
		</div>
	);
}
