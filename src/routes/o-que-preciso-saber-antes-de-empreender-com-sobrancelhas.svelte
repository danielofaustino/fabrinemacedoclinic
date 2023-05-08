<script>
	import SvelteSeo from 'svelte-seo';

	const perguntas = [
		{
			pergunta: 'Como faço para baixar o ebook depois de comprar ?',
			resposta:
				'O Que Preciso Saber Antes De Empreender Com Sobrancelhas" no Kiwify, você poderá acessá-lo diretamente em sua conta do Kiwify, na seção de módulos do curso correspondente. Lá, você encontrará um link para baixar o ebook para o seu dispositivo. Se você tiver alguma dificuldade para acessar o ebook, entre em contato com o suporte ao cliente do Kiwify para obter ajuda.'
		},

		{
			pergunta: 'Posso ler o ebook em diferentes dispositivos ? ',
			resposta:
				'Sim, o ebook pode ser lido em diferentes dispositivos, incluindo smartphones, tablets e computadores.'
		},
		{
			pergunta: 'O ebook inclui imagens ou ilustrações para ilustrar os conceitos abordados ?',
			resposta:
				'Sim, o ebook inclui imagens e ilustrações para ajudar a ilustrar os conceitos discutidos.'
		},
		{
			pergunta: 'O ebook é voltado para iniciantes ou para empreendedores experientes ?',
			resposta:
				'O ebook é voltado tanto para iniciantes quanto para empreendedores experientes que desejam aprimorar seus conhecimentos no mercado de sobrancelhas'
		},
		{
			pergunta: 'Posso obter um reembolso se não estiver satisfeito com o ebook ?',
			resposta:
				'Sim, o Kiwify oferece uma política de reembolso de 30 dias se você não estiver satisfeito com o ebook.'
		},
		{
			pergunta: 'Após esse ebook como posso continuar a jornada nesta área ?',
			resposta:
				'Todos que adquirerem este ebook, terão prioridade na aquisição do nosso passo a passo de formação online'
		}
	];

	const kiwifyUrl = 'https://pay.kiwify.com.br/EVhUNBr';

	const productValue = 'R$ 19,90';
</script>

<svelte:head>
	<title>Ebook - O Que Preciso Saber Antes De Empreender Com Sobrancelhas</title>
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="empreender, mercado da beleza, sobrancelhas" />
	<link rel="canonical" href="https://www.clinicafcare.com.br/" />
</svelte:head>

<SvelteSeo
	openGraph={{
		title: 'Ebook - O Que Preciso Saber Antes De Empreender Com Sobrancelhas',
		description:
			'Tudo o que precisa saber antes de empreender no mercado de sobrancelhas. Adquira agora o ebook: Como Empreender na Área das Sobrancelhas e inicie seu caminho para o sucesso no mercado de beleza.',
		url: 'https://www.clinicafcare.com.br',
		type: 'website',
		images: [
			{
				url: 'https://www.clinicafcare.com.br/cursos/ebook_empreender.png',
				width: 850,
				height: 650,
				alt: 'O Que Preciso Saber Antes De Empreender Com Sobrancelhas'
			}
		]
	}}
/>

<section>
	<div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<div class="bg-yellow-600 p-8 md:p-12 lg:px-16 lg:py-24">
				<div class="mx-auto max-w-xl text-center">
					<h2 class="text-2xl font-bold text-white md:text-3xl">
						O Que Preciso Saber Antes De Empreender Com Sobrancelhas
					</h2>

					<p class="hidden text-white/90 sm:mt-4 sm:block">
						Um guia completo para que você possa mergulhar na profissão que pode mudar a sua vida!
					</p>

					<div class="mt-4 md:mt-8">
						<a
							href={kiwifyUrl}
							class="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-grey-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
							target="_blank"
						>
							Compre agora por somente {productValue} 😲
						</a>
					</div>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
				<a href={kiwifyUrl} class="block overflow-hidden group" target="_blank">
					<img
						alt="Student"
						src="/cursos/ebook_empreender.webp"
						class="w-full group-hover:scale-105 transition-transform duration-500"
					/>
				</a>
				<a href={kiwifyUrl} class="block overflow-hidden group" target="_blank">
					<img
						alt="Student"
						src="/cursos/ebook_empreender_2.webp"
						class="w-full group-hover:scale-105 transition-transform duration-500"
					/>
				</a>
			</div>
		</div>
	</div>
</section>
<section>
	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
		<h2 class="text-xl font-bold sm:text-2xl">Avaliação dos Compradores:</h2>

		<div class="mt-4 flex items-center gap-4">
			<p class="text-3xl font-medium">
				5.0
				<span class="sr-only"> Média de avaliação </span>
			</p>

			<div>
				<div class="flex">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-yellow-400"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-yellow-400"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-yellow-400"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-yellow-400"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-yellow-400"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
						/>
					</svg>
				</div>
			</div>
		</div>

		<div class="mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
			<blockquote>
				<header class="sm:flex sm:items-center sm:gap-4">
					<div class="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-yellow-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-yellow-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-yellow-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-yellow-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-yellow-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/>
						</svg>
					</div>

					<p class="mt-2 font-medium sm:mt-0">Muito Completo!</p>
				</header>

				<p class="mt-2 text-gray-700">
					O e-book criado pela Fabrine é incrível! Eu nunca tinha visto tanta informação útil e
					detalhada em um só lugar. Eu aprendi muito sobre atendimento ao cliente, finanças e
					administração de negócios que eu não sabia antes. Eu também amo o fato de que a Fabrine
					compartilha suas próprias experiências e histórias pessoais para nos ajudar a entender
					melhor o que é preciso para ter sucesso nessa área.
				</p>

				<footer class="mt-4">
					<p class="text-xs text-gray-500">Sabrina Oliveira - 02 de Abril, 2023</p>
				</footer>
			</blockquote>

			<blockquote>
				<header class="sm:flex sm:items-center sm:gap-4">
					<div class="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-yellow-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-yellow-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-yellow-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-yellow-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-yellow-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/>
						</svg>
					</div>

					<p class="mt-2 font-medium sm:mt-0">Primeiro passo com o pé direito!</p>
				</header>

				<p class="mt-2 text-gray-700">
					Eu sou uma grande fã do trabalho da Fabrine na área das sobrancelhas, então quando vi que
					ela havia criado um e-book sobre empreendedorismo na área, não pensei duas vezes em
					comprá-lo. Fiquei muito impressionada com o nível de detalhe e as informações úteis que
					encontrei no livro. As dicas de marketing digital e protocolos personalizados foram
					particularmente úteis para mim e me ajudaram a melhorar meu negócio.
				</p>

				<footer class="mt-4">
					<p class="text-xs text-gray-500">Ana Paula da Silva - 07 de Maio, 2023</p>
				</footer>
			</blockquote>
		</div>
	</div>
</section>

<section>
	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
		<div class="space-y-4">
			{#each perguntas as pergunta}
				<details
					class="group border-s-4 border-yellow-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
				>
					<summary class="flex cursor-pointer items-center justify-between gap-1.5">
						<h2 class="text-lg font-medium text-gray-900">
							{pergunta.pergunta}
						</h2>

						<span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									clip-rule="evenodd"
								/>
							</svg>
						</span>
					</summary>

					<p class="mt-4 leading-relaxed text-gray-700">
						{pergunta.resposta}
					</p>
				</details>
			{/each}
		</div>
	</div>
</section>
