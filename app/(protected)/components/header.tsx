import { SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { MOCK_APP_ICON, MOCK_APP_NAME } from '@/lib/constants'
import Link from 'next/link'

export function Header() {
	return (
		<SidebarHeader>
			<SidebarMenu>
				<SidebarMenuItem>
					<SidebarMenuButton size='lg' asChild>
						<Link href='/'>
							<div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
								<MOCK_APP_ICON className='size-4' />
							</div>
							<div className='grid flex-1 text-left text-sm leading-tight'>
								<span className='truncate font-semibold'>{MOCK_APP_NAME}</span>
								{/* TODO: Plan name */}
								<span className='truncate text-xs'>Free</span>
							</div>
						</Link>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarHeader>
	)
}
