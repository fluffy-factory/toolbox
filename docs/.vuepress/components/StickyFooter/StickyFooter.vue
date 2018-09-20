<template>
    <div>
        <div class="body">Body</div>
        <div class="footer">Footer</div>
    </div>
</template>

<script>
  import {StickyFooter} from '../../../../src/js/modules/StickyFooter';

  export default {
    mounted() {
      new StickyFooter({
        elementSticky: document.querySelector('.footer'),
        elementContainer: document.querySelector('.body'),
      });
    }
  }
</script>

<style lang="scss" scoped>
@import 'src/scss/utils/_variables';
@import 'src/scss/utils/resets';

.body, .footer {
    font-size: 30px;
    text-align: center;
}

.body {
    position: relative;
    z-index: 1;
    padding: 220px 30px;
    margin-top: 15px;
    background-color: $color-primary;
}

.footer {
    position: sticky;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 80px 30px;
    background-color: $color-secondary;
}
</style>