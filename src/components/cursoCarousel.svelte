<script>
	import { cursos, cursoLoading } from '../stores/cursoStore.mjs';
	import CursoCard from '../components/cursoCard.svelte';
	import Spinner from '../components/spinner.svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';

	let page = 'equipeCarousel';

	const options = {
		type: 'loop',
		perPage: 5,
		gap: 5,
		autoScroll: {
			speed: 2
		},
		breakpoints: {
			2560: {
				perPage: 5
			},
			1440: {
				perPage: 5
			},
			1024: {
				perPage: 3
			},
			768: {
				perPage: 2
			},
			640: {
				perPage: 1
			},
			425: {
				perPage: 1
			}
		}
	};
</script>

{#if cursoLoading}
	<Spinner />
{:else if !cursoLoading && $cursos.length > 0}
	<div class="shadow-md w-full top-0 left-0 ">
		<div class="bg-white mx-10 my-10 pt-2">
			<a href="/equipe"
				><h1 class="text-3xl font-extrabold sm:text-4xl">
					Nossos <strong class="font-extrabold" id="textGolden"> Cursos </strong>
				</h1>
			</a>

			<Splide class="pt-5" {options}>
				{#each $cursos as curso}
					<SplideSlide>
						<CursoCard {curso} />
					</SplideSlide>
				{/each}
			</Splide>
		</div>
	</div>
{/if}

<style>
	#textGolden {
		color: #c69d4b;
	}
</style>
