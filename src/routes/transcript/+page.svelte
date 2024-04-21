<script lang="ts">
    import '../../assets/styles/main.scss';

    export const prerender = true;

    const key = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('key') : 'NoKey';
    const data = fetch(`https://cdn.sourceb.in/bins/${key}/0`).then(async r => await r.text());
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
{#await data}
    <h1>Loading...</h1>
{:then content}
    <iframe src={URL.createObjectURL(new Blob([content], { type: 'text/html' }))} frameborder="0"></iframe>
{/await}