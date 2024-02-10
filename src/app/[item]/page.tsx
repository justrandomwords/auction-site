'use client'
import { parsePrice } from '@/utils/parsePrice'
import { ThemeProvider } from '@mui/material'
import { useState } from 'react'
import PrimaryButton from '../_components/PrimaryButton'
import { theme } from '../styles/theme'
import CurrencyInput from './components/CurrencyInput'
import History from './components/History'
import s from './page.module.css'

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
	const [bets, setBets] = useState<History.Row[]>([])

	const [currentValue, setCurrentValue] = useState(0)

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

		const newBets: History.Row[] = [
			...bets,
			{
				amount: newCurrentValue.toString(),
				increace: transformer[factor as TransformerKey],
				name: 'Name',
				time: new Date().getTime(),
			},
		]
		setBets(newBets)
	}

	return (
		<ThemeProvider theme={theme}>
			<div className='flex flex-col gap-12'>
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
						<div className='flex justify-between gap-8'>
							<CurrencyInput
								fullWidth
								value={currentValue.toString()}
								onChange={e => {
									const newVal = parsePrice(e.target.value)
									setCurrentValue(newVal)
								}}
							/>
							<PrimaryButton className={s.button}>Place bit</PrimaryButton>
						</div>
						<div className='flex gap-4'>
							<PrimaryButton data-val='10' onClick={handleAddValue}>
								+10$
							</PrimaryButton>
							<PrimaryButton data-val='50' onClick={handleAddValue}>
								+50$
							</PrimaryButton>
							<PrimaryButton data-val='100' onClick={handleAddValue}>
								+100$
							</PrimaryButton>
							<PrimaryButton data-val='1.5' onClick={handleAddValue}>
								1.5x
							</PrimaryButton>
							<PrimaryButton data-val='2.0' onClick={handleAddValue}>
								2x
							</PrimaryButton>
						</div>
					</div>
				</div>
				<div className='grid grid-cols-2 gap-10'>
					<div className='flex flex-col gap-4'>
						<h3>Description</h3>
						<p>
							The condition reports for the lots offered by Santa Fe Art Auction
							(SFAA) are provided as a courtesy and convenience for potential
							buyers. The reports are not intended to nor do they substitute for
							physical examination by a buyer or the buyer&apos;s advisors. The
							condition reports are prepared by SFAA staff members who are not art
							conservators or restorers, nor do they possess the qualifications
							needed for comprehensive evaluation. Each condition report is an
							opinion of the staff member and should not be treated as a statement
							of fact. The absence of a condition report does not imply anything as
							to the condition of a particular lot. Buyers are reminded that the
							limited warranties are set forth in the Terms and Conditions of Sale
							and do not extend to condition. Each lot is sold as-is.
						</p>
					</div>
					<div className='flex flex-col gap-4'>
						<h3>History</h3>
						<History rows={bets} />
					</div>
				</div>
			</div>
		</ThemeProvider>
	)
}
