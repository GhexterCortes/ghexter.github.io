<script lang="ts">
    // @ts-expect-error
    import GradientText from 'svelte-gradient-typography';
    import Icon from '@iconify/svelte';
    import { githubUrl } from '../../scripts/app';
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
                    font-size: 1.5rem;
                }

                .homepage-intro {
                    margin-bottom: 0.5rem;
                    font-size: 6rem;
                    font-weight: 600;
                }

                .homepage-subtitle {
                    color: $dim;
                    max-width: 410px;
                    margin-bottom: 2rem;
                    font-size: 1rem;
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
                        font-size: 1rem;
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
        }

        &::before {
            content: 'Ghex';
            position: absolute;
            top: 50%;
            left: 30%;
            font-size: 40rem;
            font-family: 'Gloock';
            color: rgba($dark, $alpha: 0.1);
            transform: translateY(-50%);
        }
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
                <a href={githubUrl} target="_blank noreferrer">View Github <Icon icon="ph:caret-right-bold" inline={true} /></a>
            </div>
        </div>
    </div>
</div>