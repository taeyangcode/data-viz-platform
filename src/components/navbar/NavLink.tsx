import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export interface NavLinkProps {
	title: string;
	// relative path
	url: string;

	className?: string;
}

export default function NavLink(props: NavLinkProps) {
	const { title, url, className } = props;

	return (
		<Button variant="secondary" className={`bg-transparent focus:bg-[#242424] active:bg-[#242424] ${className}`}>
			<Link to={url}>{title}</Link>
		</Button>
	);
}
