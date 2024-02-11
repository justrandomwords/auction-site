'use client'

import Image from 'next/image'
import { useState } from 'react'

type ProfileButtonProps = {
	fullName: string
}

export default function ProfileButton({ fullName }: ProfileButtonProps) {
	const [isPopupOpen, setIsPopupOpen] = useState(true)
	function updateIsPopupOpen() {
		setIsPopupOpen(prevCondition => !prevCondition)
	}

	return (
		<div
			className='relative rounded-full bg-white p-3 cursor-pointer'
			onClick={updateIsPopupOpen}
		>
			<Image width={24} height={24} alt='userLogo' src='/userLogo.png' />
			{isPopupOpen && (
				<div className='absolute grid gap-4 top-[5.5rem] right-0 px-6 py-4 rounded-2xl bg-white *:whitespace-nowrap *: text-center'>
					<p className='font-bold'>{fullName}</p>
					<button className='transition-colors duration-100 hover:text-negative'>
						Siqn out
					</button>
				</div>
			)}
		</div>
	)
}
