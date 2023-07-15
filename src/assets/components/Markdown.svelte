<script lang="ts">
    import '../styles/markdown.scss';
    import { discordUserId, displayName } from '../scripts/profile';
    import discordMarkdown from '@discord-components/markdown';
    import { onMount } from 'svelte';

    const id = (Math.random() + 1).toString(36).substring(7);

    export let text: string;
    export let options: discordMarkdown.HTMLOptions = {
        escapeHTML: false,
        embed: true,
        cssModuleNames: {},
        discordCallback: {
            channel: ({ id: channelId }) => `<span class="discord-mention">#${channelId}</span>`,
            role: ({ id: roleId }) => `<span class="discord-mention">@${roleId}</span>`,
            user: ({ id: userId }) => `<span class="discord-mention">@${userId === discordUserId ? displayName : userId}</span>`,
            here: () => `<span class="discord-mention">@here</span>`,
            everyone: () => `<span class="discord-mention">@everyone</span>`,
        }
    };

    onMount(() => {
        const spoilers = document.querySelectorAll<HTMLDivElement>(`.${id} .d-spoiler`);
        spoilers.forEach(s => s.addEventListener('click', () => s.classList.add('active')));
    });
</script>

<span class="discord-markdown {id}">{@html discordMarkdown.toHTML(text, options)}</span>