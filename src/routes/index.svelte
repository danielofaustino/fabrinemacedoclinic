<script>
	import InstagramCarousel from '../components/instagramCarousel.svelte';
	import EquipeBanner from '../components/equipeBanner.svelte';
	import SobreBanner from '../components/sobreBanner.svelte';
	import SvelteSeo from 'svelte-seo';
</script>

<svelte:head>
	<title>Clínica F.Care</title>
	<meta name="robots" content="index, follow" />
	<meta
		name="googlebot"
		content="Extensão de Cílios, Epilação Egípcia, Estética, Peeling, Podologia, Despigmentação a Laser, Design de Sobrancelhas, Revitalização Labial, Micropigmentação, Extensão de Cílios, Cursos,Botox,Preenchimento Labial,Fabrine Macedo"
	/>
	<link rel="canonical" href="https://www.clinicafcare.com.br/" />
</svelte:head>

<SvelteSeo
	openGraph={{
		title: 'Clínica F.Care',
		description:
			'Extensão de Cílios, Epilação Egípcia, Estética, Peeling, Podologia, Despigmentação a Laser, Design de Sobrancelhas, Revitalização Labial, Micropigmentação, Extensão de Cílios, Cursos,Botox,Preenchimento Labial,Fabrine Macedo',
		url: 'https://www.clinicafcare.com.br',
		type: 'website',
		images: [
			{
				url: 'https://www.clinicafcare.com.br/about.webp',
				width: 850,
				height: 650,
				alt: 'Clínica F.Care'
			}
		]
	}}
/>

<EquipeBanner />
<div class="py-8">
	<hr />
</div>
<InstagramCarousel />
<SobreBanner />
