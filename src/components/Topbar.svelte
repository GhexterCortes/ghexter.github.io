<script>
    import '../assets/css/topbar.scss';
    import Icon from "@iconify/svelte";
    import { github } from "../scripts/info";
    import ScrollAnchor from './ScrollAnchor.svelte';

    let y = 0;
    let scrolling = false;
    let navOpen = false;

    $: y > 0 ? scrolling = true : scrolling = false
</script>

<svelte:window bind:scrollY={y} />

<div class="topbar" class:active={navOpen} class:scrolling={scrolling}>
    <div class="container">
        <div class="title">
            <ScrollAnchor link="#">Not Ghex</ScrollAnchor>
            <div class="burger">
                <button class="cheese" on:click={e => navOpen = !navOpen}>
                    {#if navOpen}
                    <Icon icon="ph:x" inline={true} />
                    {:else}
                    <Icon icon="ph:equals-bold" inline={true} />
                    {/if}
                </button>
            </div>
        </div>
        <div class="links">
            <ScrollAnchor link="#about">About</ScrollAnchor>
            <ScrollAnchor link="#projects">Projects</ScrollAnchor>
            <ScrollAnchor link="#contact">Contact</ScrollAnchor>
            <ScrollAnchor link="{github}">GitHub <Icon icon="ci:external-link" inline={true} /></ScrollAnchor>
        </div>
    </div>
</div>
