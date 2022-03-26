<script>
  export let post
</script>


<div class="max-w-sm bg-white border-gray-200 shadow-md mb-2">
  <a href={post.permalink} target="_blank">
      <img class="rounded-t-lg h-96 w-full object-cover " src={post.media_url} alt={post.id} />
  </a>
  <div class="p-5">

      <p class="mb-2 text-gray-700 text-sm text-justify" >{post.caption}</p>
     
  </div>
</div>