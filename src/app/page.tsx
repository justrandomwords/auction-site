import { cardsData } from '@/tempData'
import AuctionCard from './_components/AuctionCard'

export default function Home() {
	return (
		<div className='auctions-container'>
			{cardsData.map(element => (
				<AuctionCard
					key={element.title}
					id='test'
					title={element.title}
					price={element.price}
					time={element.time}
				/>
			))}
		</div>
	)
}
