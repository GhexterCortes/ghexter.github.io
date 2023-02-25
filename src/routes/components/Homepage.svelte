<script lang="ts">
    // @ts-expect-error
    import GradientText from 'svelte-gradient-typography';
    import Icon from '@iconify/svelte';

    let popcatActive: boolean = false;
</script>

<style lang="scss">
    @import '../../assets/css/variables.scss';

    .homepage {
        display: flex;
        height: 100%;
        width: 100%;
        overflow: hidden;
        position: relative;
        justify-content: center;
        align-items: center;

        .homepage-container {
            width: calc(100% - 4rem);
            max-width: 800px;
            margin: 0 2rem;
            padding: 0 1rem;
            position: relative;
            z-index: 1;

            .homepage-title {
                display: flex;
                flex-direction: column;

                .homepage-greet,
                .homepage-intro {
                    font-family: 'Gloock';
                    letter-spacing: 0.2rem;
                }

                .homepage-greet {
                    color: $dim;
                    font-size: 1.2rem;
                }

                .homepage-intro {
                    margin-bottom: 0.5rem;
                    font-size: 5rem;
                    font-weight: 600;
                }

                .homepage-subtitle {
                    color: $dim;
                    max-width: 410px;
                    margin-bottom: 2rem;
                }

                .homepage-links {
                    display: flex;

                    a {
                        padding: 0.5rem 1rem;
                        margin-right: 0.5rem;
                        background: none;
                        border-radius: 5rem;
                        color: $primary;
                        font-weight: 500;
                        text-decoration: none;

                        &:hover {
                            background: rgba($dim, $alpha: 0.2);
                        }

                        &:first-child {
                            background: $primary;
                            color: $white;
                        }

                        &:focus-visible {
                            outline: 4px solid currentColor;
                        }
                    }
                }
            }

            .homepage-background {
                position: absolute;
                z-index: 2;
                height: 500px;
                width: 500px;
                top: 50%;
                right: -10%;
                margin-top: -2rem;
                transform: translateY(-50%);
                background-image: url(./images/popcat.png);
                background-size: cover;
                background-position: 2%;
                opacity: 0.1;
                animation: both slideUp cubic-bezier(0.16, 0.73, 0.18, 1.07) 1s;
                animation-delay: 1s;

                &.active {
                    background-position: 95%;
                }
            }
        }
    }

    @keyframes slideUp {
        from { margin-top: 0; opacity: 0; }
        to { margin-top: -2rem; opacity: 0.1; }
    }
</style>

<div class="homepage">
    <div class="homepage-container">
        <div class="homepage-title">
            <h3 class="homepage-greet">Hi, There</h3>
            <h1 class="homepage-intro">I am <GradientText style="font: inherit; display: inline; letter-spacing: inherit; margin: inherit; padding: inherit;">Ghex</GradientText></h1>
            <p class="homepage-subtitle">
                I code open source things for the web and other projects.
            </p>
            <div class="homepage-links">
                <a href="#about">About</a>
                <a href="#github">View Github <Icon icon="ph:caret-right-bold" inline={true} /></a>
            </div>
        </div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            class="homepage-background"
            class:active={popcatActive}
            tabindex="0"
            on:keyup={(e) => e.key === 'Enter' ? popcatActive = false : null}
            on:keydown={(e) => e.key === 'Enter' ? popcatActive = true : null}
            on:mouseup={() => popcatActive = false}
            on:mousedown={() => popcatActive = true}
            on:mouseleave={() => popcatActive = false}
        ></div>
    </div>
</div>