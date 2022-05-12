<script>
	export let post;
</script>

<div class="bg-white border-gray-200 shadow-md z-0 min-h-0">
	<a href={post.permalink} target="_blank">
		<img class="rounded-t-lg h-[350px] sm:h-[400px] w-full object-cover" src={post.media_url} alt={post.id} />
	</a>
	<div class="md:py-8 px-2 py-10">
		<p class=" md:mb-2 text-gray-700 text-sm text-justify h-24">{post.caption}</p>
	</div>
</div>
