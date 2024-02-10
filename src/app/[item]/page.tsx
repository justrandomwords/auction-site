import CurrencyInput from './components/CurrencyInput'

interface Props {
	params: {
		item: string
	}
}

export default function AuctionPage({ params: { item } }: Props) {
	console.log('item:', item)

	return (
		<div className='grid grid-cols-2 gap-10'>
			<div style={{ backgroundColor: 'gray' }}></div>
			<div className='flex flex-col gap-8'>
				<h3>
					Кулер для процесора Be quiet! Pure Rock 2 Black
					(115X/1200/2011v3/2066/AM2-AM4/1700) (BK007)
				</h3>
				<div className='flex justify-between'>
					<div className=''>
						<div>Current bet</div>
						<div className='flex'>
							<p className='text-xl font-bold'>{'1 015'} $</p>
							<p>({'3'} bids)</p>
						</div>
						<div>Current bettor: {'Бандера'}</div>
					</div>
					<div className='flex flex-col items-end'>
						<p>Time left</p>
						<p className='text-xl font-semibold'>12:02:05</p>
					</div>
				</div>
				<div>
					<CurrencyInput />
				</div>
				<div></div>
			</div>
		</div>
	)
}
