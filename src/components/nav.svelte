<script>
  import MenuButton from "./menuButton.svelte";
  import WhatsButton from './whatsButton.svelte';
  import {links} from '../stores/links.mjs';
  let open = false 


  const toggle =()=>{
    open = !open
    console.log(open)
    setTimeout(()=>{
      open = false
    },1500)
  }
</script>


<div class="shadow-md w-full fixed top-0 left-0 z-10">
  <div class="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
    <div class="cursor-pointer flex">
      <span class="mr-2">
        <a href="/"><img src="/logo.png" alt="Logotipo" class="h-12"></a>
      </span>
        
    </div>
    <div on:click={toggle} class="text-3x1 absolute right-8 top-6 cursor-pointer md:hidden">
      <MenuButton name={open ? 'close':'menu'}/>
    </div>


    <ul class={`md:flex md:items-center md:pb-0 absolute md:static  bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-14 transition-all duration-300 ease-in ${open ? 'top-8 pt-10 pb-40':'top-[-600px]'}`}>
      {#each links as link}
           <li class="px-0 md:ml-8 md:my-0 my-7 border-b-2 border-transparent lg:hover:border-b-slate-400 md:text-xs">
             <a href="{link.link}" class="text-gray-800 hover:text-gray-400 duration-500">{link.title}</a>
            </li>
      {/each}
      <WhatsButton />
    </ul>
  </div>
</div>



