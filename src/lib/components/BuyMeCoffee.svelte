<script lang="ts">
    import Icon from '@iconify/svelte';

    let hovering = false;
</script>

<button
    class="trigger"
    on:focus={() => hovering = true}
    on:blur={() => hovering = false}
    on:mouseover={() => hovering = true}
    on:mouseleave={() => hovering = false}
    on:click={() => window.open('https://ko-fi.com/catplvsplus', '_blank')}
>
    <Icon icon="cib:ko-fi" inline font-size="1.4rem"/>
    <span>Buy me coffee</span>
</button>

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

        &:hover {
            background: linear-gradient(90deg, $primary, $secondary 100%, $tertiary);
            color: $black;
            animation: moveGradient 5s both normal;
            box-shadow: 0 0 0 0.2rem $primary, 0 0 0 0.4rem rgba($secondary, $alpha: 0.5), 0 0 0 0.6rem rgba($tertiary, $alpha: 0.1);
        }
    }

    @keyframes moveGradient {
        1% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>