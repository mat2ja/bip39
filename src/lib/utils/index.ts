export const normalize = (string: string) => {
	return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export const isEnglish = (word: string) => {
	return /^[a-z0-9]+$/i.test(word);
};


export const satsToBtc = (sats: number) => {
	return sats / 100000000;
};

export const formatCurrency = (value: number) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(value);
}
