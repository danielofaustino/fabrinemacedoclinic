<script>
	export let curso;

	import { goto } from '$app/navigation';

	const sendToWhatsApp = () => {
		let whatsAppLink = `https://wa.me/5511970619477?text=Atendimento personalizado - Matrícula no Curso: ${curso.title}`;
		goto(whatsAppLink);
	};
</script>

<div class="pb-10">
	<a class="block overflow-hidden group" href="/products/basic-tee">
		<img
			class="group-hover:scale-105 transition-transform duration-500 object-cover w-full h-[450px] sm:h-[250px]"
			src={curso.img}
			alt={curso.title}
		/>

		<div class="text-center relative pt-4 bg-white">
			<h3
				class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-8 decoration-yellow-600"
			>
				{curso.title}
			</h3>

			<p class="mt-2">
				<!-- <span class="text-xs  tracking-wider"> Valor: R$ </span> -->
			</p>
			<p class="mt-1">
				<span class="text-xs  tracking-wider"> Próxima Turma: "Em Breve" </span>
			</p>
			<p class="mt-2">
				<a
					class="inline-block px-12 py-3 text-sm font-medium text-yellow-600 border border-yellow-600 rounded hover:bg-yellow-600 hover:text-white active:bg-yellow-500 focus:outline-none focus:ring"
					href={'#'}
					on:click={sendToWhatsApp}
				>
					Matricula!
				</a>
			</p>
		</div>
	</a>
</div>
