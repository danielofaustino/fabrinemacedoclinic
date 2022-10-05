<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { validate_each_argument } from 'svelte/internal';
	import SpinnerForm from './spinnerForm.svelte';

	let cache = {
		client: {
			name: '',
			email: '',
			telephone: ''
		},
		professional: {
			id: '',
			name: '',
			specialty: ''
		},
		subtotal: {
			totalValue: 0
		},
		services: [] //id, name, location, value
	};

	const writeCache = (data, key, name) => {
		console.log(data, key, name);
		if (key === 'services') {
			cache.services.push(data);
		}
		cache[key][name] = data;
		console.log(cache);
	};

	let serviçosTr;
	let professionals;

	//form data:
	let professional;
	let procedures;
	let services;
	let quantidade = 1;
	let regiao;
	let obs;
	let name;
	let email;
	let telefone;

	// Loading
	let professionalLoading = true;
	let proceduresLoading = true;

	onMount(async () => {
		const response = await fetch('http://localhost:5010/professionals', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			}
		});
		professionals = await response.json();
		professionalLoading = false;

		console.log(professionals);
	});

	const sendForm = async () => {
		const emailPayload = {
			professional: {
				name: cache.professional.name,
				specialty: cache.professional.specialty
			},
			patient: {
				name: cache.client.name,
				telephone: cache.client.telephone,
				email: cache.client.email
			},
			procedures: cache.services, //id, name, location, value
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
		const response = await fetch('http://localhost:5010/quotes/pdf', {
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

	const getProcedures = async () => {
		proceduresLoading = true;
		const response = await fetch('http://localhost:5010/professionals/procedures', {
			method: 'POST',
			body: JSON.stringify({ professionalId: professional }),
			headers: {
				'Content-type': 'application/json'
			}
		});
		procedures = await response.json();

		console.log('professional', professional);
		console.log('services', services);

		let professionalAux = professionals.filter((prof) => prof.id == professional);

		writeCache(professionalAux[0].id, 'professional', 'id');
		writeCache(professionalAux[0].name, 'professional', 'name');
		writeCache(professionalAux[0].email, 'professional', 'email');
		writeCache(professionalAux[0].specialty, 'professional', 'specialty');

		proceduresLoading = false;
	};

	const getServices = (procedureId) => {
		const service = procedures.filter((proc) => proc.id == procedureId);

		cache.services.push({
			id: service[0].id,
			name: service[0].name,
			unit: service[0].unit,
			qtd: 1,
			value: service[0].value
		});
	};

	const getQtd = (qtd, procedureId) => {
		const service = cache.services.findIndex((serv) => serv.id == procedureId);
		cache.services[service].qtd = qtd;
		console.log(cache.services);
	};

	const returnValue = (procedureId) => {
		const service = cache.services.find((serv) => serv.id == procedureId);
		return service.value * service.qtd;
	};

	const addService = () => {
		const tr = document.createElement('tr');
		tr.className = 'bg-white border-b';

		const th = document.createElement('th');
		th.scope = 'row';
		th.className = 'py-4 px-6 font-medium text-gray-900 whitespace-nowrap ';

		const select = document.createElement('select');

		tr.appendChild(th);
		serviçosTr.appendChild(tr);
	};
</script>

<svelte:head>
	<title>Cotações</title>
</svelte:head>

<section>
	<h1 class=" py-4 text-2xl font-bold text-center text-yellow-600 sm:text-3xl">Cotações</h1>
	<div class="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-2">
			<div class="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-2">
				<form class="space-y-4" on:submit|preventDefault={sendForm}>
					<h2 class=" py-4 text-2xl font-bold text-start text-gray-600 sm:text-2xl">Cliente</h2>
					<div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
						<div>
							<label class="sr-only" for="name">Nome:</label>
							<input
								class="w-full p-3 text-sm border-gray-200 rounded-lg text-center"
								placeholder="Nome:"
								type="text"
								id="name"
								on:change={(event) => writeCache(event.target.value, 'client', 'name')}
							/>
						</div>

						<div>
							<label class="sr-only" for="email">Email</label>
							<input
								class="w-full p-3 text-sm border-gray-200 rounded-lg text-center"
								placeholder="Endereço de Email"
								type="email"
								id="email"
								on:change={(event) => writeCache(event.target.value, 'client', 'email')}
							/>
						</div>

						<div>
							<label class="sr-only" for="phone">Telefone</label>
							<input
								class="w-full p-3 text-sm border-gray-200 rounded-lg text-center"
								placeholder="Telefone"
								type="tel"
								id="telephone"
								on:change={(event) => writeCache(event.target.value, 'client', 'telephone')}
							/>
						</div>
					</div>
					<h2 class=" py-4 text-2xl font-bold text-start text-gray-600 sm:text-2xl">
						Profissional
					</h2>
					<div class="grid grid-cols-1 gap-4 text-center">
						<div>
							{#if professionalLoading}
								<SpinnerForm />
							{:else if !professionalLoading && professionals.length > 0}
								<select
									bind:value={professional}
									on:change={getProcedures}
									name="professional"
									id="professional"
									class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-700 focus:border-yellow-600 block w-full p-2.5 "
								>
									<option selected>Selecione a Profissional:</option>
									{#each professionals as professional}
										<option value={professional.id}>{professional.name}</option>
									{/each}
								</select>
							{/if}
						</div>
					</div>

					<div class="overflow-x-auto">
						<table class="w-full text-sm text-center text-gray-500 ">
							<thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
								<tr>
									<th scope="col" class="py-3 px-6"> Serviço </th>
									<th scope="col" class="py-3 px-6"> Quantidade </th>
									<th scope="col" class="py-3 px-6"> Região </th>
									<th scope="col" class="py-3 px-6"> Valor </th>
								</tr>
							</thead>
							<tbody>
								{#if !proceduresLoading && procedures.length > 0}
									{#each procedures as procedure}
										<tr class="bg-white border-b ">
											<td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
												<select
													id="services"
													on:change={(event) => getServices(event.target.value)}
													class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-700 focus:border-yellow-700 p-2.5 "
												>
													<option selected>Selecione o Serviço:</option>

													<option value={procedure.id}>{procedure.name}</option>
												</select>
											</td>
											<td class="py-4 px-6">
												<div>
													<input
														type="number"
														id="qtd"
														on:change={(event) => {
															getQtd(event.target.value, procedure.id);
														}}
														class="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-700 focus:border-yellow-700  p-2.5 "
														required
													/>
												</div></td
											>
											<td class="py-4 px-6">
												<select
													id="services"
													bind:value={regiao}
													class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-700 focus:border-yellow-700 p-2.5 "
												>
													<option selected>Selecione a Região</option>
													<option value="Facial">Facial</option>
													<option value="Boca">Boca</option>
													<option value="Maxilar">Maxilar</option>
													<option value="Testa">Testa</option>
												</select>
											</td>
											<td class="py-4 px-6"> R$ 120,00</td>
										</tr>
									{/each}
								{/if}
							</tbody>
						</table>
						<!-- <button
							on:click={addService}
							type="button"
							class="inline-flex items-center justify-center mt-3 w-full px-5 py-3 text-white bg-yellow-600 rounded-lg sm:w-auto"
						>
							<span class="font-medium"> + Serviços </span>
						</button> -->
					</div>

					<div>
						<label class="sr-only" for="message">Observação</label>
						<textarea
							class="w-full p-3 text-sm border-gray-200 rounded-lg"
							placeholder="Observação"
							rows="4"
							id="obs"
							bind:value={obs}
						/>
					</div>

					<div class="mt-4 flex justify-center">
						<button
							type="submit"
							class="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-yellow-600 rounded-lg sm:w-auto"
						>
							<span class="font-medium"> Gerar Cotação em Pdf </span>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="w-5 h-5 ml-3"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M14 5l7 7m0 0l-7 7m7-7H3"
								/>
							</svg>
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>
