import { ChartContainer, ChartTooltip, type ChartConfig } from "@/components/ui/chart";
import { CircleArrowUpIcon, CircleHelpIcon } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

export default function DashboardGraph() {
	return (
		<div className="flex h-full w-full flex-col justify-center gap-y-6">
			<span className="text-2xl font-semibold text-[#FDFDFDFD]">Graphs</span>
			<ChartContainer
				config={chartConfig}
				className="h-full min-h-[200px] rounded bg-[#222324] p-8 outline outline-1 outline-[#525252]"
			>
				<LineChart
					accessibilityLayer
					data={chartData}
					margin={{
						top: 12,
						bottom: 12,
						left: 30,
						right: 30,
					}}
				>
					<CartesianGrid vertical={false} />
					<XAxis
						dataKey="month"
						tick={{ fontWeight: 500, stroke: "#fff", fontSize: "16px" }}
						tickLine
						axisLine
						tickMargin={30}
						height={80}
						tickFormatter={(value) => value.slice(0, 3)}
					/>
					<YAxis
						dataKey="price"
						axisLine
						tickLine
						tick={{ fontWeight: 500, stroke: "#fff", fontSize: "16px" }}
						tickMargin={30}
						tickFormatter={(value) => `$${value}k`}
					/>
					<ChartTooltip
						cursor={{ stroke: "#FFF", strokeWidth: 2, strokeOpacity: 100 }}
						content={({ payload }) => {
							return (
								<GraphTooltip
									price={Number.parseFloat(payload?.at(0)?.value?.toString() ?? "0")}
									description="4.6% above target"
								/>
							);
						}}
					/>
					<Line
						dataKey="price"
						type="linear"
						stroke="#C8E972"
						strokeWidth={3}
						dot={false}
						activeDot={{
							r: 6,
							stroke: "#C8E972",
							fill: "#222324",
							strokeWidth: 3,
							style: {
								filter: "drop-shadow(0 0 4px #C8E972)",
							},
						}}
					/>
				</LineChart>
			</ChartContainer>
		</div>
	);
}

const chartData = [
	{ month: "April", price: 20 },
	{ month: "May", price: 50 },
	{ month: "June", price: 40 },
	{ month: "July", price: 90 },
	{ month: "August", price: 60 },
	{ month: "September", price: 30 },
	{ month: "October", price: 60 },
];

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "hsl(var(--chart-1))",
	},
} satisfies ChartConfig;

interface GraphTooltipProps {
	price: number;
	description: string;
}

function GraphTooltip(props: GraphTooltipProps) {
	const { price, description } = props;

	return (
		<div className="flex min-w-[160px] scale-95 flex-col justify-between gap-y-4 rounded p-5 outline outline-1 outline-[#525252] backdrop-blur-lg">
			<div className="flex flex-row items-center justify-between">
				<span className="text-[20px] font-extrabold text-white">{`$${price.toFixed(2)}k`}</span>
				<CircleHelpIcon size={16} stroke="#888888" />
			</div>
			<div className="flex flex-row items-center justify-between gap-x-2">
				<CircleArrowUpIcon size={18} fill="#C8E97233" stroke="#C8E972" />
				<span className="text-[16px] font-normal text-[#878787]">{description}</span>
			</div>
		</div>
	);
}
