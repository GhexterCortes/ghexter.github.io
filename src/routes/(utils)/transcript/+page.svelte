<script lang="ts">
  import { goto } from '$app/navigation';
    import { redirect } from '@sveltejs/kit';
    import { onMount } from 'svelte';

    onMount(() => goto(`/render?key=${new URLSearchParams(window.location.search).get('key')}`))
</script>