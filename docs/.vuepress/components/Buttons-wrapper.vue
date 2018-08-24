<template>
    <div>
        <p><strong>Collapse to each side</strong></p>
        <div class="bg-grey">
            <div class="buttons_wrapper collapse">
                <a href="#" class="btn-secondary">button secondary</a>
                <a href="#" class="btn-primary">button primary</a>
            </div>
        </div>

        <br><br>

        <p><strong>Align center</strong></p>
        <div class="bg-grey">
            <div class="buttons_wrapper center">
                <a href="#" class="btn-secondary">button secondary</a>
                <a href="#" class="btn-primary">button primary</a>
            </div>
        </div>

        <br><br>

        <p><strong>Align right</strong></p>
        <div class="bg-grey">
            <div class="buttons_wrapper right">
                <a href="#" class="btn-secondary">button secondary</a>
                <a href="#" class="btn-primary">button primary</a>
            </div>
        </div>

        <br><br>

        <p><strong>Align left</strong></p>
        <div class="bg-grey">
            <div class="buttons_wrapper">
                <a href="#" class="btn-secondary">button secondary</a>
                <a href="#" class="btn-primary">button primary</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import 'src/scss/utils/variables';
    @import 'src/scss/utils/easing';
    @import 'src/scss/utils/reboot';
    @import 'src/scss/utils/mixins';
    @import 'src/scss/components/buttons';
    @import 'src/scss/layout/buttons-wrapper';

    .bg-grey {
        background-color: $color-grey-light;
    }
</style>