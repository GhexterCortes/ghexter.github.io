<script lang="ts">
    import Icon from '@iconify/svelte';
    import '../css/main.scss';

    let navActive: boolean = false;
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
            }

            .topbar-nav-toggle {
                display: none;
            }
        }
    }

    @media (max-width: 680px) {
        .topbar {
            background: $dark;

            .topbar-container {
                position: static;

                .topbar-links {
                    position: absolute;
                    top: 2.5rem;
                    left: 0;
                    height: 0px;
                    background: $dark;
                    backdrop-filter: $blur;
                    display: block;
                    overflow: auto;
                    text-align: right;
                    transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) height;
                    visibility: hidden;

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
                    font-size: 1.5rem;
                }
            }

            &.active {
                .topbar-container {
                    .topbar-links {
                        height: calc(100vh - 2.5rem);
                        visibility: visible;
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
            <Icon icon="fluent:navigation-20-filled" />
        </button>
        <div class="topbar-links">
            <a href="#about" on:click={() => navActive = false}>About</a>
            <a href="#skills" on:click={() => navActive = false}>Skills</a>
            <a href="#projects" on:click={() => navActive = false}>Projects</a>
            <a href="#contact" on:click={() => navActive = false}>Contact</a>
            <a href="https://github.com/NotGhex" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://discord.com/channels/@me/749120018771345488" target="_blank" rel="noopener noreferrer">Discord</a>
        </div>
    </div>
</div>