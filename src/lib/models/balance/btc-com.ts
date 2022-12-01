export interface BtcCOMAddress {
	data: BtcAddressData;
	err_code: number;
	err_no: number;
	message: string;
	status: string;
}

export interface BtcAddressData {
	address: string;
	received: number;
	sent: number;
	balance: number;
	tx_count: number;
	unconfirmed_tx_count: number;
	unconfirmed_received: number;
	unconfirmed_sent: number;
	unspent_tx_count: number;
	first_tx: string;
	last_tx: string;
}
