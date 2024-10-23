'use client'

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
	HomeIcon,
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
import { usePathname } from 'next/navigation'

const links: {
	label: string
	links: {
		actions?: { icon: LucideIcon; label: string }[]
		children?: { exact?: boolean; href: string; label: string }[]
		exact?: boolean
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
				href: '/',
				exact: true,
				icon: HomeIcon,
				label: 'Home',
			},
			{
				href: '/',
				icon: SquareTerminalIcon,
				label: 'Playground',
				defaultOpen: false,
				children: [
					{ href: '/playground', exact: true, label: 'History' },
					{ href: '/playground/starred', label: 'Starred' },
					{ href: '/playground/settings', label: 'Settings' },
				],
			},
			{
				href: '/',
				icon: BotIcon,
				label: 'Models',
				defaultOpen: false,
				children: [
					{ href: '/models/genesis', label: 'Genesis' },
					{ href: '/models/explorer', label: 'Explorer' },
					{ href: '/models/quantum', label: 'Quantum' },
				],
			},
			{
				href: '/',
				icon: BookOpenIcon,
				label: 'Documentation',
				defaultOpen: false,
				children: [
					{ href: '/documentation/introduction', label: 'Introduction' },
					{ href: '/documentation/get-started', label: 'Get Started' },
					{ href: '/documentation/tutorials', label: 'Tutorials' },
					{ href: '/documentation/changelog', label: 'Changelog' },
				],
			},
			{
				href: '/',
				icon: Settings2Icon,
				label: 'Settings',
				defaultOpen: true,
				children: [
					{ href: '/settings', label: 'General' },
					{ href: '/settings/team', label: 'Team' },
					{ href: '/settings/billing', label: 'Billing' },
					{ href: '/settings/limits', label: 'Limits' },
				],
			},
		],
	},
	{
		label: 'Projects',
		links: [
			{
				href: '/projects',
				label: 'Design Engineering',
				icon: FrameIcon,
				actions: [
					{ icon: FolderIcon, label: 'View Project' },
					{ icon: ShareIcon, label: 'Share Project' },
					{ icon: Trash2Icon, label: 'Delete Project' },
				],
			},
			{
				href: '/sales',
				label: 'Sales & Marketing',
				icon: PieChartIcon,
				actions: [
					{ icon: FolderIcon, label: 'View Project' },
					{ icon: ShareIcon, label: 'Share Project' },
					{ icon: Trash2Icon, label: 'Delete Project' },
				],
			},
			{
				href: '/travel',
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
	const pathname = usePathname()

	return (
		<SidebarContent>
			{links.map((group) => (
				<SidebarGroup key={group.label}>
					<SidebarGroupLabel>{group.label}</SidebarGroupLabel>
					<SidebarMenu>
						{group.links.map((link) => (
							<Collapsible key={link.href} asChild defaultOpen={link.defaultOpen}>
								<SidebarMenuItem>
									<SidebarMenuButton
										asChild
										isActive={!link.children && (link.exact ? pathname === link.href : pathname.startsWith(link.href))}
										tooltip={link.label}>
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
															<SidebarMenuSubButton
																asChild
																isActive={
																	child.exact ? pathname === child.href : pathname.startsWith(child.href)
																}>
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
								<Link href='/'>
									<LifeBuoyIcon />
									<span>Support</span>
								</Link>
							</SidebarMenuButton>
							<SidebarMenuButton asChild size='sm'>
								<Link href='/'>
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
