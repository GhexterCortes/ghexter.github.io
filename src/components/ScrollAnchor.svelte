<script lang="ts">
    export let link = '#';

    function scrollToTarget(e: MouseEvent) {
        if (!link.startsWith('#')) return;

        e.preventDefault();

        if (link == '#') {
            window.scrollTo({ behavior: 'smooth', left: 0, top: 0 });
            return;
        }

        const targetElement = document.querySelector(link);
        if (!targetElement) return;

        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    }
</script>

<a href={link} on:click={scrollToTarget}>
    <slot>
        Go to {link}
    </slot>
</a>
