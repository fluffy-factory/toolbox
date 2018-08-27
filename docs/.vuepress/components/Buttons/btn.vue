<template>
    <div>
        <h3>Link tag</h3>
        <a href="#" class="btn-primary">button primary</a>
        <a href="#" class="btn-secondary">button secondary</a>
        <a href="#" class="btn-secondary disabled">button secondary</a>

        <br><br>

        <h3>Button & input tags</h3>
        <button class="btn-primary" type="button">button primary</button>
        <input class="btn-primary" type="button" value="input button primary">
        <button class="btn-primary" disabled type="button">button primary</button>

    </div>
</template>

<style lang="scss" scoped>
    @import 'src/scss/utils/easing';
    @import 'src/scss/utils/variables';
    @import 'src/scss/utils/reboot';
    @import 'src/scss/utils/mixins';
    @import 'src/scss/components/buttons';
    @import 'src/scss/layout/buttons-wrapper';

    @media screen and (max-width: $screen-s) {
        .btn-primary,
        .btn-secondary,
        .btn-animation {
            margin: 10px 0;
        }
    }
</style>