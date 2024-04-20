<script lang="ts">
    import '../../../assets/styles/main.scss';

    export let data: { key: string, data: string };

    const content = new Blob([data.data], { type: 'text/html' });
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
<iframe src={URL.createObjectURL(content)} frameborder="0"></iframe>