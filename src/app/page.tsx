import { cardsData } from '@/tempData'
import Link from 'next/link'
import AuctionCard from './_components/AuctionCard'

export default function Home() {
	return (
		<div className='auctions-container'>
			{cardsData.map((element, i) => (
				<Link href={element.time} key={i}>
					<AuctionCard
						id='test'
						title={element.title}
						price={element.price}
						time={element.time}
					/>
				</Link>
			))}
		</div>
	)
}
