<script>
  import "../app.css";
  import Nav from '../components/nav.svelte'
  import Footer from '../components/footer.svelte';
  </script>
<Nav/>
<div class="w-full h-screen mt-24">
<slot></slot>
<Footer />
</div>



