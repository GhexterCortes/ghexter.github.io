<script lang="ts">
    import type { ProfileData } from '../scripts/profile';
    import Icon from '@iconify/svelte';

    export let data: Exclude<ProfileData['links'], undefined>;
</script>

<div class="contacts">
    {#each data as link}
        <a href="{link.url}" target="_blank" rel="noreferrer" title="{link.name}">
            <Icon icon={link.icon} inline/>
        </a>
    {/each}
</div>

<style lang="scss">

</style>