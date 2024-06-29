<script lang="ts">
    import { slide } from 'svelte/transition';
    import Icon from '@iconify/svelte';

    export let isOpen = true;
    export let title: string;
</script>

<div class="accordion" class:open={isOpen}>
    <button class="accordion-button" on:click={() => isOpen = !isOpen}>
        <span class="accordion-text">{title}</span>
        <span class="chevron">
            {#if isOpen}
                <Icon icon="lucide:chevron-down" inline/>
            {:else}
                <Icon icon="lucide:chevron-right" inline/>
            {/if}
        </span>
    </button>
    {#if isOpen}
        <div class="accordion-content" in:slide={{ axis: 'y', duration: 200 }} out:slide={{ axis: 'y', duration: 200 }}>
            <slot/>
        </div>
    {/if}
</div>

<style lang="scss">
    @import '$lib/styles/variables.scss';

    .accordion {
        background: rgba($white, $alpha: 0.05);
        padding: 1rem;
        border-radius: 1rem;

        .accordion-button {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1.1rem;
            font-weight: 600;
            color: rgba($white, $alpha: 0.9);
            border: none;
            background: transparent;
            cursor: pointer;
        }

        .accordion-content {
            margin-top: 1rem;
        }
    }
</style>