<script>
	import { equipe, equipeLoading } from '../stores/equipeStore.mjs';
	import EquipeCard from '../components/equipeCard.svelte';
	import Spinner from '../components/spinner.svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';

	let page = 'equipeCarousel';

	const options = {
		type: 'loop',
		perPage: 4,
		gap: 14,
		height: '38rem',
		autoScroll: {
			speed: 2
		},
		breakpoints: {
			2560: {
				perPage: 5
			},
			1440: {
				perPage: 4
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

{#if equipeLoading}
	<Spinner />
{:else if !equipeLoading && $equipe.length > 0}
	<div class="shadow-md w-full top-0 left-0 ">
		<div class="bg-white mx-20 my-10 p-1">
			<Splide {options}>
				{#each $equipe as professional}
					<SplideSlide>
						<EquipeCard {professional} {page} />
					</SplideSlide>
				{/each}
			</Splide>
		</div>
	</div>
{/if}

<style>
</style>
