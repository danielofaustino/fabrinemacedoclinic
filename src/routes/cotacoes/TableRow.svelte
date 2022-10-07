<script>
	import { stringify } from 'postcss';

	export let cache;
</script>

<tr class="bg-white border-b ">
	<td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
		<select
			id="services"
			on:change={(event) => {
				cache.form.servicesbyProfessional[0].id = event.target.value;
			}}
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-700 focus:border-yellow-700 p-2.5 "
		>
			<option selected>Selecione o Serviço:</option>
			{#if !cache.form.serviceLoading && cache.form.servicesbyProfessional.length > 0}
				{#each cache.form.servicesbyProfessional as service}
					<option value={service.id}>{service.name}</option>
				{/each}
			{/if}
		</select>
	</td>
	<td class="py-4 px-6">
		<div>
			<input
				type="number"
				id="qtd"
				on:change={(event) => {
					cache.form.servicesbyProfessional[0].qtd = event.target.value;
				}}
				class="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-700 focus:border-yellow-700  p-2.5 "
				required
			/>
		</div></td
	>
	<td class="py-4 px-6">
		<select
			id="services"
			on:change={(event) => {
				cache.form.servicesbyProfessional[0].region = event.target.value;
			}}
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-700 focus:border-yellow-700 p-2.5 "
		>
			<option selected>Selecione a Região</option>
			<option value="Facial">Facial</option>
			<option value="Boca">Boca</option>
			<option value="Maxilar">Maxilar</option>
			<option value="Testa">Testa</option>
		</select>
	</td>
	<td class="py-4 px-6">
		{cache.form.servicesbyProfessional[0] &&
		cache.form.servicesbyProfessional[0].value &&
		cache.form.servicesbyProfessional[0].qtd
			? `R$ ${
					(cache.form.servicesbyProfessional[0].value * cache.form.servicesbyProfessional[0].qtd) /
					100
			  }.00`
			: ' R$ 00.00'}
	</td></tr
>
