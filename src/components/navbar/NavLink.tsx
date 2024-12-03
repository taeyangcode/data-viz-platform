import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export interface NavLinkProps {
	title: string;
	url: string; // relative path
	active: boolean;
	onClick: React.MouseEventHandler<HTMLButtonElement>;

	className?: string;
}

export default function NavLink(props: NavLinkProps) {
	const { title, url, active, onClick, className } = props;

	return (
		<Button
			variant="secondary"
			onClick={onClick}
			className={`bg-transparent focus-within:bg-[#242424] focus-within:outline focus-within:outline-1 focus-within:outline-[#5A5A5A] ${active && "bg-[#242424] outline outline-1 outline-[#5A5A5A]"} ${className}`}
		>
			<Link to={url} className="focus:outline-none">
				{title}
			</Link>
		</Button>
	);
}
