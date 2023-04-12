<script lang="ts">
    import Icon from '@iconify/svelte';
    import colorsea from 'colorsea';
    import isMobile from 'is-mobile';

    export let title: string;
    export let image: string;
    export let description: string|null = '';
    export let links: { icon: string; url: string; }[] = [];
    export let color: string = '#fff';
    export let titleSize: string = '';
</script>

<style lang="scss">
    @import "../css/variables.scss";

    .project {
        position: relative;
        overflow: hidden;
        border-radius: 15px;
        border: 2px solid $dark;
        height: 320px;
        width: 320px;
        margin: 5.5px;

        --transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        --mildTransition: 0.5s;

        &.mobile {
            --transition: 0s;
        }

        transition: var(--mildTransition);

        .project-cover {
            position: relative;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: var(--mildTransition);

            > img {
                object-fit: cover;
                max-width: 150%;
                user-select: none;
            }
        }

        .project-content {
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 1rem;
            height: fit-content;
            width: 100%;
            z-index: 1;
            max-height: 100%;
            text-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.5);

            &::before {
                position: absolute;
                content: '';
                height: 300%;
                width: 100%;
                bottom: 0;
                left: 0;
                background: linear-gradient(transparent, rgba($color: #000000, $alpha: 1));
                z-index: -1;
            }

            .project-title {
                font-size: 1.6rem;
                white-space: nowrap;
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                font-weight: bolder;
                text-transform: uppercase;
                letter-spacing: 0.2rem;
            }

            .project-description {
                font-size: 1.1rem;
                font-weight: 500;
                line-height: 1.5rem;
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                transition: var(--transition);
                max-height: 0;
                margin-top: 10px;
                color: #dbdbdb;
            }

            .project-links {
                margin-top: 10px;
                display: flex;

                a {
                    font-size: 1.2rem;
                    margin-right: 10px;
                    height: 2.5rem;
                    width: 2.5rem;
                    flex-shrink: 0;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }

        &.mobile.active,
        &:hover,
        &:focus-within {
            .project-content {
                &::before {
                    background: currentColor;
                    opacity: 0.5;
                }
            }

            transform: scale(1.02);
            box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.5);

            .project-cover {
                transform: scale(1.2);
                filter: blur(100px) saturate(120%);

                > img {
                    height: 100%;
                    width: 100%;
                    object-fit: none;
                }
            }

            .project-description {
                max-height: 9rem;
            }
        }
    }
</style>

<div class="project" class:mobile={isMobile()}>
    <div class="project-cover">
        <img src={image} alt="" on:contextmenu|preventDefault={() => false}>
    </div>
    <div class="project-content" style="color: {colorsea(color).darken(60).hex()}">
        <h3 class="project-title" title={title} style="font-size: {titleSize || ''}; color: {colorsea(color).saturate(30).lighten(10).hex()}">{title}</h3>
        {#if description}
            <div class="project-description">{description}</div>
        {/if}
        <div class="project-links">
            {#each links as link}
                <a href={link.url} style="background: {colorsea(color).alpha(10).hex()}; color: {colorsea(color).darken(5).hex()};" target="_blank" rel="noopener noreferrer">
                    <Icon icon={link.icon}/>
                </a>
            {/each}
        </div>
    </div>
</div>