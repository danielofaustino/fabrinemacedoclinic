<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import SpinnerForm from './spinnerForm.svelte';

	let professionals;

	//form data:
	let professional;
	let procedures;
	let services;
	let quantidade;
	let regiao;
	let obs;
	let name;
	let email;
	let telefone;

	// Loading
	let professionalLoading = true;
	let proceduresLoading = true;

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

	const sendForm = async () => {
		const emailPayload = {
			professional: {
				name: professional.name,
				specialty: professional.specialty,
			},
			patient: {
				name: name,
				telephone: telefone,
				email: email
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

	const getProcedures = async () => {
		proceduresLoading = true;
		const response = await fetch(
			'https://fcare-clinic-server.herokuapp.com/professionals/procedures',
			{
				method: 'POST',
				body: JSON.stringify({ professionalId: professional.id }),
				headers: {
					'Content-type': 'application/json'
				}
			}
		);
		procedures = await response.json();

		console.log('PROCEDURES', procedures);
		proceduresLoading = false;
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
								bind:value={name}
							/>
						</div>

						<div>
							<label class="sr-only" for="email">Email</label>
							<input
								class="w-full p-3 text-sm border-gray-200 rounded-lg text-center"
								placeholder="Endereço de Email"
								type="email"
								id="email"
								bind:value={email}
							/>
						</div>

						<div>
							<label class="sr-only" for="phone">Telefone</label>
							<input
								class="w-full p-3 text-sm border-gray-200 rounded-lg text-center"
								placeholder="Telefone"
								type="tel"
								id="phone"
								bind:value={telefone}
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
										<option value={professional}>{professional.name}</option>
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
								<tr class="bg-white border-b ">
									<th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
										{#if proceduresLoading}
											<SpinnerForm />
										{:else if !proceduresLoading && procedures.length > 0}
											<select
												id="services"
												bind:value={services}
												class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-700 focus:border-yellow-700 p-2.5 "
											>
												<option selected>Selecione o Serviço:</option>
												{#each procedures as procedure}
													<option value={procedure.id}>{procedure.name}</option>
												{/each}
											</select>
										{/if}
									</th>
									<td class="py-4 px-6">
										<div>
											<input
												type="number"
												id="qtd"
												bind:value={quantidade}
												class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-700 focus:border-yellow-700  p-2.5 "
												placeholder=""
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
											<option value="US">Facial</option>
											<option value="CA">Boca</option>
											<option value="FR">Maxilar</option>
											<option value="DE">Testa</option>
										</select>
									</td>
									<td class="py-4 px-6"> R$ 0,00</td>
								</tr>
							</tbody>
						</table>
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
