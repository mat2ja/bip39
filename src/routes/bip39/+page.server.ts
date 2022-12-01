import type { ServerLoad } from '@sveltejs/kit';
import { wordlist } from './wordlist.server';

export const load: ServerLoad = () => {
	return {
		wordlist
	};
};
