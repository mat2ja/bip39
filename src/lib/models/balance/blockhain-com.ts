export interface AddressData {
	hash160: string;
	address: string;
	n_tx: number;
	n_unredeemed: number;
	total_received: number;
	total_sent: number;
	final_balance: number;
	txs: Tx[];
}

export interface Tx {
	hash: string;
	ver: number;
	vin_sz: number;
	vout_sz: number;
	size: number;
	weight: number;
	fee: number;
	relayed_by: RelayedBy;
	lock_time: number;
	tx_index: number;
	double_spend: boolean;
	time: number;
	block_index: number;
	block_height: number;
	inputs: Input[];
	out: Out[];
	result: number;
	balance: number;
}

export interface Input {
	sequence: number;
	witness: string;
	script: string;
	index: number;
	prev_out: Out;
}

export interface Out {
	addr: string;
	n: number;
	script: string;
	spending_outpoints: SpendingOutpoint[];
	spent: boolean;
	tx_index: number;
	type: number;
	value: number;
}

export interface SpendingOutpoint {
	n: number;
	tx_index: number;
}

export enum RelayedBy {
	The0000 = '0.0.0.0'
}
