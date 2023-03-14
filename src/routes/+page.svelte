<script lang="ts">
    import Topbar from '../assets/components/Topbar.svelte';
    import Homepage from './components/Homepage.svelte';
    import '../assets/css/main.scss';
    import About from './components/About.svelte';
    import Skills from './components/Skills.svelte';
    import Projects from './components/Projects.svelte';
</script>

<svelte:head>
    <title>Ghex</title>
</svelte:head>

<Topbar/>
<Homepage/>
<About/>
<Skills/>
<Projects/>