import LightningBoltIcon from "@/assets/icon/LightningBolt";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import DashboardHeaderButton from "@/pages/dashboard/DashboardHeaderButton";
import EditVariablesSheet from "@/pages/dashboard/EditVariablesSheet";
import { HistoryIcon, UploadIcon } from "lucide-react";
import { useState } from "react";

export interface DashboardHeaderProps {
	title: string;
}

export default function DashboardHeader({ title }: DashboardHeaderProps) {
	const [editVariablesSlideOpen, setEditVariableSlideOpen] = useState<boolean>(false);

	return (
		<div className="flex w-full items-center justify-between">
			<h1 className="flex items-center gap-x-4 font-bold text-white sm:text-2xl lg:text-3xl">
				<LightningBoltIcon size={30} className="inline-flex fill-white" />
				{title}
			</h1>
			<div className="flex items-center justify-evenly gap-x-4">
				<DashboardHeaderButton>
					<HistoryIcon size={22} stroke="#B9B9B9" />
				</DashboardHeaderButton>
				<Sheet open={editVariablesSlideOpen}>
					<DashboardHeaderButton onClick={(_) => setEditVariableSlideOpen(!editVariablesSlideOpen)}>
						<span className="text-white">Edit Variables</span>
					</DashboardHeaderButton>
					<SheetContent className="min-w-[800px] border-none bg-[#0E0D0D] outline outline-2 outline-[#525252]">
						<EditVariablesSheet
							editVariablesSlideOpen={editVariablesSlideOpen}
							setEditVariablesSlideOpen={setEditVariableSlideOpen}
						/>
					</SheetContent>
				</Sheet>
				<DashboardHeaderButton>
					<UploadIcon size={22} stroke="#B9B9B9" />
				</DashboardHeaderButton>
			</div>
		</div>
	);
}
