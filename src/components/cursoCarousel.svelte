<script>
	import { cursos, cursoLoading } from '../stores/cursoStore.mjs';
	import CursoCard from '../components/cursoCard.svelte';
	import Spinner from '../components/spinner.svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';

	let page = 'equipeCarousel';

	const options = {
		type: 'carousel',
		perPage: 1,
		gap: 10,
		pagination: false,
		focus: 'center',
		autoplay: false,
		drag: false,
		arrows: false
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
