<script lang="ts">
    import Icon from '@iconify/svelte';
    import { fade } from 'svelte/transition';

    let visible = false;
</script>

<svelte:window on:keyup={e => e.key === 'Escape' && (visible = false)}/>

<button class="trigger" on:click={() => visible = !visible}>
    <Icon icon="cib:ko-fi" inline font-size="1.4rem"/>
    <span>Buy me coffee</span>
</button>

{#if visible}
    <style>
        html {
            overflow: hidden;
        }
    </style>
    <div class="modal" in:fade={{ duration: 200 }}>
        <div class="container">
            <div class="backdrop" on:click={() => visible = false}></div>
            <button class="close" on:click={() => visible = false}>
                <Icon icon="ic:baseline-close" inline font-size="1.4rem"/>
            </button>
            <iframe id='kofiframe' src='https://ko-fi.com/catplvsplus/?hidefeed=true&widget=true&embed=true&preview=true' height='712' title='catplvsplus'></iframe>
        </div>
    </div>
{/if}

<style lang="scss">
    @import '$lib/styles/variables.scss';

    .trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3rem;
        padding: 0 1rem;
        font-size: 1.2rem;
        font-weight: 500;
        border-radius: 0.5rem;
        background: rgba($white, $alpha: 0.05);
        transition: 0.2s;
        cursor: pointer;
        border: none;
        outline: none;
        color: $white;
        gap: 0.5rem;

        &:hover,
        &:focus {
            background: linear-gradient(90deg, $primary, $secondary 100%, $tertiary);
            color: $black;
            box-shadow: 0 0 0 0.2rem $primary, 0 0 0 0.4rem rgba($secondary, $alpha: 0.5), 0 0 0 0.6rem rgba($tertiary, $alpha: 0.1);
        }
    }

    .modal {
        overflow: auto;
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;

        .container {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            padding: 0.5rem;

            .backdrop {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba($black, $alpha: 0.5);
                backdrop-filter: blur(5px);
                z-index: 1;
            }

            #kofiframe {
                width: 100%;
                height: 100%;
                max-width: 400px;
                max-height: 712px;
                border-radius: 1rem;
                border: 1px solid rgba($primary, $alpha: 0.2);
                position: relative;
                z-index: 2;
            }

            .close {
                position: absolute;
                top: 0;
                right: 0;
                margin: 1rem;
                cursor: pointer;
                z-index: 3;
                width: 3rem;
                height: 3rem;
                font-size: 2rem;
                color: $black;
                background: $white;
                border: none;
                outline: none;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
            }
        }
    }
</style>