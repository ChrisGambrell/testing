'use client'

import { ActionButton } from '@/components/action-button'
import { FormInput } from '@/components/form-input'

export function ClientPage() {
	return (
		<form className='grid gap-y-4 gap-x-2 grid-cols-2'>
			<FormInput label='First name' name='firstName' placeholder='Max' />
			<FormInput label='Last name' name='lastName' placeholder='Robinson' />
			<FormInput className='col-span-full' label='Email address' name='email' placeholder='name@example.com' type='email' />
			<FormInput label='Password' name='password' type='password' />
			<FormInput label='Confirm password' name='confirmPassword' type='password' />
			<ActionButton className='col-span-full'>Create account with email</ActionButton>

			<div className='relative col-span-full'>
				<div className='absolute inset-0 flex items-center'>
					<span className='w-full border-t' />
				</div>
				<div className='relative flex justify-center text-xs uppercase'>
					<span className='bg-background px-2 text-muted-foreground'>Or continue with</span>
				</div>
			</div>

			<div className='grid gap-2 col-span-full'>
				<ActionButton variant='outline'>Login with Google</ActionButton>
				<ActionButton variant='outline'>Login with Github</ActionButton>
			</div>
		</form>
	)
}
