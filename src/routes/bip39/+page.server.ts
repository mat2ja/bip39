import { wordlist } from './wordlist.server';

/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		wordlist
	};
}
