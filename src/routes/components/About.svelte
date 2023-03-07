<script lang="ts">
    // @ts-expect-error
    import GradientText from 'svelte-gradient-typography';
    import Icon from '@iconify/svelte';
    import { aboutMeDescription, discordMarkdownOptions, discordProfileUrl, email, githubProfileUrl } from "../../scripts/app";
    import discordMarkdown from '@discord-components/markdown';
    import { onMount } from 'svelte';

    onMount(() => {
        const spoilers = document.querySelectorAll<HTMLDivElement>('.d-spoiler');
        spoilers.forEach(s => s.addEventListener('click', () => s.classList.add('active')));
    });
</script>
<style lang="scss">
    @import "../../assets/css/variables.scss";

    .about {
        @include Page;
        display: flex;
        justify-content: center;
        min-height: unset;
        height: unset;

        .about-container {
            width: calc(100% - 4rem);
            max-width: 800px;
            margin: 0 2rem;
            padding: 0 1rem;
            position: relative;
            z-index: 1;

            .about-contents {
                display: flex;

                .about-text {
                    margin-right: 2rem;
                    width: 100%;

                    .about-title {
                        margin-bottom: 2rem;
                        font-size: 3rem;
                        font-family: 'Gloock';
                        letter-spacing: 0.1rem;
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
                        }
                    }
                }
            }
        }
    }
</style>

<div class="about">
    <div class="about-container">
        <div class="about-contents">
            <div class="about-text">
                <h2 class="about-title">About <GradientText style="font: inherit; display: inline; letter-spacing: inherit; margin: inherit; padding: inherit;">Me</GradientText></h2>
                <div class="about-description-container discord">
                    {@html discordMarkdown.toHTML(aboutMeDescription, discordMarkdownOptions)}
                </div>
            </div>
            <div class="about-links">
                <div class="about-image">
                    <div class="about-image-container">
                        <img src={githubProfileUrl} alt="">
                    </div>
                </div>
                <div class="about-links-container">
                    <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
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