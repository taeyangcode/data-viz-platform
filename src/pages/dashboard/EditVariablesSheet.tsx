import { Input } from "@/components/ui/input";
import { CheckIcon, ChevronDownIcon, InfoIcon, PlusIcon, RotateCwIcon, SparklesIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";

const sampleContext: Record<string, VariableCategoryContext> = {
	"Co2 Distribution": {
		title: "Co2 Distribution",
		description:
			"But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a skateboard, making it suitable for people of all ages. Whether you're a student, a professional, or a senior citizen, Switch adapts to your needs and lifestyle.",
	},
} as const;

export interface EditVariablesSheetProps {
	editVariablesSlideOpen: boolean;
	setEditVariablesSlideOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditVariablesSheet({
	editVariablesSlideOpen,
	setEditVariablesSlideOpen,
}: EditVariablesSheetProps) {
	const [context, setContext] = useState<VariableCategoryContext | undefined>(undefined);

	return (
		<div className="flex h-full w-full flex-col gap-y-8 p-6">
			<div className="flex h-fit w-full flex-row items-center justify-between">
				<span className="text-2xl font-medium text-white">Edit Variables</span>
				<button onClick={() => setEditVariablesSlideOpen(!editVariablesSlideOpen)}>
					<XIcon size={24} stroke="#FFFFFF" />
				</button>
			</div>
			<div className="grid h-10 w-full grid-cols-4 grid-rows-1 items-center justify-evenly gap-x-4">
				<EditVariablesSearchInput className="col-span-2" />
				<button className="flex h-full flex-row items-center justify-center gap-x-2 rounded bg-[#242424] px-4 py-2 outline outline-1 outline-[#5A5A5A]">
					<SparklesIcon size={18} fill="#B9B9B9" stroke="#B9B9B9" />
					<span className="text-[16px] font-normal text-white">Autofill</span>
				</button>
				<button className="flex h-full flex-row items-center justify-center gap-x-2 rounded bg-[#23291E] px-4 py-2 outline outline-1 outline-[#C8E972]">
					<RotateCwIcon size={18} stroke="#C9FF3B" />
					<span className="text-[16px] font-normal text-[#C9FF3B]">Rerun</span>
				</button>
			</div>

			<VariableCategoryContainer context={context}>
				<VariableCategory title="Variable category 1">
					<VariableCategoryButton text="Carbon 1" onHover={() => {}} />
					<VariableCategoryButton
						text="Co2 Distribution"
						onHover={() => setContext(sampleContext["Co2 Distribution"])}
						onLeave={() => setContext(undefined)}
					/>
					<VariableCategoryButton text="Fleet sizing" onHover={() => {}} />
				</VariableCategory>

				<VariableCategory title="Variable category 2">
					<VariableCategoryButton text="Parking Rate" onHover={() => {}} />
					<VariableCategoryButton text="Border Rate" onHover={() => {}} />
					<VariableCategoryButton text="Request rate" onHover={() => {}} />
					<VariableCategoryButton text="Variable 1" onHover={() => {}} />
					<VariableCategoryButton text="Variable 1" onHover={() => {}} />
					<VariableCategoryButton text="Variable 1" onHover={() => {}} />
				</VariableCategory>

				<VariableCategory title="Variable category 3">
					<VariableCategoryButton text="Variable 1" onHover={() => {}} />
					<VariableCategoryButton text="Variable 1" onHover={() => {}} />
					<VariableCategoryButton text="Variable 1" onHover={() => {}} />
				</VariableCategory>
			</VariableCategoryContainer>

			<VariableSlideContainer title="Primary Variables" />
			<VariableSlideContainer title="Secondary Variables" />
		</div>
	);
}

function EditVariablesSearchInput({ className }: { className?: string }) {
	return (
		<div className={`h-full ${className}`}>
			<div className="relative h-full rounded outline outline-1 outline-[#5A5A5A]">
				<Input
					id="input-09"
					className="peer h-full border-none bg-[#2C2E334D] pe-10 ps-10 text-[#EDEDED] placeholder:text-[#EDEDED]"
					placeholder="Search"
					type="input"
				/>
				<div className="pointer-events-none absolute inset-y-0 start-0 flex h-full items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
					<MagnifyingGlass />
				</div>
			</div>
		</div>
	);
}

function MagnifyingGlass() {
	return (
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M4.03523 8.88632C4.03523 6.65722 5.84228 4.85018 8.07138 4.85018C10.3005 4.85018 12.1075 6.65722 12.1075 8.88632C12.1075 11.1154 10.3005 12.9225 8.07138 12.9225C5.84228 12.9225 4.03523 11.1154 4.03523 8.88632ZM8.07138 3.23572C4.95064 3.23572 2.42078 5.76558 2.42078 8.88632C2.42078 12.0071 4.95064 14.5369 8.07138 14.5369C9.34058 14.5369 10.5121 14.1185 11.4554 13.412L15.5729 17.5294C15.8881 17.8446 16.3992 17.8446 16.7145 17.5294C17.0297 17.2142 17.0297 16.703 16.7145 16.3878L12.597 12.2704C13.3035 11.3271 13.722 10.1555 13.722 8.88632C13.722 5.76558 11.1921 3.23572 8.07138 3.23572Z"
				fill="#EDEDED"
			/>
		</svg>
	);
}

type VariableCategoryContext = {
	title: string;
	description: string;
};

interface VariableCategoryContainerProps {
	context?: VariableCategoryContext;
	children: React.ReactNode;
}

function VariableCategoryContainer({ context, children }: VariableCategoryContainerProps) {
	const transitions = useTransition(context, {
		from: { maxHeight: 0, opacity: 0, overflow: "hidden" },
		enter: { maxHeight: 1_000, opacity: 1, overflow: "hidden" },
		leave: { maxHeight: 0, opacity: 0, overflow: "hidden" },
		config: { duration: 950 },
	});

	return (
		<div className="flex h-fit w-full flex-col rounded bg-[#161618] outline outline-1 outline-[#525252]">
			<div className="flex h-fit w-full flex-col gap-y-6 p-8 pb-6">{children}</div>

			{transitions(
				(style, item) =>
					item && (
						<animated.div style={style}>
							<div className="flex flex-col gap-y-4 rounded bg-[#222324] p-8 outline outline-1 outline-[#525252]">
								<div className="flex flex-row items-center space-x-4">
									<span className="font-base text-xl tracking-wide text-white">{item.title}</span>
									<InfoIcon size={16} stroke="#FFFFFF" />
								</div>
								<p className="text-sm leading-6 text-[#BBBBBB]">{item.description}</p>
							</div>
						</animated.div>
					),
			)}
		</div>
	);
}

interface VariableCategoryProps {
	title: string;
	children: React.ReactNode;
}

function VariableCategory({ title, children }: VariableCategoryProps) {
	return (
		<div className="flex h-fit w-full flex-col gap-y-4">
			<span className="text-base font-medium text-[#D5D5D5]">{title}</span>
			<div className="flex h-fit w-full min-w-0 flex-row flex-wrap gap-x-6 gap-y-6">{children}</div>
		</div>
	);
}

interface VariableCategoryButtonProps {
	text: string;
	onHover?: () => void;
	onLeave?: () => void;
}

function VariableCategoryButton({ text, onHover, onLeave }: VariableCategoryButtonProps) {
	const [active, setActive] = useState<boolean>(false);
	const [hover, setHover] = useState<boolean>(false);

	const onClickEffect = () => setActive(!active);

	const onEnterEffect = (_?: React.MouseEvent<HTMLButtonElement>) => {
		setHover(true);
		if (active) {
			onHover?.();
		}
	};

	const onLeaveEffect = (_?: React.MouseEvent<HTMLButtonElement>) => {
		onLeave?.();
		setHover(false);
	};

	useEffect(() => {
		if (active) {
			onEnterEffect();
		}
	}, [active]);

	return (
		<button
			className={`flex h-fit w-fit flex-row items-center justify-between gap-x-6 rounded-full px-4 py-2 outline outline-[0.5px] transition-all duration-300 ${hover ? "outline-[#C9FF3B]" : active ? "outline-[#C9FF3B]" : "outline-[#D5D5D5]"} ${hover ? "bg-[#282E16]" : active ? "bg-[#2F351B]" : "bg-[#5959594D]"}`}
			onClick={onClickEffect}
			onMouseEnter={onEnterEffect}
			onMouseLeave={onLeaveEffect}
			style={{
				boxShadow: hover ? "0px 4px 4px rgba(201, 255, 59, 0.2)" : "none",
			}}
		>
			<span className={`${hover ? "text-[#C8E972FD]" : active ? "text-[#C8E972FD]" : "text-[#AFAFAF]"}`}>
				{text}
			</span>
			<div className="flex items-center space-x-2">
				<SparklesIcon
					size={16}
					fill={hover ? "#C8E972" : active ? "#C8E972" : "#AFAFAF"}
					stroke={hover ? "#C8E972" : active ? "#C8E972" : "#AFAFAF"}
				/>
				{active ? (
					<CheckIcon
						size={16}
						onClick={onClickEffect}
						stroke={hover ? "#C8E972" : active ? "#C8E972" : "#AFAFAF"}
					/>
				) : (
					<PlusIcon
						size={16}
						onClick={onClickEffect}
						fill={hover ? "#C8E972" : active ? "#C8E972" : "#AFAFAF"}
						stroke={hover ? "#C8E972" : active ? "#C8E972" : "#AFAFAF"}
					/>
				)}
			</div>
		</button>
	);
}

interface VariableSlideContainerProps {
	title: string;
}

function VariableSlideContainer({ title }: VariableSlideContainerProps) {
	return (
		<div className="flex h-fit w-full flex-row items-center justify-between rounded bg-[#222324] px-6 py-4 outline outline-1 outline-[#525252]">
			<span className="font-base text-xl text-[#C8E972]">{title}</span>
			<button className="grid place-items-center rounded-full bg-[#18181A80] px-3 py-1 outline outline-1 outline-[#C8E972]">
				<ChevronDownIcon size={24} stroke="#C8E972" />
			</button>
		</div>
	);
}
