'use client'

import { useState } from 'react'
import AuctionCard from '../_components/AuctionCard'
import ParameterFrom from './_components/ParameterForm'
import { FormType, FormValues } from './_components/ParameterForm/types'

export default function MyActions() {
	const [popupStatus, setPopupStatus] = useState<FormType>(undefined)

	const [defaultFormValues, setDefaultFormValues] = useState<FormValues>({
		id: '',
		title: '',
		price: 0,
		time: '',
	})

	function updateForm(values: FormValues) {
		setPopupStatus('update')
		setDefaultFormValues(values)
	}

	return (
		<div className='auctions-container'>
			{popupStatus && (
				<div className='fixed inset-0 grid place-items-center bg-black/15 z-20'>
					<ParameterFrom
						type={popupStatus}
						closeClick={() => setPopupStatus(undefined)}
						defaultValues={defaultFormValues}
					/>
				</div>
			)}

			<div
				className='grid place-items-center bg-white rounded-lg cursor-pointer'
				onClick={() =>
					updateForm({
						id: '',
						title: '',
						price: 0,
						time: '',
					})
				}
			>
				Create auction
			</div>
			<AuctionCard
				id='468'
				type='edit'
				title='teffghgfghst'
				price={150}
				time={'54546'}
				buttonClick={updateForm}
			/>
			<AuctionCard
				id='453'
				type='closed'
				title='test'
				price={150}
				time={'54546'}
				buttonClick={updateForm}
			/>
			<AuctionCard
				id='783'
				type='sold'
				title='test'
				price={150}
				time={'54546'}
				buttonClick={updateForm}
			/>
		</div>
	)
}
