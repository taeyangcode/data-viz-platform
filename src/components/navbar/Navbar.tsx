import SearchInput from "@/components/search-input/SearchInput";
import NavLink from "@/components/navbar/NavLink";
import { useState } from "react";

export default function Navbar() {
	const [activeLink, setActiveLink] = useState<LinkTitles>("Charging Stations");

	return (
		<nav className="box-border h-[87px] w-full px-6">
			<div className="flex h-full w-full items-center justify-between">
				<div className="flex h-full flex-row items-center gap-x-4">
					{linkDetails.map(({ title, url }) => (
						<NavLink
							key={title}
							title={title}
							url={url}
							active={activeLink === title}
							onClick={(_) => setActiveLink(title)}
						/>
					))}
				</div>
				<div className="flex h-full">
					<SearchInput />
				</div>
			</div>
		</nav>
	);
}

const linkDetails = [
	{
		title: "Charging Stations",
		url: "",
	},
	{
		title: "Fleet Sizing",
		url: "",
	},
	{
		title: "Parking",
		url: "",
	},
] as const;

type LinkTitles = (typeof linkDetails)[number]["title"];
