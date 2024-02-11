'use client'
import { ChangeEvent } from 'react'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const defaultMaskOptions = {
	prefix: '',
	suffix: ' $',
	includeThousandsSeparator: true,
	thousandsSeparatorSymbol: ' ',
	allowDecimal: true,
	decimalSymbol: '.',
	decimalLimit: 2, // how many digits allowed after the decimal
	integerLimit: 15, // limit length of integer numbers
	allowNegative: false,
	allowLeadingZeroes: false,
	maskOptions: {},
}

const CurrencyInput = ({
	maskOptions,
	fullWidth,
	...inputProps
}: CurrencyInput.Props) => {
	const currencyMask = createNumberMask({
		...defaultMaskOptions,
		...maskOptions,
	})

	return (
		<MaskedInput
			style={{ width: fullWidth ? '100%' : 'auto' }}
			mask={currencyMask}
			{...inputProps}
		/>
	)
}

declare namespace CurrencyInput {
	type Props = {
		fullWidth?: boolean
		inputMode?:
			| 'search'
			| 'text'
			| 'numeric'
			| 'none'
			| 'tel'
			| 'url'
			| 'email'
			| 'decimal'
		maskOptions?: MaskOptions
		value?: string
		onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	}

	type MaskOptions = {
		prefix: string
		suffix: string
		includeThousandsSeparator: boolean
		thousandsSeparatorSymbol: string
		allowDecimal: boolean
		decimalSymbol: string
		decimalLimit: string
		requireDecimal: boolean
		allowNegative: boolean
		allowLeadingZeroes: boolean
		integerLimit: number
	}
}

export default CurrencyInput
