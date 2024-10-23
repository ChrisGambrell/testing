import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import {
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import {
	BookOpenIcon,
	BotIcon,
	ChevronRightIcon,
	FolderIcon,
	FrameIcon,
	LifeBuoyIcon,
	LucideIcon,
	MapIcon,
	MoreHorizontalIcon,
	PieChartIcon,
	SendIcon,
	Settings2Icon,
	ShareIcon,
	SquareTerminalIcon,
	Trash2Icon,
} from 'lucide-react'
import Link from 'next/link'

const links: {
	label: string
	links: {
		actions?: { icon: LucideIcon; label: string }[]
		children?: { href: string; label: string }[]
		defaultOpen?: boolean
		href: string
		icon: LucideIcon
		label: string
	}[]
}[] = [
	{
		label: 'Platform',
		links: [
			{
				href: '#',
				icon: SquareTerminalIcon,
				label: 'Playground',
				defaultOpen: true,
				children: [
					{ href: '#', label: 'History' },
					{ href: '#', label: 'Starred' },
					{ href: '#', label: 'Settings' },
				],
			},
			{
				href: '#',
				icon: BotIcon,
				label: 'Models',
				defaultOpen: true,
				children: [
					{ href: '#', label: 'Genesis' },
					{ href: '#', label: 'Explorer' },
					{ href: '#', label: 'Quantum' },
				],
			},
			{
				href: '#',
				icon: BookOpenIcon,
				label: 'Documentation',
				defaultOpen: true,
				children: [
					{ href: '#', label: 'Introduction' },
					{ href: '#', label: 'Get Started' },
					{ href: '#', label: 'Tutorials' },
					{ href: '#', label: 'Changelog' },
				],
			},
			{
				href: '#',
				icon: Settings2Icon,
				label: 'Settings',
				children: [
					{ href: '#', label: 'General' },
					{ href: '#', label: 'Team' },
					{ href: '#', label: 'Billing' },
					{ href: '#', label: 'Limits' },
				],
			},
		],
	},
	{
		label: 'Projects',
		links: [
			{
				href: '#',
				label: 'Design Engineering',
				icon: FrameIcon,
				actions: [
					{ icon: FolderIcon, label: 'View Project' },
					{ icon: ShareIcon, label: 'Share Project' },
					{ icon: Trash2Icon, label: 'Delete Project' },
				],
			},
			{
				href: '#',
				label: 'Sales & Marketing',
				icon: PieChartIcon,
				actions: [
					{ icon: FolderIcon, label: 'View Project' },
					{ icon: ShareIcon, label: 'Share Project' },
					{ icon: Trash2Icon, label: 'Delete Project' },
				],
			},
			{
				href: '#',
				label: 'Travel',
				icon: MapIcon,
				actions: [
					{ icon: FolderIcon, label: 'View Project' },
					{ icon: ShareIcon, label: 'Share Project' },
					{ icon: Trash2Icon, label: 'Delete Project' },
				],
			},
		],
	},
]

export function Links() {
	return (
		<SidebarContent>
			{links.map((group) => (
				<SidebarGroup key={group.label}>
					<SidebarGroupLabel>{group.label}</SidebarGroupLabel>
					<SidebarMenu>
						{group.links.map((link) => (
							<Collapsible key={link.href} asChild defaultOpen={link.defaultOpen}>
								<SidebarMenuItem>
									<SidebarMenuButton asChild tooltip={link.label}>
										<Link href={link.href}>
											<link.icon />
											<span>{link.label}</span>
										</Link>
									</SidebarMenuButton>
									{link.children?.length && (
										<>
											<CollapsibleTrigger asChild>
												<SidebarMenuAction className='data-[state=open]:rotate-90'>
													<ChevronRightIcon />
													<span className='sr-only'>Toggle</span>
												</SidebarMenuAction>
											</CollapsibleTrigger>
											<CollapsibleContent>
												<SidebarMenuSub>
													{link.children?.map((child) => (
														<SidebarMenuSubItem key={child.label}>
															<SidebarMenuSubButton asChild>
																<Link href={child.href}>{child.label}</Link>
															</SidebarMenuSubButton>
														</SidebarMenuSubItem>
													))}
												</SidebarMenuSub>
											</CollapsibleContent>
										</>
									)}
									{link.actions?.length && (
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<SidebarMenuAction showOnHover>
													<MoreHorizontalIcon />
													<span className='sr-only'>More</span>
												</SidebarMenuAction>
											</DropdownMenuTrigger>
											<DropdownMenuContent className='w-48' side='bottom' align='end'>
												{link.actions.map((action) => (
													<DropdownMenuItem key={action.label}>
														<action.icon className='text-muted-foreground' />
														<span>{action.label}</span>
													</DropdownMenuItem>
												))}
											</DropdownMenuContent>
										</DropdownMenu>
									)}
								</SidebarMenuItem>
							</Collapsible>
						))}
					</SidebarMenu>
				</SidebarGroup>
			))}
			<SidebarGroup className='mt-auto'>
				<SidebarGroupContent>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton asChild size='sm'>
								<Link href='#'>
									<LifeBuoyIcon />
									<span>Support</span>
								</Link>
							</SidebarMenuButton>
							<SidebarMenuButton asChild size='sm'>
								<Link href='#'>
									<SendIcon />
									<span>Feedback</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</SidebarContent>
	)
}
