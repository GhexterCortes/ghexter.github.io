<script lang="ts">
import { browser } from '$app/environment';
import { page } from '$app/stores';
import { error } from '@sveltejs/kit';
    import '../../assets/styles/main.scss';

    const key = browser && $page.url.searchParams.get('key');
    if (!key) throw error(404);

    const data = fetch(`https://cdn.sourceb.in/bins/${key}/0`).then(async r => await r.text());
    const content = (async () => new Blob([await data], { type: 'text/html' }))();
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
{#await content then html}
    <iframe src={URL.createObjectURL(html)} frameborder="0"></iframe>
{/await}