<script lang="ts">
  import Icon from '@iconify/svelte';
    import type { RepositoryData } from '../scripts/helpers';

    export let data: RepositoryData;
</script>

<div class="repository">
    <div class="info">
        <h3 class="name">
            <a href={data.html_url} target="_blank" rel="noopener noreferrer">
                {data.name}
            </a>
        </h3>
        <div class="description">{data.description}</div>
    </div>
    <div class="stats">
        <div class="lang">{data.language}</div>
        <div class="numbers">
            <span class="stars">
                <Icon icon="ph:star-fill" inline/> {data.stargazers_count}
            </span>
            <span class="forks">
                <Icon icon="ph:repo-forked-fill" inline/><Icon icon="mingcute:balance-fill" inline/> {data.license.spdx_id}
            </span>
        </div>
    </div>
</div>

<style lang="scss">
    @import '$lib/styles/variables.scss';

    .repository {
        display: flex;
        height: 100%;
        width: 100%;
        background: rgba($white, $alpha: 0.05);
        border-radius: 1rem;
        padding: 1rem;
        text-decoration: none;
        flex-direction: column;

        .info {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            margin-bottom: 1rem;

            .name {
                margin: 0;
                font-size: 1.2rem;
                font-weight: 600;

                a {
                    color: $primary;
                    text-decoration: none;
                }
            }

            .description {
                margin-top: 0.5rem;
                font-size: 0.9rem;
                color: rgba($white, $alpha: 0.5);
            }
        }

        .stats {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            font-size: 0.8rem;
            color: rgba($white, $alpha: 0.5);

            .numbers {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
        }
    }
</style>