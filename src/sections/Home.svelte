<script lang="ts">
    import Icon from '@iconify/svelte';
    import { github } from '../scripts/info';
    import Topbar from '../components/Topbar.svelte';
    import ScrollAnchor from '../components/ScrollAnchor.svelte';
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

                    .highlight {
                        transition: 0.3s;

                        &:hover {
                            color: e.$primary;
                        }
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
    }
</style>

<div class="home">
    <Topbar/>
    <div class="container">
        <div class="contents">
            <span class="greetings">
                Hi, There
            </span>
            <h1 class="title">
                I am <span class="highlight">Ghex</span>
            </h1>
            <p class="intro">I do simple high level software thingz like any other developer.</p>
            <div class="buttons">
                <ScrollAnchor link="#about">About</ScrollAnchor>
                <a href="{github}">View GitHub <Icon icon="bi:arrow-right-short" inline={true} /></a>
            </div>
        </div>
        <ScrollAnchor link="#about">
            <Icon icon="bi:arrow-down-short" inline={true}/>
        </ScrollAnchor>
    </div>
</div>
