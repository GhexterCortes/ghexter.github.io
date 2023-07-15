<script>
    import Header from '../assets/components/Header.svelte';
    import '../assets/styles/main.scss';
    import Icon from '@iconify/svelte';
</script>

<style lang="scss">
    :global(body) {
        display: flex;
        justify-content: center;
    }

    .content {
        max-width: 700px;


        .title {
            min-height: 30%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 500;
            letter-spacing: 3px;
            text-transform: uppercase;
            text-align: center;

            h1 {
                display: flex;
                align-items: center;
                color: #e99b43;
                text-shadow: 0px 0px 10px rgba(255, 166, 0, 0.247);
            }

            :global(.icon) {
                font-size: 1.5em;
            }
        }
    }
</style>

<div class="content">
    <div class="title">
        <h1><Icon icon="fluent-emoji:cat-face" class="icon"/>++</h1>
    </div>

    <Header/>
</div>