<script lang="ts">
    import '../css/main.scss';
</script>

<style lang="scss">
    @import '../css/variables.scss';

    .topbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        background: rgba($dark, $alpha: 0.8);
        backdrop-filter: $blur;
        z-index: 20;

        .topbar-container {
            position: relative;
            display: flex;
            align-items: center;
            width: calc(100% - 4rem);
            max-width: 800px;
            margin: 0 2rem;
            height: 2.5rem;
            color: rgba($white, $alpha: 0.9);

            .topbar-title {
                flex-shrink: 0;
                margin-right: 3rem;
                margin-left: 0.2rem;
                padding-left: 1rem;
                font-weight: 700;
                font-family: 'Gloock';
                letter-spacing: 0.2rem;
                font-size: 1em;
            }

            .topbar-links {
                width: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;

                a {
                    display: block;
                    padding: 0.4rem 1rem;
                    margin: 0 0.2rem;
                    font-size: 0.8em;
                    line-height: 0.8rem;
                    text-decoration: none;
                    border-radius: 1rem;
                    color: currentColor;

                    &:hover,
                    &:focus {
                        background-color: rgba($white, $alpha: 0.1);
                    }

                    &:focus-visible {
                        outline: 2px solid rgba($white, $alpha: 0.8);
                    }
                }
            }
        }
    }

    :global(body) {
        padding-top: 2.5rem;
    }
</style>

<div class="topbar">
    <div class="topbar-container">
        <div class="topbar-title">
            <span>Ghex</span>
        </div>
        <div class="topbar-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="#github">GitHub</a>
            <a href="#discord">Discord</a>
        </div>
    </div>
</div>