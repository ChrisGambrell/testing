import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { MOCK_APP_ICON, MOCK_APP_NAME } from '@/lib/constants'
import { ChevronsUpDownIcon, PlusIcon } from 'lucide-react'

export function Header() {
	return (
		<SidebarHeader>
			<SidebarMenu>
				<SidebarMenuItem>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<SidebarMenuButton
								size='lg'
								className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'>
								<div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
									<MOCK_APP_ICON className='size-4' />
								</div>
								<div className='grid flex-1 text-left text-sm leading-tight'>
									<span className='truncate font-semibold'>{MOCK_APP_NAME}</span>
									{/* TODO: The actual plan */}
									<span className='truncate text-xs'>Free</span>
								</div>
								<ChevronsUpDownIcon className='ml-auto' />
							</SidebarMenuButton>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
							align='start'
							side='bottom'
							sideOffset={4}>
							<DropdownMenuLabel className='text-xs text-muted-foreground'>Teams</DropdownMenuLabel>
							<DropdownMenuItem className='gap-2 p-2'>
								<div className='flex size-6 items-center justify-center rounded-sm border'>
									<MOCK_APP_ICON className='size-4 shrink-0' />
								</div>
								{MOCK_APP_NAME}
								<DropdownMenuShortcut>⌘1</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem className='gap-2 p-2'>
								<div className='flex size-6 items-center justify-center rounded-md border bg-background'>
									<PlusIcon className='size-4' />
								</div>
								<div className='font-medium text-muted-foreground'>Add team</div>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarHeader>
	)
}
