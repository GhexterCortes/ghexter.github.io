<script lang="ts">
    import { slide } from 'svelte/transition';
    import Icon from '@iconify/svelte';

    export let isOpen = true;
    export let title: string;
    export let animate = true;
</script>

<div class="accordion" class:open={isOpen}>
    <button class="accordion-button" on:click={() => isOpen = !isOpen}>
        <span class="accordion-text">{title}</span>
        <span class="chevron"><Icon icon="lucide:chevron-right" inline/></span>
    </button>
    {#if isOpen}
        <div class="accordion-content" in:slide={{ axis: 'y', duration: animate ? 200 : 0 }} out:slide={{ axis: 'y', duration: animate ? 200 : 0 }}>
            <slot/>
        </div>
    {/if}
</div>

<style lang="scss">
    @import '$lib/styles/variables.scss';

    .accordion {
        background: rgba($white, $alpha: 0.05);
        padding: 1.2rem;
        border-radius: 1rem;

        .accordion-button {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1.1rem;
            font-weight: 600;
            color: rgba($primary, $alpha: 0.9);
            border: none;
            background: transparent;
            cursor: pointer;

            .chevron {
                transition: transform 0.2s ease-in-out;
            }
        }

        .accordion-content {
            margin-top: 1rem;
        }

        &.open {
            .accordion-button {
                .chevron {
                    transform: rotate(90deg);
                }
            }
        }
    }
</style>