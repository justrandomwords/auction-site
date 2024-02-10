'use client'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const defaultMaskOptions = {
	prefix: '',
	suffix: '$',
	includeThousandsSeparator: true,
	thousandsSeparatorSymbol: ',',
	allowDecimal: true,
	decimalSymbol: '.',
	decimalLimit: 2, // how many digits allowed after the decimal
	integerLimit: 7, // limit length of integer numbers
	allowNegative: false,
	allowLeadingZeroes: false,
}

const CurrencyInput = ({ maskOptions, ...inputProps }: CurrencyInput.Props) => {
	const currencyMask = createNumberMask({
		...defaultMaskOptions,
		...maskOptions,
	})

	return <MaskedInput mask={currencyMask} {...inputProps} />
}

CurrencyInput.defaultProps = {
	inputMode: 'numeric',
	maskOptions: {},
}

declare namespace CurrencyInput {
	type Props = {
		inputMode?:
			| 'search'
			| 'text'
			| 'numeric'
			| 'none'
			| 'tel'
			| 'url'
			| 'email'
			| 'decimal'
		maskOptions: MaskOptions
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
