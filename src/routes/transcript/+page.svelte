<script lang="ts">
    import { page } from '$app/stores';
    import '../../assets/styles/main.scss';
    import { onMount } from 'svelte';

    const key = $page.url.searchParams.get('key') ?? 'NoKey';
    let content: Blob|null = null;

    onMount(async () => {
        const data = await fetch(`https://cdn.sourceb.in/bins/${key}/0`).then(async r => await r.text());

        content = new Blob([data], { type: 'text/html' });
    });
</script>

<style lang="scss">
    :global(html),
    :global(body) {
        overflow: hidden;
    }

    iframe {
        height: 100%;
        width: 100%;
    }
</style>

<!-- svelte-ignore a11y-missing-attribute -->
{#if content}
    <iframe src={URL.createObjectURL(content)} frameborder="0"></iframe>
{:else}
    <h1>Loading...</h1>
{/if}