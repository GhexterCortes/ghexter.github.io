<script lang="ts">
    import Icon from '@iconify/svelte';
    import { github } from '../scripts/info';
    import ScrollAnchor from '../components/ScrollAnchor.svelte';
    import GradientText from 'svelte-gradient-typography';
</script>

<style lang="scss">
    @use '../assets/css/e.scss';

    .home {
        height: 100%;
        min-height: 500px;
        display: block;
        position: relative;
        background: e.$theme;
        color: e.$light;

        .container {
            position: relative;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 60px;
            padding-bottom: 1rem;

            .contents {
                width: 100%;
                padding: 5rem 2rem;
                max-width: 900px;
                letter-spacing: 2px;
                font-family: 'Abyssinica SIL';

                .greetings {
                    font-size: 1.1rem;
                    color: rgba($color: e.$secondary, $alpha: 0.9);
                    font-weight: 700;
                }

                .title {
                    font-size: 5rem;
                    font-weight: 700;
                    line-height: 5rem;
                    font-family: 'Abyssinica SIL';

                    :global(p) {
                        display: inline;
                        font-family: inherit;
                        font-size: inherit;
                        font-weight: inherit;
                        line-height: inherit;
                        letter-spacing: inherit;
                        padding: 0;
                        margin: 0;
                    }
                }

                .intro {
                    margin-top: 0.5rem;
                    font-family: 'Open Sans';
                    color: rgba($color: e.$light, $alpha: 0.8);
                    font-size: 0.97rem;
                    max-width: 55%;
                }

                .buttons {
                    display: flex;
                    margin-top: 2rem;

                    :global(a) {
                        padding: 0.5rem 1rem;
                        color: e.$theme;
                        border: 2px solid e.$primary;
                        background: e.$primary;
                        text-decoration: none;
                        font-weight: 700;
                        margin-right: 1rem;

                        &:hover,
                        &:focus,
                        &:last-child {
                            background: e.$theme;
                            color: e.$primary;
                        }

                        &:last-child {
                            &:hover,
                            &:focus {
                                background: e.$primary;
                                color: e.$theme;
                            }
                        }

                        &:focus-visible {
                            border-color: e.$secondary;
                            outline: none;
                        }
                    }
                }
            }

            > :global(a) {
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                color: e.$light;
                justify-content: center;
                align-items: center;
                font-size: 2rem;
                transition: 0.3s;
                margin-bottom: 1rem;
                height: 50px;
                width: 50px;

                &:hover,
                &:focus {
                    margin-bottom: 0.5rem;
                }
            }
        }

        @media (max-width: 365px) {
            .container {
                padding-top: 100px;

                .contents {
                    .buttons {
                        flex-direction: column;

                        > :global(a) {
                            margin-right: 0;
                            margin-bottom: 10px;
                        }
                    }
                }

                > :global(a) {
                    display: none;
                }
            }
        }
    }
</style>

<div class="home">
    <div class="container">
        <div class="contents">
            <span class="greetings">
                Hi, There
            </span>
            <h1 class="title">
                I am <GradientText size="1em" gradient="linear-gradient(317deg, #ffa745 15%, #fe869f 50%, #ef7ac8 75%, #a083ed 90%, #43aeff 110%)">Ghex</GradientText>
            </h1>
            <p class="intro">I do simple high level software thingz like any other developer.</p>
            <div class="buttons">
                <ScrollAnchor link="#about">About</ScrollAnchor>
                <ScrollAnchor link="{github}">View GitHub <Icon icon="bi:arrow-right-short" inline={true} /></ScrollAnchor>
            </div>
        </div>
        <ScrollAnchor link="#about">
            <Icon icon="bi:arrow-down-short" inline={true}/>
        </ScrollAnchor>
    </div>
</div>
