<script>
	export let curso;
</script>

<div class="pb-10">
	<a class="block overflow-hidden group" href={curso.link}>
		<img
			class="group-hover:scale-105 transition-transform duration-500  "
			src={curso.img}
			alt={curso.title}
		/>

		<div class="text-center relative pt-4 bg-white">
			<h3
				class="text-lg  text-gray-700 group-hover:underline group-hover:underline-offset-8 decoration-yellow-600"
			>
				{curso.title}
			</h3>

			<p class="mt-2 mb-6">
				<!-- <span class="text-xs  tracking-wider"> Valor: R$ </span> -->
			</p>

			<p class="mt-2">
				<a
					class="inline-block  px-12 py-3 text-sm font-medium text-yellow-600 border border-yellow-600 rounded hover:bg-yellow-600 hover:text-white active:bg-yellow-500 focus:outline-none focus:ring"
					href={curso.link}
				>
					Mais detalhes ➡️
				</a>
			</p>
		</div>
	</a>
</div>
