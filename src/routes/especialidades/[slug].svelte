<script context="module">
	import { equipeData } from '../../stores/equipe.mjs';

	export async function load({ params }) {
		let result = equipeData.filter((professional) => professional.especialidade == params.slug);

		return {
			status: 200,
			props: {
				especialidade: result[0]
			}
		};
	}
</script>

<script>
	export let especialidade;
</script>

<svelte:head>
	<title>Especialidades</title>
</svelte:head>

<nav class="flex text-center" aria-label="Breadcrumb">
	<ol role="list" class="flex overflow-hidden text-gray-700 border border-gray-200 rounded-lg">
		<li class="flex items-center">
			<a
				class="flex items-center h-10 px-4 transition-colors bg-gray-100 hover:text-gray-900"
				href="/equipe"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-4 h-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
					/>
				</svg>

				<span class="ml-1.5 font-medium text-xs"> Equipe </span>
			</a>
		</li>

		<li class="relative flex items-center">
			<span class="absolute inset-y-0 w-4 h-10 bg-gray-100 -left-px clip" />

			<a
				class="flex items-center h-10 pl-8 pr-4 text-xs font-medium transition-colors bg-white hover:text-gray-900"
				href="/collections/shirts"
			>
				{especialidade.especialidade}
			</a>
		</li>
	</ol>
</nav>
<h1>{especialidade.especialidade}</h1>

<ul class="md:flex md:items-center md:pb-0 absolute md:static">
	{#each especialidade.procedimentos as procedimento}
		<li
			class="px-0 md:ml-8 md:my-0 my-7 border-b-2 border-transparent lg:hover:border-b-yellow-600 md:text-xs"
		>
			<a href={procedimento} class="text-gray-800 text-lg hover:text-gray-500 duration-500"
				>{procedimento}</a
			>
		</li>
	{/each}
</ul>
<p />

<style>
	.clip {
		clip-path: polygon(0 0, 0% 100%, 100% 50%);
	}
</style>
