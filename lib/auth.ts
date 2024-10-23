import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth, { NextAuthConfig } from 'next-auth'
import prisma from './db'
import { AuthUser } from './utils'

export const authConfig = {
	adapter: PrismaAdapter(prisma),
	callbacks: {
		authorized: ({ auth, request: { nextUrl } }) => {
			const allowedRoutes = ['/forgot', '/login', '/register', '/privacy', '/terms']

			const isAuthed = !!auth?.user
			const isAuthRoute = allowedRoutes.some((route) => nextUrl.pathname.startsWith(route))

			if (!isAuthRoute) {
				if (isAuthed) return true
				return false
			} else if (isAuthed) return Response.redirect(new URL('/', nextUrl))
			return true
		},
	},
	pages: { signIn: '/login' },
	providers: [],
	session: { strategy: 'jwt' },
} satisfies NextAuthConfig

export const { handlers, auth: session, signIn, signOut } = NextAuth(authConfig)

export const auth = async (): Promise<AuthUser> => {
	const session = await NextAuth(authConfig).auth()
	if (!session?.user) throw new Error('Not authenticated.')

	const user = await prisma.user.findFirst({ where: { email: session.user.email ?? '' } })
	if (!user) throw new Error('User not found')

	return user
}
