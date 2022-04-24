<script>
	import EquipeCarousel from '../components/equipeCarousel.svelte';
</script>

<svelte:head>
	<title>Equipe</title>
</svelte:head>
<section class="relative bg-white">
	<img
		class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
		src="equipe/equipe.JPG"
		alt="Couple on a bed with a dog"
	/>

	<div
		class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"
	/>

	<div class="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
		<div class="max-w-xl text-center sm:text-left">
			<h1 class="text-3xl font-extrabold sm:text-5xl">
				Nosso time de
				<strong class="font-extrabold sm:block" id="textGolden"> Especialistas. </strong>
			</h1>

			<p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
				Um Conceito de Atendimento que vai além de oferecer procedimentos estéticos, mas sim,
				proporcionar uma nova experiencia aos nosso pacientes
			</p>
		</div>
	</div>
</section>

<EquipeCarousel />

<style>
	#textGolden {
		color: #c69d4b;
	}
</style>
