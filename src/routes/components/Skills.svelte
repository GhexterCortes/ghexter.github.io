<script lang="ts">
    import Gradient from "../../assets/components/Gradient.svelte";
import Skill from '../../assets/components/Skill.svelte';
import { skills } from '../../scripts/app';
</script>
<style lang="scss">
    @import "../../assets/css/variables.scss";

    .skills {
        @include Page;
        min-height: 50%;

        .skills-container {
            @include PageContainer;
            padding-top: 2rem;
            margin-bottom: 1rem;

            .skills-title {
                @include PageTitle;
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