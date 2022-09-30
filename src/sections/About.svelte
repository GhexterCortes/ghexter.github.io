<script lang="ts">
    import { avatar, description, socialLinks } from '../scripts/info';
    import { toHTML } from 'discord-markdown-fix';
    import ScrollAnchor from '../components/ScrollAnchor.svelte';
    import Icon from '@iconify/svelte';
</script>

<style lang="scss">
    @use '../assets/css/e.scss';

    .about {
        padding: 0 2rem;
        display: flex;
        justify-content: center;
        background: rgba($color: e.$theme, $alpha: 0.9);

        .container {
            display: flex;
            align-items: center;
            width: 100%;
            max-width: 900px;

            .contents {
                margin: 2rem 0;
                border-radius: 10px;
                box-shadow: 0px 0px 100px rgba($color: #000, $alpha: 0.1);
                background: rgba($color: #fff, $alpha: 0.7);
                display: flex;
                width: 100%;
                min-height: 400px;
                overflow: hidden;
                position: relative;

                .profile {
                    text-align: center;
                    position: relative;
                    height: 100%;
                    padding: 1rem;

                    .image {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-shrink: 0;
                        width: 300px;
                        margin-top: 2rem;
                        margin-bottom: 2rem;

                        .avatar {
                            height: 220px;
                            width: 220px;
                            overflow: hidden;
                            border-radius: 50%;

                            img {
                                height: 100%;
                            }
                        }
                    }

                    .details {
                        color: e.$theme;
                        text-transform: uppercase;

                        h3 {
                            font-size: 1.3rem;
                            letter-spacing: 2px;
                        }

                        h4 {
                            font-size: 1rem;
                            font-weight: 200;
                            color: rgba($color: e.$theme, $alpha: 0.8);
                        }
                    }

                    .links {
                        margin: 2rem 0;
                        display: flex;
                        justify-content: center;

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
                        }
                    }
                }

                .description {
                    padding: 1rem 2rem;
                    background: rgb(230, 230, 230);
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    .title {
                        font-size: 3rem;
                        font-weight: 700;
                        font-family: 'Abyssinica SIL';
                        flex-shrink: 0;
                        margin: 2rem 0;
                        color: #000;
                    }

                    .details {
                        font-size: 1.1rem;
                        color: rgba($color: e.$theme, $alpha: 0.9);
                        text-align: justify;
                        height: 100%;
                    }
                }
            }
        }

        @media (max-width: 730px) {
            .container {
                justify-content: center;

                .contents {
                    flex-direction: column;
                    max-width: 400px;

                    .profile {
                        .image {
                            width: 100%;
                            margin-top: 1rem;

                            .avatar {
                                height: 150px;
                                width: 150px;
                            }
                        }

                        .links {
                            margin: 10px 0;
                        }
                    }

                    .description {
                        padding-bottom: 2rem;

                        .title {
                            margin-top: 0;
                            margin-bottom: 1rem;
                            font-size: 2rem;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 425px) {
        .about {
            padding: 0 1.5rem;

            .container {
                .contents {
                    .description {
                        padding: 1.2rem;

                        .details {
                            font-size: 1rem;
                        }
                    }
                }
            }
        }
    }
</style>

<div class="about" id="about">
    <div class="container">
        <div class="contents">
            <div class="profile">
                <div class="image">
                    <div class="avatar">
                        <img src="{avatar}" alt="Avatar">
                    </div>
                </div>
                <div class="details">
                    <h3>Ghex</h3>
                    <h4>Developer</h4>
                </div>
                <div class="links">
                    {#each socialLinks as socialLink}
                        <ScrollAnchor link={socialLink.url}><Icon icon={socialLink.icon}/></ScrollAnchor>
                    {/each}
                </div>
            </div>
            <div class="description">
                <h2 class="title">About Me</h2>
                <p class="details">{@html toHTML(description, { escapeHTML: false })}</p>
            </div>
        </div>
    </div>
</div>
