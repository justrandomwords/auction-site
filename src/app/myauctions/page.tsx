'use client'

import { useState, useEffect } from 'react'
import AuctionCard from '../_components/AuctionCard'
import ParameterFrom from './_components/ParameterForm'
import { FormType, FormValues } from './_components/ParameterForm/types'
import { APIurl } from '../api/backendAPI'
import { ShortAuctionData } from '../_types/AuctionData'

export default function MyActions() {
	const [ popupStatus, setPopupStatus ] = useState<FormType>(undefined)
	const [ myauctionsData, setMyAuctionsData ] = useState<ShortAuctionData[] | undefined>(undefined);

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

	async function getMyAuctions() {
		fetch(`${APIurl}/get-my-auc?page=${1}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
		})
		.then(response => response.json())
		.then(data => setMyAuctionsData(data.data.data))
		.catch(error => console.error('Помилка:', error.message));
	};

	useEffect(() => {
		getMyAuctions()
	},[])
	

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
			{myauctionsData?.map((auctionData, i) => {
				const imageURl = JSON.parse(auctionData.images)[0]
				
				return (
					<AuctionCard
						id={auctionData.id}
						title={auctionData.title}
						startPrice={auctionData.price}
						duration={auctionData.startTime}
						buttonClick={updateForm}
						type='edit'
						previewImage={imageURl}
					/>
			)})}
		</div>
	)
}
