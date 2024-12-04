import { Input } from "@/components/ui/input";

export interface SearchInputProps {
	className?: string;
}

export default function SearchInput(props: SearchInputProps) {
	return (
		<div className="grid space-y-2">
			<div className="relative grid place-items-center gap-x-5">
				<Input
					id="input-26"
					className={`peer bg-[#2C2E334D] pe-10 ps-10 text-[#EDEDED] placeholder:text-[#EDEDED] ${props.className}`}
					placeholder="Search"
					type="search"
				/>
				<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
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
