<script>
	import { onMount, afterUpdate } from 'svelte';
	const { VITE_FCARE_SERVER_URL } = import.meta.env;

	let professionals = {
		data: '',
		loading: true,
		selected: ''
	};

	let services = {
		data: '',
		loading: true,
		filter: ''
	};

	let currentPage = 1;
	let pageSize = 10;
	let shouldLoadServices = true; // Variável de controle

	const getProfessional = async () => {
		let response = await fetch(`${VITE_FCARE_SERVER_URL}/professionals`, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json'
			}
		});
		professionals.data = await response.json();
		professionals.loading = false;
	};

	const getServices = async () => {
		let skip = (currentPage - 1) * pageSize;

		let serviceResponse = await fetch(`${VITE_FCARE_SERVER_URL}/professionals/procedures`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({ skip, pageSize })
		});

		services.data = await serviceResponse.json();

		services.loading = false;
	};

	const handlePagination = (operator) => {
		if (operator == '+') {
			currentPage += 1;
		} else {
			currentPage -= 1;
		}
		shouldLoadServices = true;
	};

	onMount(async () => {
		await getProfessional();
		await getServices();
	});

	afterUpdate(async () => {
		if (shouldLoadServices) {
			// Verificar a variável de controle antes de carregar os serviços
			shouldLoadServices = false; // Impedir carregamento repetido
			await getServices();
		}
	});
</script>

<div class="flex flex-col items-center justify-center space-4">
	<div class="mb-4">
		<label for="professionalFilter" class="block font-medium">Filtrar por Profissional:</label>
		<select
			id="professionalFilter"
			class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
			bind:value={professionals.selected}
		>
			<option value="">Todos</option>
			<!-- Use um loop para gerar as opções com base nos profissionais existentes -->

			{#each professionals.data as professional}
				<option value={professional}>{professional.name}</option>
			{/each}
		</select>
	</div>

	<div class="mb-4">
		<label for="serviceNameFilter" class="block font-medium">Filtrar por Nome de Serviço:</label>
		<input
			type="text"
			id="serviceNameFilter"
			class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
			placeholder="Digite o nome do serviço"
			bind:value={services.filter}
		/>
	</div>

	

	<div class="overflow-x-auto">
		<table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
			<thead class="ltr:text-left rtl:text-right">
				<tr>
					<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"> Procedimento </th>
					<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"> Unidade </th>
					<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"> Valor </th>
					<th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"> Profissional </th>
					<th class="px-4 py-2" />
				</tr>
			</thead>

			<tbody class="divide-y divide-gray-200">
				{#each services.data as service}
					<tr>
						<td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"> {service.name} </td>
						<td class="whitespace-nowrap px-4 py-2 text-gray-700">{service.unit}</td>
						<td class="whitespace-nowrap px-4 py-2 text-gray-700">R$ {service.value / 100}.00</td>
						<td class="whitespace-nowrap px-4 py-2 text-gray-700">{service.professional.name}</td>
						<td class="whitespace-nowrap px-4 py-2">
							<a
								href="#"
								class="inline-block rounded bg-yellow-600 px-4 py-2 text-xs font-medium text-white hover:bg-yellow-700"
							>
								Editar
							</a>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<div class="inline-flex justify-center gap-1">
		<a
			href="#"
			on:click={() => handlePagination('-')}
			class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
		>
			<span class="sr-only">Prev Page</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-3 w-3"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>

		<div>
			<label for="PaginationPage" class="sr-only">Page</label>

			<input
				type="number"
				class="h-8 w-12 rounded border border-gray-100 bg-white p-0 text-center text-xs font-medium text-gray-900 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
				bind:value={currentPage}
				id="PaginationPage"
			/>
		</div>

		<a
			href="#"
			on:click={() => handlePagination('+')}
			class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
		>
			<span class="sr-only">Next Page</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-3 w-3"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>
	</div>
</div>
