import { MouseEventHandler } from "react";

export interface DashboardHeaderButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children?: React.ReactNode;
}

export default function DashboardHeaderButtonProps({ children, onClick }: DashboardHeaderButtonProps) {
	return (
		<button
			className="rounded bg-[#242424] px-3 py-2 outline outline-1 outline-[#5A5A5A] lg:h-[41px]"
			onClick={onClick}
		>
			{children}
		</button>
	);
}
