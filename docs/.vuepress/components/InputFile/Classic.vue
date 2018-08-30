<template>
    <div>
        <div class="bg-grey">
            <label for="file">Input file</label>
            <input type="file" id="file">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import 'src/scss/utils/variables';
    @import 'src/scss/utils/reboot';
    @import 'src/scss/utils/resets';
    @import 'src/scss/utils/easing';
    @import 'src/scss/utils/mixins';
    @import 'src/scss/typography/iconfont';
    @import 'src/scss/components/forms';
    @import 'src/scss/components/inputfile/classic';

    .bg-grey {
        background-color: $color-grey;
        padding: 15px;
    }
</style>