<script>
	import { posts, instagramPostLoading } from '../stores/instagramStore.mjs';
	import PostCard from '../components/postCard.svelte';
	import Spinner from '../components/spinner.svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';


	const options = {
		type:'loop',
		autoplay: true,
		perPage: 4,
		gap: 14,
		height: '38rem',
		rewind: true,
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

{#if instagramPostLoading}
	<Spinner />
{:else if !instagramPostLoading && $posts.length > 0}
	<div class="shadow-md w-full top-0 left-0 ">
		<div class="bg-white mx-2 p-1">
			<Splide {options}>
				{#each $posts as post}
					<SplideSlide>
						<PostCard {post} />
					</SplideSlide>
				{/each}
			</Splide>
		</div>
	</div>
{/if}

<style>
</style>
