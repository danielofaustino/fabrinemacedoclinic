<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let professionals;
	let professional;
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

	const getProcedures = async () => {
		const response = await fetch(
			'https://fcare-clinic-server.herokuapp.com/professionals/procedures',
			{
				method: 'POST,',
				body: JSON.stringify({ professional: professional }),
				headers: {
					'Content-type': 'application/json'
				}
			}
		);
		let procedures = await response.json();
		console.log('PROCEDURES', procedures);
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
				<form action="" class="space-y-4">
					<h2 class=" py-4 text-2xl font-bold text-start text-gray-600 sm:text-2xl">Cliente</h2>
					<div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
						<div>
							<label class="sr-only" for="name">Nome:</label>
							<input
								class="w-full p-3 text-sm border-gray-200 rounded-lg text-center"
								placeholder="Nome:"
								type="text"
								id="name"
							/>
						</div>

						<div>
							<label class="sr-only" for="email">Email</label>
							<input
								class="w-full p-3 text-sm border-gray-200 rounded-lg text-center"
								placeholder="Endereço de Email"
								type="email"
								id="email"
							/>
						</div>

						<div>
							<label class="sr-only" for="phone">Telefone</label>
							<input
								class="w-full p-3 text-sm border-gray-200 rounded-lg text-center"
								placeholder="Telefone"
								type="tel"
								id="phone"
							/>
						</div>
					</div>
					<h2 class=" py-4 text-2xl font-bold text-start text-gray-600 sm:text-2xl">
						Profissional
					</h2>
					<div class="grid grid-cols-1 gap-4 text-center">
						<div>
							{#if professionalLoading}
								<div class="flex justify-center">
									<svg
										aria-hidden="true"
										class="mr-2 w-8 h-8 text-gray-200 animate-spin fill-yellow-800"
										viewBox="0 0 100 101"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
											fill="currentColor"
										/>
										<path
											d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
											fill="currentFill"
										/>
									</svg>
								</div>
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
										<option value={professional.name}>{professional.name}</option>
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
										<select
											id="services"
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-700 focus:border-yellow-700 p-2.5 "
										>
											<option selected>Selecione o Serviço</option>
											<option value="US">United States</option>
											<option value="CA">Canada</option>
											<option value="FR">France</option>
											<option value="DE">Germany</option>
										</select>
									</th>
									<td class="py-4 px-6">
										<div>
											<input
												type="number"
												id="qtd"
												class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-700 focus:border-yellow-700  p-2.5 "
												placeholder=""
												required
											/>
										</div></td
									>
									<td class="py-4 px-6">
										<select
											id="services"
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
