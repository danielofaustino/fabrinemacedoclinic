<script>
	import { goto } from '$app/navigation';
	import { equipeData } from '../stores/equipe.mjs';
	let nome, procedimento;

	const sendToWhatsApp = () => {
		let whatsAppLink = `https://wa.me/5511970619477?text=Atendimento personalizado para: ${nome} - Procedimento: ${procedimento}`;
		goto(whatsAppLink);
	};
</script>

<svelte:head>
	<title>Contato</title>
</svelte:head>

<section class="relative flex flex-wrap lg:h-screen lg:items-center">
	<div class="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
		<div class="max-w-lg mx-auto text-center">
			<h1 class="text-2xl font-bold sm:text-3xl">Agende seu procedimento já!</h1>

			<p class="mt-4 text-gray-500">
				Escolha abaixo qual procedimento tem interesse e conectaremos voce diretamente ao nosso
				atendimento via WhatsApp
			</p>
		</div>

		<div class="max-w-md mx-auto mt-8 mb-0 space-y-4">
			<div>
				<label for="nome" class="sr-only">Nome</label>

				<div class="relative">
					<input
						type="nome"
						class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
						placeholder="Qual o seu nome?"
						bind:value={nome}
					/>
				</div>
			</div>

			<div>
				<label for="procedimento" class="sr-only">Procedimento</label>
				<div class="relative">
					<select
						class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
						bind:value={procedimento}
					>
						{#each equipeData as equipeProcedimento}
							<option value={equipeProcedimento.especialidade}
								>{equipeProcedimento.especialidade}</option
							>
						{/each}
					</select>
				</div>
			</div>

			<div class="flex items-center justify-between">
				<p class="text-sm text-gray-500">
					<a class="underline" href="mailto:fabrinemacedo@outlook.com"> Prefere por email? </a>
				</p>

				<button
					on:click={sendToWhatsApp}
					class="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-green-400 rounded-lg"
				>
					Agendar
				</button>
			</div>
		</div>
	</div>

	<div class="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.900578206055!2d-46.709598185292535!3d-23.572013984677557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5732fdfee793%3A0xd73189e0246b7026!2sFabrine%20Macedo%20Beauty%20Artist!5e0!3m2!1sen!2sbr!4v1615474415034!5m2!1sen!2sbr"
			width="100%"
			height="100%"
			frameborder="0"
			style="border:0;"
			allowfullscreen={true}
			aria-hidden="false"
			tabindex="0"
			title="Google Maps"
			class="absolute inset-0 object-cover w-full h-full"
		/>
	</div>
</section>
