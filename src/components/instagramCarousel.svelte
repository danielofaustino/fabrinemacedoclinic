<script>
import { posts } from "../stores/instagramStore.mjs";
import PostCard from '../components/postCard.svelte';
  console.log($posts)
</script>

<div class="flex flex-wrap justify-center gap-3">
  {#if posts}
      {#each $posts as post}
         <PostCard post={post}/>
      {/each}
  {/if}
  {#if !posts}
  <p>Não existe posts para mostrar</p>
{/if}
</div>