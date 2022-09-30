<script lang="ts">
    import '../assets/css/footer.scss';
    import Icon from '@iconify/svelte';
    import { github } from '../scripts/info';

    let showEmoji = false;
</script>

<div class="footer">
    <div class="credits">
        Made with 
        <span class="icon" on:mouseenter={() => showEmoji = true} on:mouseleave={() => showEmoji = false}>
        {#if showEmoji}
        <Icon icon="fluent-emoji:red-heart" inline={true} />
        {:else}
        <Icon icon="fluent-emoji-high-contrast:black-heart" inline={true} />
        {/if}
        by <a href="{github}">Ghex
        </span>
    </div>
</div>
