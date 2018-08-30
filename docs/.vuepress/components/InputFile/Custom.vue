<template>
    <div>
        <div class="bg-grey">
            <div class="input-file">
                <input type="file" id="file2" data-multiple-caption="{count} files selected" multiple>
                <label for="file2"><i class="icon icon-download"></i><span>Choice file</span></label>
            </div>
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
    @import 'src/scss/components/inputfile/custom';

    .bg-grey {
        background-color: $color-grey;
        padding: 15px;
    }
</style>

<script>
  import {inputFile} from "../../../../src/js/forms/inputFile";

  export default {
    mounted() {
        inputFile('.input-file');
    }
  }
</script>