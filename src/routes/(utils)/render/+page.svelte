<script lang="ts">
    import { page } from '$app/stores';
    import Icon from '@iconify/svelte';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    export const prerender = true;

    const key = typeof window !== 'undefined' ? $page.url.searchParams.get('key') : 'NoKey';

    let metadata: { hits: number; title: string; description: string; created: string; }|null = null;
    let confirm = false;

    onMount(async () => {
        fetch(`https://sourceb.in/api/bins/${key}`).then(async r => r.ok ? metadata = await r.json() : null).catch(() => null);

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
                <div class="frame">
                    <nav>
                        <a href="/"><Icon icon="lucide:chevron-left" inline font-size="1.2rem" font-weight="700"/>Home</a>
                        {#if metadata}
                            <div class="metadata">
                                <h1 class="title"><a href="https://sourceb.in/{key}" target="_blank" rel="noopener noreferrer">{metadata.title}</a></h1>
                                <div class="info">
                                    <p class="stats">
                                        <span>
                                            <Icon icon="ph:eye-bold" inline/>
                                            {metadata.hits} view{metadata.hits === 1 ? '' : 's'}
                                        </span>
                                        <span>
                                            <Icon icon="ph:calendar-bold" inline/>
                                            {new Date(metadata.created).toDateString()}
                                        </span>
                                    </p>
                                    {#if metadata.description}
                                        <p class="description">
                                            <Icon icon="ph:pencil-bold" inline/>
                                            <span>{metadata.description}</span>
                                        </p>
                                    {/if}
                                </div>
                            </div>
                        {/if}
                    </nav>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <iframe src={URL.createObjectURL(new Blob([content], { type: 'text/html' }))} frameborder="0" allowtransparency={true}></iframe>
                </div>
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
            <p>You're about to render an HTML file from a <a href="https://sourceb.in/{key}">{metadata?.title ?? 'sourceb.in'}</a>. I do not own the file nor responsible for any content that will be rendered.</p>
            <button on:click={setConfirm}>Proceed</button>
        </div>
    {/if}
</div>

<style lang="scss">
    @import '$lib/styles/variables.scss';

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
                @include PrimaryButton();
                margin-top: 1rem;
            }
        }

        .frame {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;

            iframe {
                height: 100%;
                width: 100%;
            }

            nav {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 1rem;
                background: rgba($white, $alpha: 0.05);

                > a {
                    margin-right: 1rem;
                    flex-shrink: 0;
                    @include PrimaryButton();
                }

                .metadata {
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                    align-items: center;

                    .title {
                        margin: 0;
                        font-size: 1rem;

                        a {
                            color: $primary;
                            text-decoration: none;
                        }
                    }

                    .info {
                        display: flex;
                        align-items: end;
                        flex-direction: column;
                        font-size: 0.8rem;
                        color: rgba($white, $alpha: 0.5);
                        gap: 0.5rem;
                    }

                    .description {
                        display: flex;
                        align-items: center;
                        margin-bottom: 0.5rem;
                        font-size: 0.8rem;
                        color: rgba($white, $alpha: 0.5);
                        gap: 0.2rem;
                    }
                }
            }
        }

        @media screen and (max-width: 750px) {
            .frame {
                nav {
                    .metadata {
                        width: 100%;
                        justify-content: end;

                        .title {
                            display: none;
                        }
                    }
                }
            }
        }
    }
</style>