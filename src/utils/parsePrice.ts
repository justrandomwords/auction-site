export function parsePrice(str: string): number {
	if (!str) return 0

	const cleanPrice = str.replace(/[^0-9.,]/g, '')
	const priceWithDot = cleanPrice.replaceAll(',', '')
	return parseFloat(priceWithDot)
}
