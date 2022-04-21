<script>
  import { goto } from '$app/navigation';
	let nome, sobrenome, number, mensagem;

	const sendToWhatsApp = () => {
    let whatsAppLink = `https://wa.me/5511970433870?text=${nome} ${sobrenome}: ${mensagem}, meu contato é o ${number}`
    goto(whatsAppLink)
  }
</script>

<svelte:head>
	<title>Contato</title>
</svelte:head>

<div class="container mx-auto">
	<div class="flex justify-center my-12">
		<!-- Row -->
		<div class="w-full flex flex-wrap-reverse">
			<!-- Col -->
			<div class="w-full bg-gray-400 lg:block lg:w-8/12 bg-cover rounded-l-lg">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.900578206055!2d-46.709598185292535!3d-23.572013984677557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5732fdfee793%3A0xd73189e0246b7026!2sFabrine%20Macedo%20Beauty%20Artist!5e0!3m2!1sen!2sbr!4v1615474415034!5m2!1sen!2sbr"
					width="100%"
					height="100%"
					frameborder="0"
					style="border:0;"
					allowfullscreen=""
					aria-hidden="false"
					tabindex="0"
				/>
			</div>

			<!-- Col -->
			<div class="w-full lg:w-4/12 bg-white p-5 rounded-lg lg:rounded-l-none">
				<h3 class="pt-4 text-2xl text-center">Entre em Contato Conosco!</h3>
				<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
					<div class="mb-4 md:flex md:justify-between">
						<div class="mb-4 md:mr-2 md:mb-0">
							<label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
								Nome
							</label>
							<input
								class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="firstname"
								type="text"
								placeholder="Nome"
								bind:value={nome}
							/>
						</div>
						<div class="md:ml-2">
							<label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
								Sobrenome
							</label>
							<input
								class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="lastname"
								type="text"
								placeholder="Sobrenome"
								bind:value={sobrenome}
							/>
						</div>
					</div>
					<div class="mb-4">
						<label class="block mb-2 text-sm font-bold text-gray-700" for="email"> Email </label>
						<input
							class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
							id="mensagem"
							type="text"
							placeholder="Mensagem"
							bind:value={mensagem}
						/>
					</div>
					<div class="mb-4">
						<label class="block mb-2 text-sm font-bold text-gray-700" for="email"> WhatsApp </label>
						<input
							class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
							id="whatsapp"
							type="whatsapp"
							placeholder="WhatsApp"
							bind:value={number}
						/>
					</div>

					<div class="mb-6 text-center">
						<button
							class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
							type="button" on:click={sendToWhatsApp}
						>
							Enviar
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
