<script lang="ts">
    import { page } from '$app/stores';
    import Icon from '@iconify/svelte';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    export const prerender = true;

    const key = typeof window !== 'undefined' ? $page.url.searchParams.get('key') : 'NoKey';

    let confirm = false;

    onMount(() => {
        if (typeof window.localStorage === 'undefined') return;

        confirm = window.localStorage.getItem('confirm') === 'true';
    });

    function setConfirm() {
        if (typeof window.localStorage !== 'undefined') window.localStorage.setItem('confirm', 'true');
        confirm = true;
    }
</script>

<div class="render">
    {#if confirm}
        {#await fetch(`https://cdn.sourceb.in/bins/${key}/0`).then(async r => r.ok ? await r.text() : null).catch(() => null)}
        <div class="message">
            <h1>Loading...</h1>
            <p>HTML will be rendered here in a few seconds</p>
        </div>
        {:then content}
            {#if content}
                <!-- svelte-ignore a11y-missing-attribute -->
                <iframe src={URL.createObjectURL(new Blob([content], { type: 'text/html' }))} frameborder="0" allowtransparency={true}></iframe>
            {:else}
                <div class="message">
                    <h1>404</h1>
                    <p>File not found</p>
                    <a href="/">
                        <Icon icon="lucide:chevron-left" inline font-size="1.2rem" font-weight="700"/>Go to home
                    </a>
                </div>
            {/if}
        {/await}
    {:else}
        <div class="message" in:fade={{ duration: 200 }}>
            <h1>Note!</h1>
            <p>You're about to render an HTML file from a <a href="https://sourceb.in">sourceb.in</a>. I do not own the file nor responsible for any content that will be rendered.</p>
            <button on:click={setConfirm}>Proceed</button>
        </div>
    {/if}
</div>

<style lang="scss">
    @import '$lib/styles/variables.scss';

    :global(html),
    :global(body) {
        overflow: hidden;
    }

    iframe {
        height: 100%;
        width: 100%;
    }

    .render {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .message {
            padding: 2rem;
            border-radius: 1rem;
            min-width: 400px;
            max-width: 800px;
            background: rgba($white, $alpha: 0.05);
            margin: 1rem;

            h1 {
                margin: 0;
                color: $primary;
            }

            a {
                color: $primary;
            }

            > a,
            > button {
                background: $primary;
                color: $black;
                padding: 0.5rem 1rem;
                border-radius: 0.5rem;
                display: inline-flex;
                align-items: center;
                gap: 0.2rem;
                margin-top: 1rem;
                text-decoration: none;
                font-weight: 500;
                border: none;
                cursor: pointer;
            }
        }
    }
</style>