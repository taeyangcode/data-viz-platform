import SearchInput from "@/components/search-input/SearchInput";
import NavLink from "@/components/navbar/NavLink";

export default function Navbar() {
	return (
		<nav className="h-[87px] w-full">
			<div className="flex h-full w-full items-center justify-around">
				<div className="flex h-full flex-row items-center gap-x-4">
					<NavLink title="Charging Stations" url="" />
					<NavLink title="Fleet Sizing" url="" />
					<NavLink title="Parking" url="" />
				</div>
				<div className="flex h-full">
					<SearchInput />
				</div>
			</div>
		</nav>
	);
}
