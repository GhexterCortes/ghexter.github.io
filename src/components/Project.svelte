<script lang="ts">
    import Icon from '@iconify/svelte';
    import { toHTML } from 'discord-markdown-fix';
    import ScrollAnchor from './ScrollAnchor.svelte';

    export let thumbnail: string|undefined|null = null;
    export let name: string;
    export let description: string;
    export let links: { icon: string; url: string; }[] = [];
</script>

<style lang="scss">
    @use '../assets/css/e.scss';

    .project {
        border-radius: 10px;
        background: rgb(230, 230, 230);
        position: relative;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        width: 300px;

        .thumbnail {
            width: 100%;
            height: 250px;
            overflow: hidden;
            flex-shrink: 0;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                min-height: 100%;
                min-width: 100%;
                object-fit: cover;
            }
        }

        .content {
            padding: 1rem;
            position: relative;

            .name {
                font-size: 1.4rem;
                font-family: 'Abyssinica SIL';
                margin-bottom: 1rem;
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .description {
                font-size: 1rem;
                color: rgba($color: e.$theme, $alpha: 0.9);
                text-align: justify;
                min-height: 80px;
            }

            .links {
                flex-shrink: 0;
                margin-top: 1.5rem;
                display: flex;
                justify-content: center;
                margin-bottom: 1rem;

                > :global(a) {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 5px;
                    color: e.$light;
                    background: e.$theme;
                    padding: 10px;
                    height: 40px;
                    width: 40px;
                    border-radius: 10px;
                    font-size: 1.1rem;

                    &:first-child {
                        margin-left: 0;
                    }

                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }
    }
</style>

<div class="project">
    {#if thumbnail}
        <div class="thumbnail">
            <img src="{thumbnail}" alt="{name}">
        </div>
    {/if}
    <div class="content">
        <h2 class="name">{name}</h2>
        <p class="description">{@html toHTML(description, { escapeHTML: false })}</p>
        {#if links.length > 0}
            <div class="links">
            {#each links as link}
                <ScrollAnchor link="{link.url}">
                    <Icon icon="{link.icon}"/>
                </ScrollAnchor>
            {/each}
            </div>
        {/if}
    </div>
</div>
