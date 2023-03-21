<script lang="ts">
    import Skill from '../../assets/components/Skill.svelte';
    import { skills } from '../../scripts/app';
</script>
<style lang="scss">
    @import "../../assets/css/variables.scss";

    .skills {
        @include Page;
        min-height: 50%;
        padding-top: 4rem;

        .skills-container {
            @include PageContainer;
            margin-bottom: 1rem;

            .skills-title {
                @include PageTitle2;
            }

            .skills-flex {
                display: flex;
                flex-wrap: wrap;

                :global(.skill) {
                    width: calc(50% - 10px);
                    margin: 5px;
                }
            }
        }
    }

    @media (max-width: 730px) {
        .skills .skills-container {
            margin: 0;
            width: 100%;
        }
    }

    @media (max-width: 580px) {
        .skills .skills-container .skills-flex {
            flex-wrap: nowrap;
            flex-direction: column;

            :global(.skill) {
                width: 100%;
                margin: 5px 0;
            }
        }
    }
</style>

<div class="skills" id="skills">
    <div class="skills-container">
        <h2 class="skills-title">Experience</h2>
        <div class="skills-flex">
            {#each skills as skill}
                <Skill {...skill}/>
            {/each}
        </div>
    </div>
</div>