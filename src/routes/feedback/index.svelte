<script>
	const { VITE_FCARE_SERVER_URL } = import.meta.env;
	import { onMount } from 'svelte';

	import Alert from '../../components/alert.svelte';
	import SpinnerForm from '../cotacoes/spinnerForm.svelte';
	import StarRating from 'svelte-star-rating';

	let formData = {
		email: '',
		name: '',
		message: '',
		choiced: 'Selecione o Profissional'
	};

	let professionals = {
		data: '',
		loading: true
	};

	onMount(async () => {
		const response = await fetch(`${VITE_FCARE_SERVER_URL}/professionals`, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json'
			}
		});

		professionals.data = await response.json();
		//console.log('PROFESSIONALS', professionals.data);
		professionals.loading = false;
	});

	let formSubmitted = false;

	const sendForm = async () => {
		const response = await fetch(`${VITE_FCARE_SERVER_URL}/feedback`, {
			method: 'POST',
			body: JSON.stringify(formData),
			headers: {
				'Content-type': 'application/json'
			}
		});
		//console.log('formData ==>', formData);

		//console.log('RESPONSE:', response);

		if (response.ok) {
			formSubmitted = true;

			setTimeout(() => {
				formData.email = '';
				formData.message = '';
				formData.name = '';
				formSubmitted = false;
				formData.choiced = 'Selecione o Profissional';
			}, 6000);
		}
	};

	const handleProfessionalChoiced = (event) => {
		formData.choiced = event.target.value;
	};
</script>

<svelte:head>
	<title>Feedback</title>
</svelte:head>

<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-lg">
		<h1 class="text-center text-2xl font-bold text-yellow-600 sm:text-3xl ">
			Conte como foi a sua experiência com a Clínica F.Care
		</h1>

		<p class="mx-auto mt-8 max-w-md text-center text-gray-500">
			Fique à vontade para se identificar ou enviar o feedback de forma anônima.
		</p>

		<form
			on:submit|preventDefault={sendForm}
			class="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
		>
			<!-- <p class="text-center text-lg font-medium">Sign in to your account</p> -->

			<!-- <div>
				<label for="email" class="sr-only">Email</label>

				<div class="relative">
					<input
						type="email"
						class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
						placeholder="Se deseja receber uma resposta coloque seu email"
						bind:value={formData.email}
					/>

					<span class="absolute inset-y-0 right-0 grid place-content-center px-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
							/>
						</svg>
					</span>
				</div>
			</div> -->

			<div>
				<label for="password" class="sr-only">Nome</label>

				<div class="relative">
					<input
						type="text"
						class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
						placeholder="Identifique-se ou deixe o espaço em branco para anônimo"
						bind:value={formData.name}
					/>
				</div>
				<div class="my-4">
					{#if professionals.loading}
						<SpinnerForm />
					{:else if !professionals.loading && professionals.data.length > 0}
						<select
							name="professional"
							id="professional"
							on:click={(event) => {
								handleProfessionalChoiced(event);
							}}
							class="  text-sm shadow-sm block w-full bg-gray-100 border border-gray-300 p-4 pr-12 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
						>
							<option selected value={formData.choiced} class="text-gray-400"
								>Selecione a Profissional: </option
							>
							{#each professionals.data as professional}
								<option class="text-gray-600" value={professional.name}>{professional.name}</option>
							{/each}
						</select>
					{/if}
				</div>

				<div class="my-4">
					<label class="sr-only" for="message">FeedBack</label>

					<textarea
						class="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
						placeholder="Escreva aqui o seu feedback"
						rows="8"
						id="message"
						bind:value={formData.message}
					/>
				</div>
			</div>
			{#if formSubmitted}
				<Alert title="Formulário enviado!" message="Muito Obrigado por seu Feedback" />
			{/if}
			<!-- <div class="">
				<StarRating rating={5} />
			</div> -->
			<button
				type="submit"
				class="block w-full rounded-lg bg-yellow-600 px-5 py-3 text-sm font-medium text-white"
			>
				Enviar Feedback
			</button>
		</form>
	</div>
</div>
