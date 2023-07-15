<style lang="scss">
    @import '../styles/variables.scss';

    a {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: $primaryColor;
        background-color: $lightColor;
        height: 3rem;
        width: 3rem;
        font-size: 1.2rem;
        border-radius: 50%;
        margin: 0 5px;

        &:focus {
            outline: solid $primaryColor 2px;
        }
    }
</style>

<a {...$$props}><slot/></a>