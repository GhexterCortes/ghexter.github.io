<script lang="ts">
    // @ts-expect-error
    import GradientText from 'svelte-gradient-typography';
</script>

<span {...$$props}>
    <GradientText style="font: inherit; display: inline; letter-spacing: inherit; margin: inherit; padding: inherit;">
        <slot></slot>
    </GradientText>
</span>