<script lang="ts">
    import { description, discordUsername, displayName, displayPictureURL, pronouns } from "../scripts/profile";
    import Markdown from './Markdown.svelte';
</script>

<style lang="scss">
    @import '../styles/variables.scss';

    :root {
        --dp-size: 145px;
    }

    .header-container {
        position: relative;
        margin: 10px;
        border-radius: 10px;
        background: rgba($darkColor, $alpha: 0.5);
        box-shadow: rgba($color: #000, $alpha: 0.5) 0 0 20px;

        .header-profile {
            background-color: rgba($color: #000, $alpha: 0.3);
            padding: 1rem;
            display: flex;
            align-items: center;

            .header-profile-image {
                height: var(--dp-size);
                width: var(--dp-size);
                overflow: hidden;
                border-radius: 50%;
                flex-shrink: 0;
                margin-left: 1rem;
                margin-right: 2rem;

                img {
                    height: 100%;
                    width: 100%;
                }
            }

            .header-profile-details {
                padding: 1rem 2rem;
                width: calc(100% - var(--dp-size) - 3rem);
                display: flex;
                flex-direction: column;
                justify-content: center;

                .header-profile-details-name {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 15px;

                    * {
                        width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .header-profile-displayname {
                        font-size: 1.5rem;
                        color: rgba($secondaryColor, $alpha: 0.9);
                    }

                    .header-profile-username {
                        font-size: 0.9rem;
                        color: rgba($lightColor, $alpha: 0.5);
                    }
                }
            }

            .header-profile-info {
                font-size: 0.8rem;

                .header-profile-pronouns {
                    display: flex;
                    color: rgba($lightColor, $alpha: 0.8);
                    white-space: nowrap;

                    .slash {
                        color: rgba($lightColor, $alpha: 0.5);
                        margin: 0 0.1rem;
                    }
                }
            }
        }

        .header-profile-description {
            padding: 1rem;
            font-size: 0.85rem;
            color: rgba($lightColor, $alpha: 0.8);

            .header-profile-description-title {
                margin-bottom: 1rem;
                font-size: 0.8rem;
                color: $lightColor;
            }
        }
    }

    @media (max-width: 435px) {
        .header-container .header-profile {
            .header-profile-details {
                .header-profile-details-name {
                    margin-bottom: 10px;
                }
            }

            .header-profile-info {
                .header-profile-pronouns {
                    .name {
                        display: none;
                    }
                }
            }
        }
    }

    @media (max-width: 410px) {
        :root {
            --dp-size: 100px;
        }

        .header-container .header-profile .header-profile-details .header-profile-details-name {
            .header-profile-displayname {
                font-size: 1.2rem;
            }

            .header-profile-username {
                font-size: 0.8rem;
            }
        }
    }

    @media (max-width: 345px) {
        .header-container .header-profile {
            .header-profile-image {
                margin-right: 0.5rem;
            }

            .header-profile-details {
                padding-left: 0.5rem;
                width: calc(100% - var(--dp-size) - 1rem);
            }
        }
    }
</style>

<div class="header-container">
    <div class="header-profile">
        <div class="header-profile-details">
            <div class="header-profile-details-name">
                <h3 class="header-profile-displayname">
                    {displayName}
                </h3>
                <p class="header-profile-username">
                    @{discordUsername}
                </p>
            </div>
            <div class="header-profile-info">
                <div class="header-profile-pronouns">
                    <span class="name">Pronouns •&nbsp;</span>
                    {#each pronouns as pronoun, index}
                        <span class="pronoun">{pronoun}</span>{#if pronouns.length !== (index + 1)}<span class="slash">/</span>{/if}
                    {/each}
                </div>
            </div>
        </div>
        <div class="header-profile-image">
            <img src={displayPictureURL} alt="">
        </div>
    </div>
    <div class="header-profile-description">
        <h4 class="header-profile-description-title">ABOUT ME</h4>
        <Markdown text={description}/>
    </div>
</div>