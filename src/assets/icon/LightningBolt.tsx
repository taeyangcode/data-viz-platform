import { IconProps } from "@/assets/icon/types";

export default function LightningBoltIcon({ size, className }: IconProps) {
	return (
		<svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path d="M11 15H6L13 1V9H18L11 23V15Z" className={className} />
		</svg>
	);
}
