<script lang="ts">
    import Footer from './components/Footer.svelte';
    import Topbar from './components/Topbar.svelte';
    import { avatar, description } from './scripts/info';
    import About from './sections/About.svelte';
    import Home from './sections/Home.svelte';
    import Projects from './sections/Projects.svelte';

</script>

<div class="page">
    <Topbar/>
    <Home/>
    <About/>
    <Projects/>
    <Footer/>
</div>


<svelte:head>
    <link rel="shortcut icon" href="{avatar}" type="image/x-icon">
    <meta name="description" content="{description}">
    <meta property="og:title" content="Not Ghex" />
    <meta property="og:description" content="{description}">
	<meta property="og:image" content="{avatar}">
</svelte:head>
