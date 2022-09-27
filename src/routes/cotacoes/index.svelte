<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let professionals;
	let professionalLoading = true;

	onMount(async () => {
		const response = await fetch('https://fcare-clinic-server.herokuapp.com/professionals', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			}
		});
		professionals = await response.json();
		professionalLoading = false;

		console.log(professionals);
	});

	const emailPayload = {
		professional: {
			name: 'DRA. GRASCIELY MEDEIROS',
			specialty: 'Harmonização Orofacial CROSP / 122802'
		},
		patient: {
			name: 'Paulo Rogério Moreira',
			telephone: '(11) 99579-4845',
			email: 'paulo@gmail.com'
		},
		procedures: [
			{
				id: '632ca0d3966dc140a8521cce',
				name: 'Botox Facial com retoque',
				location: 'Facial',
				value: 'R$: 1.200,00'
			},
			{
				id: '632ca0d3966dc140a8521cce',
				name: 'Botox Facial com retoque',
				location: 'Facial',
				value: 'R$: 1.200,00'
			},
			{
				id: '632ca0d3966dc140a8521cce',
				name: 'Botox Facial com retoque',
				location: 'Facial',
				value: 'R$: 1.200,00'
			}
		],
		subtotal: {
			totalValue: 'R$ 10.200,00',
			x12: 'R$ 850,00',
			x1: 'R$ 9.690,00'
		},
		proposal: {
			data: '23/09/2022',
			expiration: '7 Dias'
		}
	};

	const sendForm = async () => {
		const response = await fetch('https://fcare-clinic-server.herokuapp.com/quotes', {
			method: 'POST',
			body: JSON.stringify(emailPayload),
			headers: {
				'Content-type': 'application/json'
			}
		});

		if (response.redirected) {
			goto(response.url);
		}

		console.log('fetch', response);
	};
</script>

<svelte:head>
	<title>Cotações</title>
</svelte:head>

<div class="grid grid-cols-2 grid-rows-3 gap-4">
	<div class="nome column-start-1 center">
		<input for="cliente" type="text" name="name" placeholder="Nome:" id="name" />
	</div>
	<div class="telefone column-start-2">
		<input type="tel" name="telephone" placeholder="Telefone:" id="telephone" />
	</div>
	<div class="email row-start-1">
		<input type="email" name="" placeholder="Email:" id="" />
	</div>
	<div class="row-start-3">
		<select name="professional" id="professional">
			<!-- class="bg-zinc-300 py-3 px-4 rounded text-sm placeholder:text-zinc-800 appearance-none" -->

			{#if professionalLoading}
				<option>Loading ...</option>
			{:else if !professionalLoading && professionals.length > 0}
				<option>Selecione a Profissional:</option>
				{#each professionals as professional}
					<option>{professional.name}</option>
				{/each}
			{/if}
		</select>
	</div>

	<div class="table w-full row-start-4 col-start-1 col-end-3">
		<table class="table-header-group">
			<tr class="table-row">
				<th class="table-cell text-center">Serviço</th>
				<th class="table-cell text-center">Quantidade</th>
				<th class="table-cell text-center">Região</th>
				<th class="table-cell text-center">Valor</th>
			</tr>
		</table>
		<table class="table-row-group">
			<tr class="table-row">
				<td class="table-cell text-center">Botox</td>
				<td class="table-cell text-center">1</td>
				<td class="table-cell text-center">Facial</td>
				<td class="table-cell text-center">R$ 120,00</td>
			</tr>
			<tr class="table-row">
				<td class="table-cell text-center">Botox</td>
				<td class="table-cell text-center">1</td>
				<td class="table-cell text-center">Facial</td>
				<td class="table-cell text-center">R$ 120,00</td>
			</tr>
		</table>
	</div>

	<!-- <footer class="mt-4 flex justify-center gap-4">
		<a
			class="inline-flex items-center px-8 py-3 text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
		>
			<button class="text-sm font-medium" on:click={sendForm}> Enviar </button>
		</a>
	</footer> -->
</div>
