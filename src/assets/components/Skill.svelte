<script lang="ts">
    import Icon from '@iconify/svelte';
    import isMobile from 'is-mobile';

    export let icon: string|null = null;
    export let name: string;
    export let width: number;
    export let background: string;
    export let color: string;
    export let percentColor: string|null = null;
</script>

<style lang="scss">
    .skill {
        position: relative;
        display: flex;
        font-size: 1rem;
        height: 2rem;
        width: 100%;
        overflow: hidden;
        border-radius: 5px;

        .skill-label {
            font-size: 1em;
            height: 2rem;
            width: 100%;
            display: flex;
            align-items: center;
            position: absolute;
            top: 0;
            left: 0;
            font-weight: 500;
            padding: 0 0.5em;

            :global(.icon) {
                flex-shrink: 0;
                font-size: 1.3em;
                margin-right: 0.2em;
            }

            .skill-name {
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100%;
            }
        }

        .skill-progress {
            border-radius: 5px;
        }

        .skill-background {
            opacity: 0.2;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        .skill-percent {
            position: absolute;
            top: 50%;
            right: 0;
            font-size: 0.8rem;
            font-weight: bold;
            margin-right: 0.5rem;
            transform: translateY(-50%);
            display: flex;
            align-items: center;
            justify-content: center;
            text-shadow: 0px 0px 5px #000000;
        }

        &.lol {
            color: #fff;

            .skill-progress,
            .skill-background {
                animation: rainbowBackground infinite 10s;
            }

            .skill-progress {
                animation: adjustWidth infinite 5s, rainbowBackground infinite 5s;
            }

            .skill-percent {
                font-size: 1.8rem;
            }
        }
    }

    @keyframes rainbowBackground {
        0% { background: #ff6e51; }
        10% { background: #ede029; }
        20% { background: #a8fa44; }
        30% { background: #3cf345; }
        40% { background: #1ed9e3; }
        50% { background: #588ff4; }
        60% { background: #4e7aff; }
        70% { background: #8b14cf; }
        80% { background: #ed20d8; }
        90% { background: #e14990; }
        100% { background: #ff6e51; }
    }

    @keyframes adjustWidth {
        0% { width: 20%; }
        10% { width: 60%; }
        20% { width: 70%; }
        30% { width: 40%; }
        40% { width: 0%; }
        50% { width: 30%; }
        60% { width: 100%; }
        70% { width: 20%; }
        80% { width: 70%; }
        90% { width: 66%; }
        100% { width: 20%; }
    }
</style>

<div class="skill" {...$$props} style:color class:lol={name == "LOLCODE"} style={isMobile() && name === "LOLCODE" ? 'display: none' : ''}>
    <div class="skill-label">
        {#if icon}<Icon icon={icon} class="icon"/>{/if}
        {#if name}<span class="skill-name">{name}</span>{/if}
    </div>
    <span class="skill-progress" style="{name !== "LOLCODE" ? `width: ${width}%; background: ${background};` : ''}"></span>
    <span class="skill-background" style="width: 100%; {name !== "LOLCODE" ? `background: ${background};` : ''}"></span>
    <span class="skill-percent" style="color: {percentColor || '#dbdbdb'}">
        {#if name !== "LOLCODE"}
            {width}%
        {:else}
            <a href="https://www.youtube.com/watch?v=YRvOePz2OqQ" target="_blank" rel="noreferrer">
                <Icon icon="fluent-emoji:kissing-cat"/>
            </a>
        {/if}
    </span>
</div>