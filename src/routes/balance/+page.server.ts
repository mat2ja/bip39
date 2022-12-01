import type { BtcCOMAddress } from '$lib/models/balance';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import type { Actions } from './$types';

export const load: PageServerLoad = async () => {
	return {};
};

const fetchBalance = async (address: string) => {
	// const url = `https://blockchain.info/rawaddr/${address}`;
	const url = `https://chain.api.btc.com/v3/address/${address}`;

	const data = await fetch(url).then((res) => res.json());
	return data as BtcCOMAddress;
};

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const address = formData.get('address') as string;

		const res = await fetchBalance(address);
		console.log('res :>> ', res);

		const { data, status } = res;

		if (status !== 'success') {
			throw error(400, {
				message: 'Address not found'
			});
		}

		return data;
	}
};
