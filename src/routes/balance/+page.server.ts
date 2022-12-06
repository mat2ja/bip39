import type { BtcCOMAddress } from '$lib/models/balance';
import { satsToBtc } from '$lib/utils';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import type { Actions } from './$types';

export const load: PageServerLoad = async () => {
	return {};
};

const fetchBtcData = async () => {
	const url = 'https://api.blockchair.com/bitcoin/stats'
	const { data } = await fetch(url).then((res) => res.json());
	const { market_price_usd } = data
	return market_price_usd
}

const fetchBalance = async (address: string) => {
	const url = `https://chain.api.btc.com/v3/address/${address}`;
	// get bitcoin value in us dollars
	const data = await fetch(url).then((res) => res.json());

	await fetchBtcData()
	return data as BtcCOMAddress;
};

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const address = formData.get('address') as string;

		const [res, marketPriceUsd] = await Promise.all([
			fetchBalance(address),
			fetchBtcData()
		])

		const usdValue = marketPriceUsd * satsToBtc(res.data.balance)

		const { data, status } = res;

		if (status !== 'success') {
			throw error(400, {
				message: 'Address not found'
			});
		}

		return { ...data, usdValue };
	}
};
