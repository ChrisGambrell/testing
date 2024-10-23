'use client'

import { ActionButton } from '@/components/action-button'
import { FormInput } from '@/components/form-input'

export function ClientPage() {
	return (
		<form className='grid gap-4'>
			<FormInput label='Email address' name='email' placeholder='name@example.com' type='email' />
			<FormInput label='Password' name='password' type='password' />
			<ActionButton>Sign in with email</ActionButton>

			<div className='relative'>
				<div className='absolute inset-0 flex items-center'>
					<span className='w-full border-t' />
				</div>
				<div className='relative flex justify-center text-xs uppercase'>
					<span className='bg-background px-2 text-muted-foreground'>Or continue with</span>
				</div>
			</div>

			<div className='grid gap-2'>
				<ActionButton variant='outline'>Login with Google</ActionButton>
				<ActionButton variant='outline'>Login with Github</ActionButton>
			</div>
		</form>
	)
}
