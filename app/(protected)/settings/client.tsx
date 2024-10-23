'use client'

import { updateName, updatePassword } from '@/actions/user'
import { ActionButton } from '@/components/action-button'
import { FormInput } from '@/components/form-input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { AuthUser } from '@/lib/utils'
import { useFormState } from 'react-dom'

export function ClientPage({ user }: { user: AuthUser }) {
	const [nameState, nameAction] = useFormState(updateName, null)
	const [passwordState, passwordAction] = useFormState(updatePassword, null)

	return (
		<div className='grid gap-6 max-w-4xl mx-auto w-full'>
			<h2 className='text-3xl font-bold'>Settings</h2>
			<form action={nameAction}>
				<Card>
					<CardHeader>
						<CardTitle>Your name</CardTitle>
						<CardDescription>The name you use to identify yourself.</CardDescription>
					</CardHeader>
					<CardContent>
						<FormInput
							className='max-w-md'
							name='name'
							placeholder={user.name ?? ''}
							defaultValue={user.name ?? ''}
							error={nameState?.errors?.name}
						/>
					</CardContent>
					<CardFooter className='border-t px-6 py-4'>
						<ActionButton>Save</ActionButton>
					</CardFooter>
				</Card>
			</form>
			<form action={passwordAction}>
				<Card>
					<CardHeader>
						<CardTitle>Your password</CardTitle>
						<CardDescription>Change your password to something more secure.</CardDescription>
					</CardHeader>
					<CardContent className='grid gap-2'>
						<FormInput
							className='max-w-md'
							name='password'
							placeholder='New password'
							type='password'
							error={passwordState?.errors?.password}
						/>
						<FormInput
							className='max-w-md'
							name='confirmPassword'
							placeholder='Confirm password'
							type='password'
							error={passwordState?.errors?.confirmPassword}
						/>
					</CardContent>
					<CardFooter className='border-t px-6 py-4'>
						<ActionButton>Save</ActionButton>
					</CardFooter>
				</Card>
			</form>
		</div>
	)
}
