<script lang="ts">
    import { PROFILE_DATA } from '$lib/scripts/profile';
    import Accordion from '$lib/components/Accordion.svelte';
    import ProfileHeader from '$lib/components/ProfileHeader.svelte';
    // @ts-expect-error
    import About from '$lib/markdowns/About.svx';
    // @ts-expect-error
    import SupportPage from '$lib/markdowns/SupportPage.svx';
    import Contacts from '$lib/components/Contacts.svelte';
    import Repositories from '$lib/components/Repositories.svelte';

    const data = PROFILE_DATA;
</script>

<div class="main-container">
    <main class="main-content">
        <ProfileHeader {data}/>
        <Repositories data={data.repositories ?? []}/>
        <div class="accordions">
            <Accordion title="About" isOpen={true}>
                <About/>
            </Accordion>
            <Accordion title="Support Me" isOpen={false}>
                <SupportPage/>
            </Accordion>
        </div>
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

            .accordions {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
        }
    }
</style>