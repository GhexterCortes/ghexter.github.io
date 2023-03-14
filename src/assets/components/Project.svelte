<script lang="ts">
    import Icon from '@iconify/svelte';

    export let title: string;
    export let image: string;
    export let description: string|null = '';
    export let links: { icon: string; url: string; }[] = [];
    export let color: string = '#fff';
    export let secondary: string = '#000';
    export let linkColor: string = color;
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
        transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        .project-cover {
            position: relative;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: scale(1.1);
            filter: blur(1px);
            transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

            > img {
                object-fit: cover;
                max-width: 150%;
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
                height: 250%;
                width: 100%;
                bottom: 0;
                left: 0;
                background: linear-gradient(transparent, rgba($color: #000, $alpha: 1));
                z-index: -1;
            }

            .project-title {
                font-size: 2rem;
                white-space: nowrap;
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                font-weight: bolder;
            }

            .project-description {
                font-size: 1.1rem;
                font-weight: 500;
                line-height: 1.5rem;
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                transition: 0.5s;
                max-height: 3rem;
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

        &:hover,
        &:focus-within {
            transform: scale(1.02);
            box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.5);

            .project-cover {
                transform: scale(1);
                filter: blur(0px);
            }

            .project-description {
                max-height: 9rem;
            }
        }
    }
</style>

<div class="project">
    <div class="project-cover">
        <img src={image} alt="">
    </div>
    <div class="project-content">
        <h3 class="project-title" style:color style="font-size: {titleSize || ''};">{title}</h3>
        {#if description}
            <div class="project-description">{description}</div>
        {/if}
        <div class="project-links">
            {#each links as link}
                <a href={link.url} style="background: {secondary}; color: {linkColor};" target="_blank" rel="noopener noreferrer">
                    <Icon icon={link.icon}/>
                </a>
            {/each}
        </div>
    </div>
</div>