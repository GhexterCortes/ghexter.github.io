<script lang="ts">
    import { projects } from '../scripts/info';
    import Project from "../components/Project.svelte";
</script>

<style lang="scss">
    @use '../assets/css/e.scss';

    .projects {
        display: flex;
        justify-content: center;
        padding: 0 2rem;
        background: rgba($color: e.$theme, $alpha: 0.9);

        .container {
            width: 100%;
            max-width: 900px;
            margin-top: 5rem;
            margin-bottom: 2rem;

            .title {
                color: e.$light;
                font-family: 'Abyssinica SIL';
                font-size: 3rem;
                margin-bottom: 3rem;
                text-align: center;
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    margin-top: 5px;
                    transform: translateX(-50%);
                    display: block;
                    width: 2em;
                    height: 4px;
                    background: e.$primary;
                    border-radius: 10px;
                }
            }

            .project-grid {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;

                > :global(.project) {
                    margin: 10px;
                }
            }

            @media (max-width: 725px) {
                .project-grid {
                    > :global(.project) {
                        width: 100%;
                        max-width: 400px;
                        margin: 20px;
                    }
                }

                @media (max-width: 520px) {
                    .project-grid {
                        > :global(.project) {
                            margin-left: 0;
                            margin-right: 0;
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 425px) {
        .projects {
            padding: 0 1.5rem;
        }
    }
</style>

<div class="projects" id="projects">
    <div class="container">
        <h1 class="title">Projects</h1>
        <div class="project-grid">
            {#each projects as project}
                <Project name={project.name} description={project.description} thumbnail={project.thumbnail} links={project.links}/>
            {/each}
        </div>
    </div>
</div>
