import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchInput() {
	return (
		<div className="grid place-items-center space-y-2">
			<div className="relative">
				<Input id="input-26" className="peer pe-9 ps-9" placeholder="Search..." type="search" />
				<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
					<Search size={16} strokeWidth={2} />
				</div>
			</div>
		</div>
	);
}
