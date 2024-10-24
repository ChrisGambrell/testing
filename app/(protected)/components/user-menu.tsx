import { logout } from '@/actions/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SidebarFooter, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { PLACEHOLDER_IMAGE } from '@/lib/constants'
import { AuthUser } from '@/lib/utils'
import { BadgeCheckIcon, BellIcon, ChevronsUpDownIcon, CreditCardIcon, LogOutIcon, SparklesIcon } from 'lucide-react'

export function UserMenu({ user }: { user: AuthUser }) {
	return (
		<SidebarFooter>
			<SidebarMenu>
				<SidebarMenuItem>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<SidebarMenuButton
								size='lg'
								className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'>
								<Avatar className='h-8 w-8 rounded-lg'>
									<AvatarImage src={user.image ?? PLACEHOLDER_IMAGE} alt={user.name ?? 'User'} />
									<AvatarFallback className='rounded-lg'>{user.name?.slice(0, 2).toUpperCase()}</AvatarFallback>
								</Avatar>
								<div className='grid flex-1 text-left text-sm leading-tight'>
									<span className='truncate font-semibold'>{user.name}</span>
									<span className='truncate text-xs'>{user.email}</span>
								</div>
								<ChevronsUpDownIcon className='ml-auto size-4' />
							</SidebarMenuButton>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
							side='bottom'
							align='end'
							sideOffset={4}>
							<DropdownMenuLabel className='p-0 font-normal'>
								<div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
									<Avatar className='h-8 w-8 rounded-lg'>
										<AvatarImage src={user.image ?? PLACEHOLDER_IMAGE} alt={user.name ?? 'User'} />
										<AvatarFallback className='rounded-lg'>{user.name?.slice(0, 2).toUpperCase()}</AvatarFallback>
									</Avatar>
									<div className='grid flex-1 text-left text-sm leading-tight'>
										<span className='truncate font-semibold'>{user.name}</span>
										<span className='truncate text-xs'>{user.email}</span>
									</div>
								</div>
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuItem>
									<SparklesIcon />
									Upgrade to Pro
								</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuItem>
									<BadgeCheckIcon />
									Account
								</DropdownMenuItem>
								<DropdownMenuItem>
									<CreditCardIcon />
									Billing
								</DropdownMenuItem>
								<DropdownMenuItem>
									<BellIcon />
									Notifications
								</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
							<form action={logout}>
								<DropdownMenuItem asChild>
									<button className='w-full' type='submit'>
										<LogOutIcon />
										Log out
									</button>
								</DropdownMenuItem>
							</form>
						</DropdownMenuContent>
					</DropdownMenu>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarFooter>
	)
}
