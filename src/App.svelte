<script lang="ts">
    import Footer from './components/Footer.svelte';
    import Topbar from './components/Topbar.svelte';
    import About from './sections/About.svelte';
    import Contact from './sections/Contact.svelte';
    import Home from './sections/Home.svelte';
    import Projects from './sections/Projects.svelte';

</script>

<div class="page">
    <Topbar/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
</div>
