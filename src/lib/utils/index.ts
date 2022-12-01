export const normalize = (string: string) => {
	return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export const isEnglish = (word: string) => {
	return /^[a-z]+$/i.test(word);
};
