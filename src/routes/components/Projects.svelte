<script lang="ts">
import Project from '../../assets/components/Project.svelte';
import { projects } from '../../scripts/app';

</script>

<style lang="scss">
    @import "../../assets/css/variables.scss";

    .projects {
        @include Page;
        min-height: 50%;
        padding-top: 4rem;
        padding-bottom: 2rem;

        .projects-container {
            @include PageContainer;
            max-width: 1366px;

            .projects-title {
                @include PageTitle;
                text-align: center;
                font-family: 'inter';
                font-size: 1.5rem;
                letter-spacing: 0.5rem;
            }

            .projects-content {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }
        }
    }

    @media (max-width: 775px) {
        .projects .projects-container .projects-content {
            :global(.project) {
                height: 300px;
                width: 300px;
            }
        }
    }

    @media (max-width: 730px) {
        .projects .projects-container {
            margin: 0;
            width: 100%;

            .projects-content {
                :global(.project) {
                    height: 300px;
                    width: 500px;
                    margin: 0;
                    margin-bottom: 10px;
                }
            }
        }
    }

    @media (max-width: 400px) {
        .projects .projects-container .projects-content {
            :global(.project) {
                width: 100%;
            }
        }
    }
</style>

<div class="projects" id="projects">
    <div class="projects-container">
        <h2 class="projects-title">PROJECTS</h2>
        <div class="projects-content">
            {#each projects as project}
                <Project {...project}/>
            {/each}
        </div>
    </div>
</div>