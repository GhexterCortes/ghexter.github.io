<script lang="ts">
    import Icon from '@iconify/svelte';
    import { onMount } from 'svelte';
    import '../css/main.scss';
    import { discordProfileUrl, githubUrl } from '../../scripts/app';

    let navActive: boolean = false;

    onMount(() => {
        const navAnchors = document.querySelectorAll<HTMLAnchorElement>('.topbar-links > a');

        navAnchors.forEach(a => {
            const href = a.getAttribute('data-href');

            if (!href?.startsWith('#')) return;

            a.addEventListener('click', e => {
                e.preventDefault();

                const findId = document.querySelector(href!);
                if (!findId) return;

                findId.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            });
        });
    });
</script>

<style lang="scss">
    @import '../css/variables.scss';

    $height: 3rem;

    .topbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        background: rgba($dark, $alpha: 0.8);
        backdrop-filter: $blur;
        z-index: 20;

        .topbar-container {
            position: relative;
            display: flex;
            align-items: center;
            width: calc(100% - 4rem);
            max-width: 800px;
            margin: 0 2rem;
            height: $height;
            color: rgba($white, $alpha: 0.9);

            .topbar-title {
                flex-shrink: 0;
                margin-right: 3rem;
                margin-left: 0.2rem;
                padding-left: 1rem;
                font-weight: 700;
                font-family: 'Gloock';
                letter-spacing: 0.2rem;
                font-size: 1em;
            }

            .topbar-links {
                width: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;

                a {
                    display: block;
                    padding: 0.4rem 1rem;
                    margin: 0 0.2rem;
                    font-size: 0.8em;
                    line-height: 0.8rem;
                    text-decoration: none;
                    border-radius: 1rem;
                    color: currentColor;

                    &:hover,
                    &:focus {
                        background-color: rgba($white, $alpha: 0.1);
                    }

                    &:focus-visible {
                        outline: 2px solid rgba($white, $alpha: 0.8);
                    }
                }

                .topbar-leave {
                    display: none;
                }
            }

            .topbar-nav-toggle {
                display: none;
            }
        }
    }

    @media (max-width: 680px) {
        .topbar {
            .topbar-container {
                position: static;

                .topbar-links {
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100vh;
                    padding-top: $height;
                    background: rgba($dark, $alpha: 0.8);
                    backdrop-filter: $blur;
                    display: none;
                    overflow: auto;
                    text-align: right;
                    transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) height;
                    z-index: -1;

                    a {
                        font-size: 1.5rem;
                        padding: 1rem 0;
                        margin: 1rem 2rem;
                        font-family: 'Inter';
                        font-weight: 600;
                        border-radius: 0;
                        position: relative;

                        &:hover,
                        &:focus {
                            background: none;
                            outline: none;
                        }

                        &:focus-visible {
                            text-decoration: underline;
                        }

                        &:first-child {
                            margin-top: 4rem;
                        }
                    }

                    .topbar-leave {
                        display: block;
                        border: none;
                        background: none;
                        opacity: 0;
                    }
                }

                .topbar-nav-toggle {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    right: 0;
                    margin-right: 2rem;
                    height: 2.5rem;
                    width: 2.5rem;
                    border: none;
                    background: none;
                    font-size: 1.8rem;
                }
            }

            &.active {
                background: none;
                backdrop-filter: none;

                .topbar-container {
                    .topbar-links {
                        display: block;
                    }
                }
            }
        }
    }

    :global(body) {
        padding-top: $height;
        scroll-padding-top: $height;
    }
</style>

<div class="topbar" class:active={navActive}>
    {#if navActive}
        <style>
            html {
                overflow: hidden;
            }
        </style>
    {/if}
    <div class="topbar-container">
        <div class="topbar-title">
            <span>Ghex</span>
        </div>
        <button class="topbar-nav-toggle" on:click={() => navActive = !navActive}>
            {#if navActive}
                <Icon icon="heroicons:x-mark-20-solid" />
            {:else}
                <Icon icon="lucide:equal" />
            {/if}
        </button>
        <div class="topbar-links">
            <a href="#about" data-href="#about" on:click={() => navActive = false}>About</a>
            <a href="#skills" data-href="#skills" on:click={() => navActive = false}>Skills</a>
            <a href="#projects" data-href="#projects" on:click={() => navActive = false}>Projects</a>
            <a href="#contact" data-href="#contact" on:click={() => navActive = false}>Contact</a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={discordProfileUrl} target="_blank" rel="noopener noreferrer">Discord</a>
            <button class="topbar-leave" on:focus={() => navActive = false}></button>
        </div>
    </div>
</div>