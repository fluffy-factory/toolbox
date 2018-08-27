<template>
    <div>
        <a href="#" class="btn-animation">
            <div>
                <span>B</span><span>t</span><span>n</span><span>&nbsp;</span><span>a</span><span>n</span><span>i</span><span>m</span><span>a</span><span>t</span><span>i</span><span>o</span><span>n</span>
            </div>
            <div>
                <span>B</span><span>t</span><span>n</span><span>&nbsp;</span><span>a</span><span>n</span><span>i</span><span>m</span><span>a</span><span>t</span><span>i</span><span>o</span><span>n</span>
            </div>
        </a>
    </div>
</template>

<style lang="scss" scoped>
    @import 'src/scss/utils/easing';
    @import 'src/scss/utils/variables';
    @import 'src/scss/utils/reboot';
    @import 'src/scss/utils/mixins';
    @import 'src/scss/components/buttons';

    @media screen and (max-width: $screen-s) {
        .btn-primary,
        .btn-secondary,
        .btn-animation {
            margin: 10px 0;
        }
    }
</style>