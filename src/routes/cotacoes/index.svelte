<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';
	import TableRow from './TableRow.svelte';
	import { onMount } from 'svelte';
	const { VITE_FCARE_SERVER_URL } = import.meta.env;

	let cache = {
		professional: {
			data: '',
			loading: true
		},
		professionalChoiced: {
			name: '',
			specialty: ''
		},
		client: {
			name: '',
			email: '',
			telephone: ''
		},
		form: {
			serviceData: [],
			professionalChoiced: [],
			servicesCart: [{ id: '', name: '', qtd: 0, region: '', value: 0 }],
			obs: '',
			subtotal: {
				totalValue: 0,
				x12: 0,
				pix: 0
			}
		},

		services: [],
		proposal: {
			data: '',
			expiration: ''
		} //id, name, location, value
	};

	onMount(async () => {
		const response = await fetch(`${VITE_FCARE_SERVER_URL}/professionals`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			}
		});
		cache.professional.data = await response.json();
		cache.professional.loading = false;
	});

	const sendForm = async () => {
		const response = await fetch(`${VITE_FCARE_SERVER_URL}/quotes/ejs`, {
			method: 'POST',
			body: JSON.stringify(cache),
			headers: {
				'Content-type': 'application/json'
			}
		});

		if (response.redirected) {
			goto(response.url);
		}

		//console.log('fetch', response);
	};

	function handleServiceButton() {
		cache.form.servicesCart = [
			...cache.form.servicesCart,
			{ id: `${cache.form.servicesCart.length}`, name: '', qtd: 0, region: '', value: 0 }
		];
		//console.log('handleServiceButton', cache.form.servicesCart);
	}

	function handleRemoveService(cart) {
		cache.form.servicesCart = cache.form.servicesCart.filter((service) => service.id !== cart.id);

		//console.log(cache.form.servicesCart);
		//console.log('cart', cart);
	}
</script>

<svelte:head>
	<title>Cotações</title>
</svelte:head>

<section>
	<h1 class=" py-4 text-2xl font-bold text-center text-yellow-600 sm:text-3xl">Cotações</h1>
	<div class=" px-4 py-4 mx-auto sm:px-6 lg:px-8">
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
								bind:value={cache.client.name}
							/>
						</div>

						<div>
							<label class="sr-only" for="email">Email</label>
							<input
								class="w-full p-3 text-sm border-gray-200 rounded-lg text-center"
								placeholder="Email"
								type="email"
								id="email"
								bind:value={cache.client.email}
							/>
						</div>

						<div>
							<label class="sr-only" for="phone">Telefone</label>
							<input
								class="w-full p-3 text-sm border-gray-200 rounded-lg text-center"
								placeholder="Telefone"
								type="tel"
								id="telephone"
								bind:value={cache.client.telephone}
							/>
						</div>
					</div>
					<h2 class=" py-4 text-2xl font-bold text-start text-gray-600 sm:text-2xl">Serviços</h2>
					<div class="grid grid-cols-1 gap-4 text-center" />

					<div class="overflow-x-auto">
						<table class="w-full text-sm text-center text-gray-500 mb-4 ">
							<thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
								<tr>
									<th scope="col" class="py-3 px-6"> Profissional </th>
									<th scope="col" class="py-3 px-6"> Serviço </th>
									<th scope="col" class="py-3 px-6"> Quantidade </th>
									<th scope="col" class="py-3 px-6"> Região </th>
									<th scope="col" class="py-3 px-6"> Valor </th>
									<th scope="col" class="py-3 px-6" />
								</tr>
							</thead>
							<tbody>
								{#each cache.form.servicesCart as cart}
									<TableRow
										professionals={cache.professional.data}
										professionalsLoading={cache.professional.loading}
										{cart}
										{handleRemoveService}
									/>
								{/each}
							</tbody>
						</table>
						<button
							type="button"
							on:click={handleServiceButton}
							class="inline-flex items-center justify-center mt-3 w-full px-5 py-3 text-white bg-yellow-600 rounded-lg sm:w-auto"
						>
							<span class="font-medium"> + Serviços </span>
						</button>
					</div>

					<div>
						<label class="sr-only" for="message">Observação</label>
						<textarea
							class="w-full p-3 text-sm border-gray-200 rounded-lg"
							placeholder="Observação"
							rows="4"
							id="obs"
							bind:value={cache.form.obs}
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
