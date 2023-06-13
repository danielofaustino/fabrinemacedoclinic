<script>
	import '../app.css';
	import Nav from '../components/nav.svelte';
	import Footer from '../components/footer.svelte';
	import Analytics from '$lib/analytics.svelte';

</script>

<Analytics />
<Nav />
<div class="w-full h-screen mt-24">
	<slot />
	<Footer />
</div>
