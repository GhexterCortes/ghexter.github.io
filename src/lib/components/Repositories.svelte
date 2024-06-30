<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import { fetchRepository, type RepositoryData } from '../scripts/helpers';
    import Repository from './Repository.svelte';

    export let data: string[];

    let repositories: Promise<(RepositoryData|null)[]> = Promise.resolve([]);
    let scrollElement: HTMLDivElement;
    let empty = false;

    function scrollHorizontally(event: WheelEvent) {
        if (!scrollElement) return;

        const isScrollable = scrollElement.scrollWidth > scrollElement.clientWidth;
        const isScrollEnd = scrollElement.scrollLeft + scrollElement.clientWidth >= scrollElement.scrollWidth;
        const isScrollStart = scrollElement.scrollLeft <= 0;

        if (!isScrollable) return;
        if (isScrollStart && event.deltaY < 0) return;
        if (isScrollEnd && event.deltaY > 0) return;

        if (event.deltaY !== 0) {
            event.preventDefault();
            scrollElement.scrollBy({
                left: event.deltaY < 0 ? -50 : 50,
            });
        }
    }

    onMount(async () => {
        repositories = Promise.all(data.map(r => fetchRepository(r)))
            .then(data => {
                data = data.filter(Boolean);

                if (!data.length) empty = true;
                return data;
            });
    });
</script>

{#if !empty}
    <div class="repositories">
        <h1>Repositories</h1>
        {#await repositories}
            <div class="skeleton" bind:this={scrollElement} on:wheel={scrollHorizontally}>
                {#each data as _, i}
                    <div class="skeleton-item" style="animation-delay: {i * 0.5}s;"></div>
                {/each}
            </div>
        {:then repositories}
            <div class="content" bind:this={scrollElement} on:wheel={scrollHorizontally}>
                {#each repositories as repository}
                    {#if repository}
                        <div class="repository-container">
                            <Repository data={repository}/>
                        </div>
                    {/if}
                {/each}
            </div>
        {/await}
    </div>
{/if}

<style lang="scss">
    @import '$lib/styles/variables.scss';

    $width: 212px;
    $height: 150px;

    .repositories {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        gap: 1rem;

        h1 {
            margin: 0;
            color: rgba($primary, $alpha: 0.8);
            font-size: 1.7rem;
        }

        .skeleton {
            display: flex;
            overflow: auto;
            gap: 1rem;

            .skeleton-item {
                flex-shrink: 0;
                height: $height;
                width: $width;
                background-color: rgba($secondary, $alpha: 0.1);
                border-radius: 1rem;
                animation: skeleton 1s infinite alternate;
            }
        }

        .content {
            display: flex;
            overflow: auto;
            border-radius: 1rem;
            gap: 1rem;

            .repository-container {
                width: $width;
                height: $height;
                flex-shrink: 0;
            }
        }

        .skeleton,
        .content {
            scrollbar-width: none;
            -ms-overflow-style: none;

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }

    @keyframes skeleton {
        0% {
            background-color: rgba($secondary, $alpha: 0.1);
        }
        100% {
            background-color: rgba($secondary, $alpha: 0.15);
        }
    }
</style>