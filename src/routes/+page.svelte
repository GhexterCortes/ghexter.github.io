<script lang="ts">
    import Header from '../assets/components/Header.svelte';
    import '../assets/styles/main.scss';
    import Icon from '@iconify/svelte';
    import type { IconifyIcon } from '@iconify/types';
    import catFace from '@iconify/icons-fluent-emoji/cat-face';
    import catFaceLaugh from '@iconify/icons-fluent-emoji/cat-with-tears-of-joy';
    import catFaceSmirk from '@iconify/icons-fluent-emoji/cat-with-wry-smile';
    import LinkButton from '../assets/components/LinkButton.svelte';
    import { discordProfileURL, gitHubProfileURL, instagramProfileURL, threadsProfileURL } from '../assets/scripts/profile';
    import { onMount } from 'svelte';

    let currentIndex = 0;
    let title: HTMLAnchorElement;

    function getCatIcon(): IconifyIcon {
        const icons = [catFace, catFaceLaugh, catFaceSmirk];

        currentIndex++;
        if (currentIndex > (icons.length - 1)) currentIndex = 0;

        return icons[currentIndex];
    }

    let catIcon = getCatIcon();

    onMount(() => {
        setTimeout(() => title.classList.remove('active'), 1000)
    });
</script>

<style lang="scss">
    @import '../assets/styles/variables.scss';

    :global(body) {
        display: flex;
        justify-content: center;
    }

    .content {
        max-width: 700px;

        .title {
            min-height: 30%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 500;
            letter-spacing: 3px;
            text-transform: uppercase;
            text-align: center;

            a {
                display: flex;
                align-items: center;
                font-size: 2rem;
                color: #e99b43;
                text-decoration: none;
                font-weight: 700;
                text-shadow: 0px 0px 10px rgba(255, 166, 0, 0.247);

                :global(.icon) {
                    font-size: 1.5em;
                    z-index: 1;
                    transition: 0.2s;
                }

                .plvsplus {
                    transition: 0.2s;
                }

                &.active {
                    :global(.icon) {
                        translate: 50%;
                    }

                    .plvsplus {
                        translate: -50%;
                        opacity: 0;
                    }
                }
            }
        }

        .hr {
            width: 100%;
            border: none;
            display: block;
            text-align: center;
            margin: 2rem 0;

            &::after {
                content: '';
                display: inline-block;
                width: 50px;
                border-top: 1px solid rgba($lightColor, $alpha: 0.3);
            }
        }

        .links {
            text-align: center;
            margin-bottom: 10px;
        }
    }
</style>

<svelte:head>
    <title>Cat++ (Ghex)</title>
</svelte:head>

<div class="content">
    <div class="title">
        <a class="active" bind:this={title} title="Tap to change icon" href="javascript:void(0)" on:click={() => catIcon = getCatIcon()}>
            <Icon icon={catIcon} class="icon"/><span class="plvsplus">++</span>
        </a>
    </div>

    <Header/>

    <div class="hr"></div>
    <div class="links">
        <LinkButton href={discordProfileURL} target="_blank">
            <Icon icon="fa6-brands:discord"/>
        </LinkButton>
        <LinkButton href={gitHubProfileURL} target="_blank">
            <Icon icon="fa6-brands:github"/>
        </LinkButton>
        <LinkButton href={instagramProfileURL} target="_blank">
            <Icon icon="fa6-brands:instagram"/>
        </LinkButton>
        <LinkButton href={threadsProfileURL} target="_blank">
            <Icon icon="simple-icons:threads"/>
        </LinkButton>
    </div>
</div>