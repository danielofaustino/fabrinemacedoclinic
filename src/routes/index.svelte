<script>
  import { posts } from "../stores/instagramStore.mjs";

  console.log($posts)

</script>
<svelte:head>
  <title>FM Beauty Clinic</title>
</svelte:head>

<h1>Instagram Posts</h1>

{#each $posts as post}
<p> {post.caption}</p>
<img src={post.media_url} alt={post.id}>
{/each}
<style>

  img{
    width:300px;
    border-radius:10%
  }
</style>