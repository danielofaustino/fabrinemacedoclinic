<script>
	import { links } from '../stores/links.mjs';
</script>

<div class="py-12 px-7">
	<div
		tabindex="0"
		aria-label="footer"
		class="focus:outline-none mx-auto container flex flex-col items-center justify-center"
	>
		<div tabindex="0" aria-label="fabrine macedo beauty clinic logo" role="img">
			<img src="/logo.svg" alt="logo" class="h-12" />
		</div>
		<div class="text-black flex flex-col items-center f-f-l pt-3">
			<h1 tabindex="0" class="focus:outline-none font-black">Clínica F.Care</h1>
			<div class="my-6 text-base text-color f-f-l">
				<ul class="md:flex md:items-center">
					{#each links as link}
						<li
							class="md:mr-6 cursor-pointer pt-4 lg:py-0 text-center text-gray-800 hover:text-gray-400 duration-500"
						>
							<a
								href={link.link}
								class="focus:outline-none   focus:underline hover:text-gray-500 text-gray-800 hover:text-gray-400 duration-500"
								>{link.title}</a
							>
						</li>
					{/each}
				</ul>
			</div>
			<div class="text-sm text-color mb-4 f-f-l">
				<a
					href="https://g.page/fabrinemacedobeautyartist?share"
					class="hover:shadow-lg mr-4 focus:outline-none rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 text-center"
					aria-label="download on the app store"
				>
					<p tabindex="0" class=" focus:outline-none">
						Av. Vital Brasil, n° 305 - Sala 1310 - Butantã, São Paulo - SP, 05503-001
					</p></a
				>
			</div>
		</div>
		<div class="w-9/12 h-0.5 bg-gray-100 dark:bg-gray-700 rounded-full" />
		<div class="flex gap-16 m-4 p-2">
			<!-- Instagram Icon -->
			<div class="w-7">
				<a href="https://www.instagram.com/clinicafcare" target="__blank" alt="Google Maps">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						version="1.1"
						id="Layer_1"
						x="0px"
						y="0px"
						viewBox="0 0 56.7 56.7"
						enable-background="new 0 0 56.7 56.7"
						xml:space="preserve"
					>
						<g>
							<path
								d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7   c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"
							/>
							<circle cx="41.5" cy="16.4" r="2.9" />
							<path
								d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9   h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3   s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6   c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"
							/>
						</g>
					</svg>
				</a>
			</div>
			<!-- Google Maps Icon -->
			<div class="w-7">
				<a href="https://g.page/fabrinemacedobeautyartist?share" target="__blank" alt="Google Maps">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						viewBox="0 0 150 150"
						><path
							d="M89.77,10.4c-4.4-1.39-9.08-2.15-13.94-2.15c-14.18,0-26.87,6.41-35.33,16.48l21.8,18.34L89.77,10.4z"
						/><path
							d="M40.49,24.73c-6.74,8.02-10.81,18.37-10.81,29.66c0,8.68,1.73,15.71,4.57,22.01l28.04-33.33L40.49,24.73z"
						/><path
							d="M75.83,36.75c9.75,0,17.65,7.9,17.65,17.65c0,4.34-1.57,8.32-4.17,11.39c0,0,13.94-16.58,27.47-32.66   c-5.59-10.75-15.28-19.02-27-22.73L62.29,43.07C65.53,39.2,70.39,36.75,75.83,36.75"
						/><path
							d="M75.83,72.04c-9.75,0-17.65-7.9-17.65-17.65c0-4.31,1.55-8.26,4.11-11.33L34.25,76.4   c4.79,10.63,12.76,19.16,20.97,29.91L89.3,65.79C86.07,69.61,81.23,72.04,75.83,72.04"
						/><path
							d="M88.63,117.37c15.39-24.07,33.34-35,33.34-62.98c0-7.67-1.88-14.9-5.19-21.26l-61.55,73.18   c2.61,3.42,5.24,7.06,7.81,11.07c9.36,14.46,6.76,23.13,12.8,23.13C81.86,140.51,79.27,131.83,88.63,117.37"
						/></svg
					>
				</a>
			</div>
			<!-- WhatsApp Icon -->
			<div class="w-7">
				<a href="https://wa.me/5511970619477" target="__blank" alt="Whats App">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						id="Layer_1"
						style="enable-background:new 0 0 56.693 56.693;"
						version="1.1"
						viewBox="0 0 56.7 56.7"
						xml:space="preserve"
						><g
							><path
								class="st0"
								d="M46.3802,10.7138c-4.6512-4.6565-10.8365-7.222-17.4266-7.2247c-13.5785,0-24.63,11.0506-24.6353,24.6333   c-0.0019,4.342,1.1325,8.58,3.2884,12.3159l-3.495,12.7657l13.0595-3.4257c3.5982,1.9626,7.6495,2.9971,11.7726,2.9985h0.01   c0.0008,0-0.0006,0,0.0002,0c13.5771,0,24.6293-11.0517,24.635-24.6347C53.5914,21.5595,51.0313,15.3701,46.3802,10.7138z    M28.9537,48.6163h-0.0083c-3.674-0.0014-7.2777-0.9886-10.4215-2.8541l-0.7476-0.4437l-7.7497,2.0328l2.0686-7.5558   l-0.4869-0.7748c-2.0496-3.26-3.1321-7.028-3.1305-10.8969c0.0044-11.2894,9.19-20.474,20.4842-20.474   c5.469,0.0017,10.6101,2.1344,14.476,6.0047c3.8658,3.8703,5.9936,9.0148,5.9914,14.4859   C49.4248,39.4307,40.2395,48.6163,28.9537,48.6163z"
							/><path
								class="st0"
								d="M40.1851,33.281c-0.6155-0.3081-3.6419-1.797-4.2061-2.0026c-0.5642-0.2054-0.9746-0.3081-1.3849,0.3081   c-0.4103,0.6161-1.59,2.0027-1.9491,2.4136c-0.359,0.4106-0.7182,0.4623-1.3336,0.1539c-0.6155-0.3081-2.5989-0.958-4.95-3.0551   c-1.83-1.6323-3.0653-3.6479-3.4245-4.2643c-0.359-0.6161-0.0382-0.9492,0.27-1.2562c0.2769-0.2759,0.6156-0.7189,0.9234-1.0784   c0.3077-0.3593,0.4103-0.6163,0.6155-1.0268c0.2052-0.4109,0.1027-0.7704-0.0513-1.0784   c-0.1539-0.3081-1.3849-3.3379-1.8978-4.5706c-0.4998-1.2001-1.0072-1.0375-1.3851-1.0566   c-0.3585-0.0179-0.7694-0.0216-1.1797-0.0216s-1.0773,0.1541-1.6414,0.7702c-0.5642,0.6163-2.1545,2.1056-2.1545,5.1351   c0,3.0299,2.2057,5.9569,2.5135,6.3676c0.3077,0.411,4.3405,6.6282,10.5153,9.2945c1.4686,0.6343,2.6152,1.013,3.5091,1.2966   c1.4746,0.4686,2.8165,0.4024,3.8771,0.2439c1.1827-0.1767,3.6419-1.489,4.1548-2.9267c0.513-1.438,0.513-2.6706,0.359-2.9272   C41.211,33.7433,40.8006,33.5892,40.1851,33.281z"
							/></g
						></svg
					>
				</a>
			</div>

			<!-- Facebook Icon -->
			<div class="w-7">
				<a
					href="https://www.facebook.com/fabrinemacedobeautyclinic"
					target="__blank"
					alt="Facebook"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
						version="1.1"
						viewBox="0 0 512 512"
						width="100%"
						xml:space="preserve"
						><path
							d="M255.022,511.998l0.229,0.001l-0.079,0l-0.15,-0.001Zm1.806,0.001l-0.079,0l0.229,-0.001l-0.15,0.001Zm-2.588,-0.005l0.247,0.001l-0.142,0l-0.105,-0.001Zm3.415,0.001l-0.142,0l0.247,-0.001l-0.105,0.001Zm-4.169,-0.007l0.165,0.001l-0.132,-0.001l-0.033,0Zm4.995,0l-0.132,0.001l0.165,-0.001l-0.033,0Zm0.826,-0.009l-0.058,0.001l0.223,-0.003l-0.165,0.002Zm-6.779,-0.002l0.223,0.003l-0.058,-0.001l-0.165,-0.002Zm7.604,-0.01l-0.135,0.002l0.275,-0.004l-0.14,0.002Zm-8.404,-0.002l0.275,0.004l-0.135,-0.002l-0.14,-0.002Zm9.228,-0.012l-0.182,0.003l0.254,-0.005l-0.072,0.002Zm-9.984,-0.002l0.254,0.005l-0.182,-0.003l-0.072,-0.002Zm-0.937,-0.019l0.225,0.005l-0.04,-0.001l-0.185,-0.004Zm11.745,0.004l-0.04,0.001l0.225,-0.005l-0.185,0.004Zm-12.567,-0.025l0.309,0.008l-0.125,-0.003l-0.184,-0.005Zm13.39,0.005l-0.125,0.003l0.309,-0.008l-0.184,0.005Zm0.823,-0.022l-0.201,0.006l0.316,-0.009l-0.115,0.003Zm-14.967,-0.003l0.316,0.009l-0.201,-0.006l-0.115,-0.003Zm-0.72,-0.022l0.225,0.007l-0.212,-0.007l-0.194,-0.006l0.181,0.006Zm16.509,0l-0.212,0.007l0.225,-0.007l0.181,-0.006l-0.194,0.006Zm0.821,-0.027l-0.112,0.004l0.345,-0.012l-0.233,0.008Zm-18.371,-0.008l0.345,0.012l-0.112,-0.004l-0.233,-0.008Zm-0.749,-0.028l0.362,0.013l-0.201,-0.007l-0.161,-0.006Zm19.941,0.006l-0.201,0.007l0.362,-0.013l-0.161,0.006Zm-20.676,-0.036l0.354,0.015l-0.277,-0.011l-0.077,-0.004Zm21.495,0.004l-0.277,0.011l0.354,-0.015l-0.077,0.004Zm-22.525,-0.049l0.38,0.017l-0.093,-0.003l-0.287,-0.014Zm23.345,0.014l-0.093,0.003l0.38,-0.017l-0.287,0.014Zm-24.084,-0.048l0.394,0.018l-0.186,-0.008l-0.208,-0.01Zm24.902,0.01l-0.186,0.008l0.394,-0.018l-0.208,0.01Zm-25.63,-0.047l0.397,0.02l-0.279,-0.013l-0.118,-0.007Zm26.448,0.007l-0.279,0.013l0.397,-0.02l-0.118,0.007Zm0.818,-0.043l-0.362,0.019l0.321,-0.017l0.378,-0.021l-0.337,0.019Zm-27.925,0.002l0.321,0.017l-0.362,-0.019l-0.337,-0.019l0.378,0.021Zm28.741,-0.048l-0.16,0.009l0.406,-0.023l-0.246,0.014Zm-29.844,-0.014l0.406,0.023l-0.16,-0.009l-0.246,-0.014Zm-0.722,-0.043l0.405,0.024l-0.253,-0.014l-0.152,-0.01Zm31.382,0.01l-0.253,0.014l0.405,-0.024l-0.152,0.01Zm-32.071,-0.053l0.365,0.023l-0.34,-0.021l-0.342,-0.022l0.317,0.02Zm32.887,0.002l-0.34,0.021l0.365,-0.023l0.317,-0.02l-0.342,0.022Zm0.814,-0.053l-0.122,0.008l0.387,-0.026l-0.265,0.018Zm-34.755,-0.018l0.387,0.026l-0.122,-0.008l-0.265,-0.018Zm-0.721,-0.05l0.38,0.027l-0.208,-0.014l-0.172,-0.013Zm36.29,0.013l-0.208,0.014l0.38,-0.027l-0.172,0.013Zm-37.009,-0.064l0.349,0.025l-0.271,-0.019l-0.078,-0.006Zm37.822,0.006l-0.271,0.019l0.349,-0.025l-0.078,0.006Zm-38.789,-0.079l0.306,0.023l-0.074,-0.005l-0.232,-0.018Zm39.602,0.018l-0.074,0.005l0.306,-0.023l-0.232,0.018Zm0.811,-0.063l-0.146,0.011l0.311,-0.025l-0.165,0.014Zm-41.157,-0.014l0.311,0.025l-0.146,-0.011l-0.165,-0.014Zm-0.725,-0.059l0.264,0.022l-0.186,-0.015l-0.078,-0.007Zm42.694,0.007l-0.186,0.015l0.264,-0.022l-0.078,0.007Zm-43.492,-0.074l0.079,0.007l-0.013,-0.001l-0.066,-0.006Zm44.302,0.006l-0.013,0.001l0.079,-0.007l-0.066,0.006Zm0.81,-0.071l-0.072,0.006l0.181,-0.016l-0.109,0.01Zm-45.965,-0.01l0.181,0.016l-0.072,-0.006l-0.109,-0.01Zm-0.75,-0.068l0.135,0.013l-0.084,-0.008l-0.051,-0.005Zm47.523,0.005l-0.084,0.008l0.135,-0.013l-0.051,0.005Zm-63.736,-2.025c-122.319,-19.226 -216,-125.203 -216,-252.887c0,-141.29 114.71,-256 256,-256c141.29,0 256,114.71 256,256c0,127.684 -93.681,233.661 -216,252.887l0,-178.887l59.65,0l11.35,-74l-71,0l0,-48.021c0,-20.245 9.918,-39.979 41.719,-39.979l32.281,0l0,-63c0,0 -29.296,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.887Z"
						/></svg
					>
				</a>
			</div>
		</div>
	</div>
</div>

<style>
</style>
