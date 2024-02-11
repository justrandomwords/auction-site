'use client'

import { cardsData } from '@/tempData'
import Link from 'next/link'
import AuctionCard from './_components/AuctionCard'
import { useEffect, useState } from 'react'
import { ShortAuctionData } from './_types/AuctionData'
import { APIurl } from './api/backendAPI'

export default function Home() {
	const [ auctionsData, setAuctionsData ] = useState<ShortAuctionData[] | undefined>(undefined);

	async function getAuctions() {
		fetch(`${APIurl}/get-auc?page=${1}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
		})
			.then(response => response.json())
			.then(data => setAuctionsData(data.data.data))
			.catch(error => console.error('Помилка:', error.message))
	
	}

	useEffect(() => {
		getAuctions();
	}, [])

	return (
		<div className='auctions-container'>
			{auctionsData?.map((auctionData, i) => {
				const imageURl = JSON.parse(auctionData.images)[0]
				
				return (
				<Link href={auctionData.id.toString()} key={i}>
					<AuctionCard
						id={auctionData.id}
						title={auctionData.title}
						startPrice={auctionData.price}
						duration={auctionData.startTime}
						previewImage={imageURl}
					/>
				</Link>
			)})}
		</div>
	)
}