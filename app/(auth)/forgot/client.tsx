'use client'

import { ActionButton } from '@/components/action-button'
import { FormInput } from '@/components/form-input'

export function ClientPage() {
	return (
		<form className='grid gap-4'>
			<FormInput label='Email address' name='email' placeholder='name@example.com' type='email' />
			<ActionButton>Send magic link</ActionButton>
		</form>
	)
}
