<script lang="ts">
    import { PROFILE_DATA } from '$lib/scripts/profile';
    import Accordion from '../../lib/components/Accordion.svelte';
    import ProfileHeader from '../../lib/components/ProfileHeader.svelte';
    // @ts-expect-error
    import About from '$lib/markdowns/About.svx';
  import Contacts from '../../lib/components/Contacts.svelte';

    const data = PROFILE_DATA;
</script>

<div class="main-container">
    <main class="main-content">
        <ProfileHeader {data}/>
        <Accordion title="About" isOpen={true}>
            <About/>
        </Accordion>
        <Contacts data={data.links ?? []}/>
    </main>
</div>

<style lang="scss">
    @import '$lib/styles/variables.scss';

    .main-container {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        padding: 1rem 0;

        .main-content {
            width: 100%;
            min-height: 100%;
            max-width: 700px;
            padding: 0 1rem;
        }
    }
</style>