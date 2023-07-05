export function offPriceFunc(price, off) {
	let x = (price * off) / 100;
	let y = price - x;
	return y;
}
