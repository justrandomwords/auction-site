'use client'

import { cardsData } from '@/tempData'
import Link from 'next/link'
import AuctionCard from './_components/AuctionCard'
import { useEffect, useState } from 'react'
import { ShortAuctionData } from './_types/AuctionData'

export default function Home() {
	const [ auctionsData, setAuctionsData ] = useState<ShortAuctionData[] | undefined>(undefined);

	async function getAuctions() {
		fetch('api/shortAuctionInfo')
			.then(responde => responde.json())
			.then(data => setAuctionsData(data)
			)
	}

	useEffect(() => {
		getAuctions();
	}, [])

	return (
		<div className='auctions-container'>
			{auctionsData?.map((auctionData, i) => (
				<Link href={auctionData.id} key={i}>
					<AuctionCard
						id={auctionData.id}
						title={auctionData.title}
						startPrice={auctionData.price}
						time={auctionData.startTime}
						previewImage={auctionData.image}
					/>
				</Link>
			))}
		</div>
	)
}