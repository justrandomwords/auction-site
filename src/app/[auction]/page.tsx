'use client'
import { parsePrice } from '@/utils/parsePrice'
import { useEffect, useState } from 'react'
import PrimaryButton from '../_components/PrimaryButton'
import CurrencyInput from './_components/CurrencyInput'
import History from './_components/History'
import s from './page.module.css'
import ImageNavigator from './_components/ImageNavigator'
import { FullAuctionData } from '../_types/AuctionData'

interface Props {
	params: {
		item: string
	}
}
type TransformerKey = '10' | '50' | '100' | '1.5' | '2.0'

const transformer: Record<TransformerKey, string> = {
	'10': '+ 10 $',
	'50': '+ 50 $',
	'100': '+ 100 $',
	'1.5': '1.5x',
	'2.0': '2x',
}

export default function AuctionPage({ params: { item } }: Props) {
	const [ auctionData, setAuctionData ] = useState<FullAuctionData | undefined>(undefined);

	function getFullAuctionData() {
		fetch('api/fullAuctionInfo', {
			method: 'POST',
			body: JSON.stringify({ id: "78345" })
		})
			.then(responde => responde.json())
			.then(data => {
				setAuctionData(data)
				console.log(data.history);
				
			})
	}

	useEffect(() => {
		getFullAuctionData();
	}, [])


	const [currentValue, setCurrentValue] = useState(0)
	auctionData

	const handleAddValue = (e: any) => {
		const factor = e.target.dataset.val
		let newCurrentValue = 0
		if (factor.includes('.')) {
			newCurrentValue = currentValue * Number(factor)
			setCurrentValue(newCurrentValue)
		} else {
			newCurrentValue = currentValue + Number(factor)
			setCurrentValue(newCurrentValue)
		}
	}

	if(!auctionData) {
		return <div>sdfsdf</div>
	}


	return (
		<div className='grid grid-cols-2 gap-10'>
			<div className='flex flex-col gap-10'>
				<ImageNavigator
					imageURLs={auctionData?.images}
				/>
				<div className='flex flex-col gap-4'>
				{ auctionData?.descroption &&
					<>
						<h3>Description</h3>
						<p>{auctionData.descroption}</p>
					</>
				}
			</div>
			</div>
			<div className='flex flex-col gap-10'>
				<div className='flex flex-col gap-8'>
					<h3>{auctionData.title}</h3>
					<div className='flex justify-between'>
						<div className='grid gap-4'>
							<div className='grid gap-2'>
								<div>Current bet</div>
								<div className='flex'>
									<p className='text-xl font-bold'>{auctionData.price} $</p>
									<p>({'3'} bids)</p>
								</div>
							</div>
							<div>Current bettor: {'Бандера'}</div>
						</div>
						<div className='flex flex-col gap-2 items-end'>
							<p>Time left</p>
							<p className='text-xl font-semibold'>12:02:05</p>
						</div>
					</div>
					<div className='flex justify-between gap-8'>
						<CurrencyInput
							fullWidth
							value={auctionData.price.toString()}
							onChange={(e: React.FormEvent<HTMLInputElement>) => {
								const newVal = parsePrice(e.currentTarget.value)
								setCurrentValue(newVal)
							}}
						/>
						<PrimaryButton className={s.button}>Place bit</PrimaryButton>
					</div>
		
					<div className='grid grid-flow-col gap-4'>
						<PrimaryButton data-val='10' onClick={handleAddValue}>
							+10 $
						</PrimaryButton>
						<PrimaryButton data-val='50' onClick={handleAddValue}>
							+50 $
						</PrimaryButton>
						<PrimaryButton data-val='100' onClick={handleAddValue}>
							+100 $
						</PrimaryButton>
						<PrimaryButton data-val='1.5' onClick={handleAddValue}>
							1.5x
						</PrimaryButton>
						<PrimaryButton data-val='2.0' onClick={handleAddValue}>
							2x
						</PrimaryButton>
					</div>
				</div>

				<div className='flex flex-col gap-2'>
					<p className='px-8'>History</p>
					<History rows={auctionData.history} />
				</div>
			</div>
		</div>
	)
}
