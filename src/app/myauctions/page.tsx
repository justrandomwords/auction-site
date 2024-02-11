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
		startPrice: 0,
		time: '',
	})

	function createForm() {
		setPopupStatus('create')
		setDefaultFormValues({
			id: '',
			title: '',
			startPrice: 0,
			time: '',
		})
	}

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
				onClick={() => createForm()}
			>
				Create auction
			</div>
			<AuctionCard
				id='468'
				type='edit'
				title='teffghgfghst'
				startPrice={150}
				time={'54546'}
				buttonClick={updateForm}
				previewImage='https://images.dog.ceo/breeds/poodle-standard/n02113799_2932.jpg'
			/>
			<AuctionCard
				id='453'
				type='closed'
				title='test'
				startPrice={150}
				time={'54546'}
				buttonClick={updateForm}
				previewImage='https://images.dog.ceo/breeds/eskimo/n02109961_18009.jpg'
			/>
			<AuctionCard
				id='783'
				type='sold'
				title='test'
				startPrice={150}
				time={'54546'}
				buttonClick={updateForm}
				previewImage='https://images.dog.ceo/breeds/spaniel-cocker/n02102318_8482.jpg'
			/>
		</div>
	)
}
