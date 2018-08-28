<template>
    <div>
        <div class="bg-grey">
            <div class="input-validate">
                <i data-view-password class="icon icon-eye"></i>
                <input type="password" id="password" name="password">
                <label for="password">Input Password</label>
            </div>

            <div class="input-container">
                <i class="icon icon-alert"></i>
                <input type="text" id="text" name="text" placeholder="Input text">
                <label for="text">Input text</label>
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
    @import 'src/scss/components/input/material';
    @import 'src/scss/components/input/custom';
    @import 'src/scss/components/input/password';

    .bg-grey {
        background-color: $color-grey;
        padding: 15px;
    }

    *[class^="input-"] {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
</style>

<script>

  import {MaterialInput} from '../../../../src/js/forms/MaterialInput';
  import {showPassword} from '../../../../src/js/forms/ShowPassword';

  export default {
    mounted() {
      new MaterialInput({
        element: document.querySelectorAll('.input-validate')
      });

      showPassword('.input-validate');
    }
  }
</script>