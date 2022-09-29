<script>
    import '../assets/css/topbar.scss';
    import Icon from "@iconify/svelte";
    import { github } from "../scripts/info";

    let navOpen = false;
</script>

<div class="topbar" class:active={navOpen}>
    <div class="container">
        <div class="title">
            <a href="/" on:click={e => { e.preventDefault(); window.scrollTo(0, 0); }}>Not Ghex</a>
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
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="{github}">GitHub <Icon icon="ci:external-link" inline={true} /></a>
        </div>
    </div>
</div>
