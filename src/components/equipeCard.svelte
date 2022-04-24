<script>
	export let professional;
</script>

<div class="bg-white border-gray-200 shadow-md z-0 min-h-0">
	<a href={`especialidades/${professional.especialidade}`}>
		<img
			class="rounded-t-lg h-96 w-full object-cover"
			src={professional.foto}
			alt={professional.id}
		/>
	</a>
	<div class="md:py-8 px-2 py-10">
		<p class=" md:mb-2 text-gray-700 text-sm text-center h-4">{professional.nome}</p>
		<p class=" md:mb-2 text-gray-700 text-lg text-center h-4">{professional.especialidade}</p>
	</div>
</div>
