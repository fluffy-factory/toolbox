<template>
    <div>
        <div class="input-media">
            <input type="file" id="file3">
            <label for="file3"></label>
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
    @import 'src/scss/components/inputfile/media';

    .bg-grey {
        background-color: $color-grey;
        padding: 15px;
    }
</style>

<script>
  import {InputMedia} from "../../../../src/js/forms/InputMedia";

  export default {
    mounted() {
      new InputMedia({
        element: document.querySelectorAll('.input-media'),
        drag: true
      });
    }
  }
</script>