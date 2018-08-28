<template>
    <div>
        <div class="bg-grey">
            <div class="input-validate">
                <i data-view-password class="icon icon-eye"></i>
                <input type="password" id="password" name="password">
                <label for="password">Input Password</label>
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
    @import 'src/scss/components/input/password';

    .bg-grey {
        background-color: $color-grey;
        padding: 15px;
    }
</style>

<script>

  import {MaterialInput} from '../../../../src/js/forms/materialinput';

  export default {
    mounted() {
      new MaterialInput('.input-validate');
    }
  }
</script>