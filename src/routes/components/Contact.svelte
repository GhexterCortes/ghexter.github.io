<script lang="ts">
    import { discordProfileUrl, discordTag, email } from '../../scripts/app';
    import Icon from "@iconify/svelte";
import { get } from 'svelte/store';

    const hearts = [
        'fluent-emoji:blue-heart',
        'fluent-emoji:brown-heart',
        'fluent-emoji:green-heart',
        'fluent-emoji:growing-heart',
        'fluent-emoji:heart-on-fire',
        'fluent-emoji:anatomical-heart',
        'fluent-emoji:heart-with-arrow',
        'fluent-emoji:heart-with-ribbon',
        'fluent-emoji:mending-heart',
        'fluent-emoji:orange-heart',
        'fluent-emoji:purple-heart',
        'fluent-emoji:red-heart',
        'fluent-emoji:sparkling-heart',
        'fluent-emoji:two-hearts',
        'fluent-emoji:white-heart',
        'fluent-emoji:yellow-heart'
    ];

    let icon: string = getRandomIcon();

    function getRandomIcon(): string {
        return hearts[Math.floor(Math.random() * hearts.length)];
    }
</script>

<style lang="scss">
    @import "../../assets/css/variables.scss";

    .contact {
        @include Page;
        min-height: unset;
        margin-top: 5rem;
        background: rgba($color: #000000, $alpha: 0.1);
        padding-top: 2rem;

        .contact-container {
            @include PageContainer;

            .contact-title {
                @include PageTitle2;
                margin-bottom: 1rem;
                font-size: 1.4rem;
            }

            .contacts {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;

                .contacts-contact {
                    display: flex;
                    align-items: center;
                    margin-bottom: 1rem;
                    font-size: 0.85rem;
                    color: $dim;
                    padding: 0.5rem 1rem;
                    border-radius: 2rem;
                    background: transparent;

                    .contact-icon {
                        margin-right: 0.4rem;
                        font-size: 1.2rem;
                        display: flex;
                        align-items: center;
                    }

                    a {
                        color: currentColor;
                        text-decoration: none;
                        font-weight: 500;
                        outline: none;
                    }

                    &:hover,
                    &:focus-within {
                        background: $dark;
                    }
                }
            }

            .something-common {
                margin-top: 4rem;
                margin-bottom: 2rem;
                color: $dim;
                display: flex;
                align-items: center;
                justify-content: center;
                user-select: none;
                text-decoration: none;

                :global(.iconify) {
                    margin: 0 0.4rem;
                    height: 1.2rem;
                    width: 1.2rem;
                    transition: 0.2s;
                }

                &:hover {
                    :global(.iconify) {
                        transform: scale(1.3) rotate(5deg);
                    }
                }
            }
        }
    }
</style>

<div class="contact" id="contact">
    <div class="contact-container">
        <h2 class="contact-title">Contact Me</h2>
        <div class="contacts">
            <div class="contacts-contact">
                <span class="contact-icon">
                    <Icon icon="material-symbols:mail-rounded" />
                </span>
                <a class="contact-value" href="mailto:{email}">{email}</a>
            </div>
            <div class="contacts-contact">
                <span class="contact-icon">
                    <Icon icon="fa-brands:discord" />
                </span>
                <a class="contact-value" href={discordProfileUrl}>{discordTag}</a>
            </div>
        </div>
        <a class="something-common" href="#void" on:click|preventDefault={() => icon = getRandomIcon()}>
            Made with <Icon icon={icon} /> by Ghex
        </a>
    </div>
</div>