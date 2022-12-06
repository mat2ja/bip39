<script lang="ts">
	import type { BtcAddressData } from '$lib/models/balance';
	import { formatCurrency, satsToBtc } from '$lib/utils';

	export let data: BtcAddressData & { usdValue: number };

	$: address = data?.address;
	$: balance = data?.balance;
	$: received = data?.received;
	$: sent = data?.sent;
	$: tx_count = data?.tx_count;
	$: usdValue = data?.usdValue;
</script>

<section class="space-y-8 ">
	<p aria-label="address" class="text-2xl">
		{address}
	</p>

	<div>
		<div class="flex items-end justify-between">
			<div class="flex gap-4">
				<p class="text-2xl md:text-7xl">
					<span class="text-orange-500">₿</span>{satsToBtc(balance)}
				</p>
			</div>
			<div>
				<p class="text-lg text-neutral-300 md:text-3xl">{formatCurrency(usdValue)}</p>
			</div>
		</div>

		<div class="mt-5 space-y-2">
			<div>
				<p class="text-sm text-neutral-500">Received</p>
				<p class="text-base">
					<span class="text-orange-500">₿</span>{satsToBtc(received)}
				</p>
			</div>
			<div>
				<p class="text-sm text-neutral-500">Sent</p>
				<p class="text-base">
					<span class="text-orange-500">₿</span>{satsToBtc(sent)}
				</p>
			</div>
			<div>
				<p class="text-sm text-neutral-500">Tx count</p>
				<p class="text-base">
					<span class="text-neutral-300">{tx_count}</span>
				</p>
			</div>
		</div>
	</div>
</section>
