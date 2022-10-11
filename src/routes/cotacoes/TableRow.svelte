<script>
	// @ts-nocheck

	export let tableRowService, tableRowServiceLoading, cart, handleRemoveService;

	function handleServiceChosen(value) {
		cart.id = value;
		cart.name = tableRowService.filter((x) => x.id == value)[0].name;
		cart.value = tableRowService.filter((x) => x.id == value)[0].value;

		console.log('cart', cart);
	}
</script>

<tr class="bg-white border-b ">
	<td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
		<select
			id="services"
			on:change={(event) => handleServiceChosen(event.target.value)}
			class="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-700 focus:border-yellow-700 p-2.5 "
		>
			<option selected>Selecione o Serviço:</option>
			{#if !tableRowServiceLoading && tableRowService.length > 0}
				{#each tableRowService as service}
					<option class="text-start" value={service.id}>{service.name}</option>
				{/each}
			{/if}
		</select>
	</td>
	<td class="py-4 px-6">
		<div>
			<input
				type="number"
				id="qtd"
				value="0"
				on:change={(event) => {
					cart.qtd = event.target.value;
				}}
				class="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-700 focus:border-yellow-700  p-2.5 "
				required
			/>
		</div></td
	>
	<td class="py-4 px-6">
		<input
			id="local"
			type="text"
			on:change={(event) => {
				cart.region = event.target.value;
			}}
			placeholder="Região de Aplicação"
			class="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-700 focus:border-yellow-700 p-2.5 "
		/>
	</td>
	<td class="py-4 px-6">
		<input
			type="text"
			id="value"
			value={cart && cart.value && cart.qtd ? `R$ ${(cart.value * cart.qtd) / 100}.00` : 'R$ 0.00'}
			on:change={(event) => {
				cart.value = event.target.value;
			}}
			class="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-700 focus:border-yellow-700  p-2.5 "
			required
		/>
	</td>
	<td class="py-4 px-6">
		<button type="button" on:click={handleRemoveService(cart)}>
			<svg
				class="w-6 h-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
				/></svg
			></button
		>
	</td>
</tr>
