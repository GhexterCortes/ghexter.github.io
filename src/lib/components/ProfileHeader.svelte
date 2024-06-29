<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import type { ProfileData } from '../scripts/profile';
    import { FastAverageColor, type FastAverageColorResult } from 'fast-average-color';
    export let data: ProfileData;

    const fac = new FastAverageColor();

    let avarageAvatarColor: FastAverageColorResult|null = null;
    let avarageBannerColor: FastAverageColorResult|null = null;


    onMount(async () => {
        avarageAvatarColor = await fac.getColorAsync(data.avatar, {
            ignoredColor: [
                [255, 255, 255],
                [0, 0, 0]
            ]
        });

        avarageBannerColor = data.banner
            ? await fac.getColorAsync(data.banner, {
                    ignoredColor: [
                        [255, 255, 255],
                        [0, 0, 0]
                    ]
                })
            : avarageAvatarColor;
    });

    onDestroy(() => fac.destroy())
</script>

<div class="profile-header">
    <div class="cover" style={`--accent: ${avarageBannerColor?.hex};` + (data.banner ? `background-image: url(${data.banner});` : '')}></div>
    <div class="info">
        <div class="avatar" style={`--accent: ${avarageAvatarColor?.hex};`}>
            <img src={data.avatar} alt={data.name}>
        </div>
        <div class="intro">
            <h1 class="name">{data.name}</h1>
            <p class="username">@{data.username}</p>
            {#if data.pronouns}
                <span class="pronouns">
                    {#each data.pronouns as pronoun, i}
                        <span class="pronoun">{pronoun}</span>
                        {#if i < data.pronouns.length - 1}<span class="separator">•</span>{/if}
                    {/each}
                </span>
            {/if}
        </div>
    </div>
</div>

<style lang="scss">
    @import '$lib/styles/variables.scss';

    .profile-header {
        position: relative;

        .cover {
            width: 100%;
            height: 200px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 1rem;
            background-color: var(--accent);
        }

        .info {
            width: 100%;
            height: 100%;
            display: flex;
            border-radius: 1rem;
            padding: 0 2rem;
            margin-bottom: 2rem;

            .avatar {
                width: 150px;
                height: 150px;
                border-radius: 50%;
                overflow: hidden;
                margin-top: -40px;
                flex-shrink: 0;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .intro {
                margin-left: 1rem;
                margin-top: 0.5rem;

                .name {
                    font-size: 2rem;
                    font-weight: 600;
                }

                .username {
                    font-size: 0.98rem;
                    font-weight: 400;
                    color: rgba($primary, $alpha: 0.6);
                }

                .pronouns {
                    font-size: 0.9rem;
                    margin-top: 0.2rem;
                    color: rgba($white, $alpha: 0.4);
                    display: flex;
                    gap: 0.15rem;

                    .separator {
                        color: rgba($white, $alpha: 0.3);
                        font-size: 0.9em;
                    }
                }
            }
        }

        @media screen and (max-width: 500px) {
            .info {
                padding: 0 1.5rem;

                .avatar {
                    width: 120px;
                    height: 120px;
                    margin-top: -30px;
                }

                .intro {
                    .name {
                        font-size: 1.7rem;
                    }

                    .username {
                        font-size: 0.9rem;
                    }
                }
            }
        }

        @media screen and (max-width: 400px) {
            .cover {
                height: 150px;
            }

            .info {
                padding: 0;
                flex-direction: column;
                align-items: center;

                .avatar {
                    margin-top: -70px;
                }

                .intro {
                    width: 100%;
                    text-align: center;

                    .name {
                        font-size: 1.4rem;
                    }
                }

                .pronouns {
                    justify-content: center;
                }
            }
        }
    }
</style>