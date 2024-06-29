<script lang="ts">
    import type { ProfileData } from '../scripts/profile';
    import Icon from '@iconify/svelte';

    export let data: Exclude<ProfileData['links'], undefined>;
</script>

<div class="contacts">
    {#each data as link}
        <a href="{link.url}" target="_blank" rel="noreferrer" title="{link.name}">
            <Icon icon={link.icon ?? 'tabler:external-link'} inline/>
        </a>
    {/each}
</div>

<style lang="scss">
    @import '$lib/styles/variables.scss';

    .contacts {
        display: flex;
        gap: 1rem;
        padding: 3rem 0;
        align-items: center;
        justify-content: center;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3rem;
            height: 3rem;
            font-size: 1.5rem;
            border-radius: 50%;
            background: rgba($white, $alpha: 0.05);
            transition: all 0.2s ease-in-out;
            color: rgba($white, $alpha: 0.9);
            cursor: pointer;

            &:hover {
                background: rgba($white, $alpha: 0.1);
            }
        }
    }
</style>