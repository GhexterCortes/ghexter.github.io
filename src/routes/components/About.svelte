<script lang="ts">
    import Icon from '@iconify/svelte';
    import { aboutMeDescription, discordMarkdownOptions, discordProfileUrl, email, githubAvatarUrl, githubUrl } from "../../scripts/app";
    import discordMarkdown from '@discord-components/markdown';
    import { onMount } from 'svelte';
import Gradient from '../../assets/components/Gradient.svelte';

    onMount(() => {
        const spoilers = document.querySelectorAll<HTMLDivElement>('.d-spoiler');
        spoilers.forEach(s => s.addEventListener('click', () => s.classList.add('active')));
    });
</script>
<style lang="scss">
    @import "../../assets/css/variables.scss";

    .about {
        @include Page;
        min-height: unset;
        height: unset;

        .about-container {
            @include PageContainer;
            position: relative;
            z-index: 1;

            .about-contents {
                display: flex;

                .about-text {
                    margin-right: 2rem;
                    width: 100%;

                    .about-title {
                        @include PageTitle;
                    }

                    .about-description-container {
                        line-height: 1.5rem;
                        font-size: 1rem;
                        color: rgba($color: #fff, $alpha: 0.8);
                        font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    }
                }

                .about-links {
                    flex-shrink: 0;

                    .about-image {
                        width: 250px;
                        height: 250px;
                        margin-bottom: 2rem;
                        flex-shrink: 0;

                        .about-image-container {
                            height: 100%;
                            width: 100%;
                            border-radius: 50%;
                            overflow: hidden;
                            position: relative;
                            box-shadow: 1px 3px 30px rgba($color: #000000, $alpha: 0.1);

                            img {
                                height: 100%;
                                width: 100%;
                            }
                        }
                    }

                    .about-links-container {
                        display: block;
                        text-align: center;
                        margin-bottom: 2rem;

                        a {
                            display: inline-flex;
                            justify-content: center;
                            align-items: center;
                            height: 3rem;
                            width: 3rem;
                            font-size: 1.4rem;
                            border-radius: 50%;
                            color: $primary;
                            background: $dark;
                            margin: 0 0.5rem;

                            &:focus-visible {
                                outline: 4px solid currentColor;
                            }

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
        }
    }

    @media (max-width: 730px) {
        .about .about-container {
            margin: 0 0.5rem;
            width: calc(100% - 1rem);
        }
    }

    @media (max-width: 655px) {
        .about .about-container .about-contents {
            flex-direction: column;

            .about-links {
                margin-top: 2rem;

                .about-image {
                    display: none;
                }

                .about-links-container {
                    text-align: left;
                }
            }
        }
    }

    @media (max-width: 365px) {
        .about .about-container .about-contents .about-text .about-title {
            font-size: 2.4rem;
        }
    }
</style>

<div class="about" id="about">
    <div class="about-container">
        <div class="about-contents">
            <div class="about-text">
                <h2 class="about-title">About <Gradient>Me</Gradient></h2>
                <div class="about-description-container discord">
                    {@html discordMarkdown.toHTML(aboutMeDescription, discordMarkdownOptions)}
                </div>
            </div>
            <div class="about-links">
                <div class="about-image">
                    <div class="about-image-container">
                        <img src={githubAvatarUrl} alt="">
                    </div>
                </div>
                <div class="about-links-container">
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                        <Icon icon="fa-brands:github" />
                    </a>
                    <a href={discordProfileUrl} target="_blank" rel="noopener noreferrer">
                        <Icon icon="fa-brands:discord" />
                    </a>
                    <a href="mailto:{email}">
                        <Icon icon="material-symbols:mail-rounded" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>