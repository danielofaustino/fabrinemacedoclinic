<script context="module">
	import { equipeData } from '../../stores/equipe.mjs';
	import EquipeCard from '../../components/equipeCard.svelte';
	import Navegador from '../../components/navegador.svelte';

	export async function load({ params }) {
		let result = equipeData.filter((prof) => prof.especialidade == params.slug);

		return {
			status: 200,
			props: {
				professional: result[0]
			}
		};
	}
</script>

<script>
	export let professional;
</script>

<svelte:head>
	<title>{`${professional.especialidade} - ${professional.nome}`}</title>
	<!-- <meta name="description" content={professional.description} />
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content={professional.tags} />
	<link
		rel="canonical"
		href={`https://www.clinicafcare.com.br/especialidades/${professional.especialidade}`}
	/> -->
</svelte:head>

<Navegador {professional} />
<h1 class="text-3xl font-extrabold sm:text-5xl text-center pt-6">
	{professional.especialidade}
	<strong class="font-extrabold sm:block" id="textGolden">{professional.nome} </strong>
</h1>
<section class="relative flex flex-wrap lg:h-screen lg:items-center">
	<div class="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16">
		<div class="max-w-lg mx-auto text-center">
			<EquipeCard page={false} {professional} />
		</div>
	</div>

	<div class="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
		<div class="max-w-lg mx-auto text-center">
			<div class="shadow-md">
				{#each professional.procedimentos as procedimento}
					<div class="tab w-full overflow-hidden border-t">
						<input class="absolute opacity-0" id={procedimento.nome} type="radio" name="tabs2" />
						<label class="block p-5 leading-normal cursor-pointer" for={procedimento.nome}
							>{procedimento.nome}</label
						>
						<div
							class="tab-content overflow-hidden border-l-2 bg-gray-100 border-yellow-600  leading-normal"
						>
							<p class="p-5">{procedimento.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	/* Tab content - closed */
	.tab-content {
		max-height: 0;
		-webkit-transition: max-height 0.35s;
		-o-transition: max-height 0.35s;
		transition: max-height 0.35s;
	}
	/* :checked - resize to full height */
	.tab input:checked ~ .tab-content {
		max-height: 100vh;
	}
	/* Label formatting when open */
	.tab input:checked + label {
		/*@apply text-xl p-5 border-l-2 border-indigo-500 bg-gray-100 text-indigo*/
		font-size: 1.25rem; /*.text-xl*/
		padding: 1.25rem; /*.p-5*/
		border-left-width: 2px; /*.border-l-2*/
		border-color: #c69d4b; /*.border-indigo*/
		background-color: #f8fafc; /*.bg-gray-100 */
		color: #c69d4b; /*.text-indigo*/
	}
	/* Icon */
	.tab label::after {
		float: right;
		right: 0;
		top: 0;
		display: block;
		width: 1.5em;
		height: 1.5em;
		line-height: 1.5;
		font-size: 1.25rem;
		text-align: center;
		-webkit-transition: all 0.35s;
		-o-transition: all 0.35s;
		transition: all 0.35s;
	}
	/* Icon formatting - closed */
	.tab input[type='checkbox'] + label::after {
		content: '+';
		font-weight: bold; /*.font-bold*/
		border-width: 1px; /*.border*/
		border-radius: 9999px; /*.rounded-full */
		border-color: #b8c2cc; /*.border-grey*/
	}
	.tab input[type='radio'] + label::after {
		content: '\25BE';
		font-weight: bold; /*.font-bold*/
		border-width: 1px; /*.border*/
		border-radius: 9999px; /*.rounded-full */
		border-color: #b8c2cc; /*.border-grey*/
	}
	/* Icon formatting - open */
	.tab input[type='checkbox']:checked + label::after {
		transform: rotate(315deg);
		background-color: #c69d4b; /*.bg-indigo*/
		color: #f8fafc; /*.text-grey-lightest*/
	}
	.tab input[type='radio']:checked + label::after {
		transform: rotateX(180deg);
		background-color: #c69d4b; /*.bg-indigo*/
		color: #f8fafc; /*.text-grey-lightest*/
	}
	#textGolden {
		color: #c69d4b;
	}
</style>
