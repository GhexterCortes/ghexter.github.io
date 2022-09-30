<script>
    import '../assets/css/topbar.scss';
    import Icon from "@iconify/svelte";
    import { github } from "../scripts/info";
    import ScrollAnchor from './ScrollAnchor.svelte';

    let navOpen = false;
</script>

<div class="topbar" class:active={navOpen}>
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
            <a href="{github}">GitHub <Icon icon="ci:external-link" inline={true} /></a>
        </div>
    </div>
</div>
