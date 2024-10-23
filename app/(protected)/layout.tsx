import { Sidebar, SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { auth } from '@/lib/auth'
import { LayoutProps } from '@cgambrell/utils'
import { Header } from './components/header'
import { Links } from './components/links'
import { UserMenu } from './components/user-menu'

export default async function ProtectedLayout({ children }: LayoutProps) {
	const user = await auth()

	return (
		<SidebarProvider>
			<Sidebar variant='inset'>
				<Header />
				<Links />
				<UserMenu user={user} />
			</Sidebar>
			<SidebarInset>
				<div className='flex flex-1 flex-col gap-4 p-4 pt-8'>{children}</div>
			</SidebarInset>
		</SidebarProvider>
	)
}
