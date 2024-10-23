import { User } from '@prisma/client'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export type AuthUser = User

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
