import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import { MenuIcon } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

import HomeIcon from "@/assets/icon/Home.tsx";
import BellIcon from "@/assets/icon/Bell.tsx";
import ClipboardIcon from "@/assets/icon/Clipboard.tsx";
import CloudUploadIcon from "@/assets/icon/CloudUpload.tsx";
import CogIcon from "@/assets/icon/Cog.tsx";
import AccountCircleIcon from "@/assets/icon/AccountCircle.tsx";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function AppSidebar() {
	const { toggleSidebar } = useSidebar();
	const [activeItem, setActiveItem] = useState<ItemTitles>("Home");

	return (
		<Sidebar className="w-20 border-none">
			<SidebarContent>
				<SidebarGroup className="grid h-full w-full grid-rows-[auto_1fr_auto]">
					<SidebarGroupContent className="grid h-[87px] place-items-center">
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<MenuIcon fill="white" onClick={toggleSidebar} className="hover:cursor-pointer" />
								</TooltipTrigger>
								<TooltipContent>
									<kbd className="inline-flex h-5 max-h-full items-center rounded border border-border bg-transparent p-2 font-[inherit] text-sm font-medium text-white/80">
										⌘B
									</kbd>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</SidebarGroupContent>
					<SidebarGroupContent>
						<SidebarMenu className="grid place-items-center gap-y-6">
							{sidebarItems.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton
										className={`flex aspect-square h-10 w-10 items-center justify-center p-4 ${activeItem === item.title && "bg-sidebar-accent text-sidebar-accent-foreground]"}`}
										onClick={() => setActiveItem(item.title)}
									>
										<Link to={item.url}>
											<item.icon
												size={24}
												className={`fill-[#858882] ${activeItem === item.title && "fill-white"}`}
											/>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
					<SidebarFooter className="grid h-[87px] place-items-center">
						<AccountCircleIcon size={24} className="fill-white hover:cursor-pointer" />
					</SidebarFooter>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}

const sidebarItems = [
	{
		title: "Home",
		url: "",
		icon: HomeIcon,
	},
	{
		title: "Bell",
		url: "",
		icon: BellIcon,
	},
	{
		title: "Clipboard",
		url: "",
		icon: ClipboardIcon,
	},
	{
		title: "Cloud Upload",
		url: "",
		icon: CloudUploadIcon,
	},
	{
		title: "Cog",
		url: "",
		icon: CogIcon,
	},
] as const;

type ItemTitles = (typeof sidebarItems)[number]["title"];
