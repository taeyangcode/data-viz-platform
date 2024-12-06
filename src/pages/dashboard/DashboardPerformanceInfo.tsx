export interface DashboardPerformanceInfoProps {
	title: string;
	description: string;
	indicator: string;
}

export default function DashboardPerformanceInfo(props: DashboardPerformanceInfoProps) {
	const { title, description, indicator } = props;

	return (
		<div className="flex h-full flex-col justify-between gap-y-4 rounded bg-[#222324] p-4 outline outline-1 outline-[#525252]">
			<div className="flex flex-col gap-4">
				<span className="text-base font-medium text-white lg:text-lg">{title}</span>
				<p className="text-pretty text-sm font-light text-[#BBBBBB]">{description}</p>
			</div>
			<div className="flex items-end justify-end">
				<span className="text-xl font-bold text-white lg:text-3xl">{indicator}</span>
			</div>
		</div>
	);
}
