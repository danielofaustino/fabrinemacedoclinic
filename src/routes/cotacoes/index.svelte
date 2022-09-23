<script>
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  let professionals
  let professionalLoading = true

  onMount(async () => {

    const response = await fetch("https://fcare-clinic-server.herokuapp.com/professionals", {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      }
    })
    professionals = await response.json()
    professionalLoading = false

    console.log(professionals)

  });

  const emailPayload = {
    "professional": {
      "name": "DRA. GRASCIELY MEDEIROS",
      "specialty": "Harmonização Orofacial CROSP / 122802"
    },
    "patient": {
      "name": "Paulo Rogério Moreira",
      "telephone": "(11) 99579-4845",
      "email": "paulo@gmail.com"
    },
    "procedures": [
      {
        "id": "632ca0d3966dc140a8521cce",
        "name": "Botox Facial com retoque",
        "location": "Facial",
        "value": "R$: 1.200,00"
      },
      {
        "id": "632ca0d3966dc140a8521cce",
        "name": "Botox Facial com retoque",
        "location": "Facial",
        "value": "R$: 1.200,00"
      },
      {
        "id": "632ca0d3966dc140a8521cce",
        "name": "Botox Facial com retoque",
        "location": "Facial",
        "value": "R$: 1.200,00"
      }
    ],
    "subtotal": {
      "totalValue": "R$ 10.200,00",
      "x12": "R$ 850,00",
      "x1": "R$ 9.690,00"
    },
    "proposal": {
      "data": "23/09/2022",
      "expiration": "7 Dias"
    }
  }

  const sendForm = async () => {
    const response = await fetch("https://fcare-clinic-server.herokuapp.com/quotes", {
      method: 'POST',
      body: JSON.stringify(emailPayload),
      headers: {
        "Content-type": "application/json"
      }
    })

    if (response.redirected) {
      goto(response.url)
    }

    console.log("fetch", response)
  }
</script>

<svelte:head>
  <title>Cotações</title>

</svelte:head>
<h1 class="font-light text-center">Cotações</h1>

<div class="mt-8 flex flex-col gap-4 mx-6">

  <div class='flex flex-col gap-2'>
    <label for="professional" class='font-semibold pl-1'>Profissional:</label>
    <select name="professional" id="professional"
      class="bg-zinc-300 py-3 px-4 rounded text-sm placeholder:text-zinc-800 appearance-none" defaultValue="">




      {#if professionalLoading}
      <option>Loading ...</option>
      {:else if !professionalLoading && professionals.length > 0}
      <option>Selecione a Profissional:</option>
      {#each professionals as professional}
      <option>{professional.name}</option>
      {/each}

      {/if}



    </select>
  </div>





  <footer class="mt-4 flex justify-center gap-4">

    <a
      class="inline-flex items-center px-8 py-3 text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">
      <button class="text-sm font-medium" on:click={sendForm}>
        Enviar
      </button>
    </a>

  </footer>





</div>