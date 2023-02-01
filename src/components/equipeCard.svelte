<script>
	export let professional;
	export let page;
	let link = page ? `especialidades/${professional.especialidade}` : professional.especialidade;
</script>

<!-- <div class="bg-white border-gray-200 shadow-md z-0 min-h-0">
	<a href={link}>
		<img
			class="rounded-t-lg h-[350px] sm:h-[350px] w-full object-cover"
			src={professional.foto}
			alt={professional.id}
		/>
	</a>
	<div class="md:py-8 px-2 py-10">
		<p class=" md:mb-2 text-gray-700 text-sm text-center h-4">{professional.nome}</p>
		<p class=" md:mb-2 text-gray-700 text-lg text-center h-4">{professional.especialidade}</p>
	</div>
</div>  -->

<div class="pb-10 bg-white border-gray-200 shadow-md z-0 min-h-0">
	<a class="block overflow-hidden group " href={link}>
		<img
			class=" group-hover:scale-105 transition-transform duration-500 object-cover w-full h-[450px] sm:h-[350px]"
			src={professional.foto}
			alt={professional.especialidade}
		/>

		<div class="md:py-8 px-2 py-10">
			<p class=" md:mb-2 text-gray-700 text-sm text-center h-4">{professional.nome}</p>
			<p
				class=" md:mb-2 text-gray-700 text-lg text-center group-hover:underline group-hover:underline-offset-8 decoration-yellow-600 h-4"
			>
				{professional.especialidade}
			</p>
		</div>
	</a>
</div> 

<!-- <a href={link} class="group relative block bg-black">
	<img
		alt="Developer"
		src={professional.foto}
		class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
	/>

	<div class="relative p-8">
		<div class="mt-64">
			<div
				class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
			>
				<p class="text-sm text-white">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
					quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
				</p>
			</div>
		</div>

		<p class="text-sm font-medium uppercase tracking-widest text-yellow-500">
			{professional.especialidade}
		</p>
		<p class="text-2xl font-bold text-white">{professional.nome}</p>
	</div>
</a> -->
