<script lang="ts">
    import Icon from '@iconify/svelte';
    import { githubUrl } from '../../scripts/app';
    import { onMount } from 'svelte';
    import Gradient from '../../assets/components/Gradient.svelte';

    onMount(() => {
        const navAnchors = document.querySelectorAll<HTMLAnchorElement>('.homepage-links > a');

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
    @import '../../assets/css/variables.scss';

    .homepage {
        @include Page;
        align-items: center;
        overflow: hidden;

        .homepage-container {
            @include PageContainer;
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
                        white-space: nowrap;

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

    @media (max-width: 730px) {
        .homepage .homepage-container {
            margin: 0 0.5rem;
            width: calc(100% - 1rem);
        }
    }

    @media (max-width: 400px) {
        .homepage .homepage-container .homepage-title {
            .homepage-greet {
                font-size: 1.2rem;
            }

            .homepage-intro {
                font-size: 4.5rem;
            }
        }
    }

    @media (max-width: 340px) {
        .homepage .homepage-container .homepage-title .homepage-links a {
            font-size: 0.9rem;
        }
    }
</style>

<div class="homepage">
    <div class="homepage-container">
        <div class="homepage-title">
            <h3 class="homepage-greet">Hi, There</h3>
            <h1 class="homepage-intro">I am <Gradient>Ghex</Gradient></h1>
            <p class="homepage-subtitle">
                I code open source things for the web and other projects.
            </p>
            <div class="homepage-links">
                <a href="#about" data-href="#about">About</a>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">View Github <Icon icon="ph:caret-right-bold" inline={true} /></a>
            </div>
        </div>
    </div>
</div>