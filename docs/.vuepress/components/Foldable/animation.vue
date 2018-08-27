<template>
    <div>
        <div class="buttons_wrapper collapse">
            <a href="#" class="btn-primary first js-trigger-animated">Trigger 1</a>
            <a href="#" class="btn-primary last js-trigger-animated">Trigger 2</a>
        </div>
        <div id="js-target-animated" class="target">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolore magni reprehenderit. Autem dolorum illum iure nisi nulla quidem, sint tempora. Accusamus distinctio doloremque labore nobis odit perspiciatis sapiente! Reiciendis.</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import 'src/scss/utils/easing';
    @import 'src/scss/utils/variables';
    @import 'src/scss/utils/reboot';
    @import 'src/scss/utils/mixins';
    @import 'src/scss/components/buttons';
    @import 'src/scss/layout/buttons-wrapper';
    @import 'src/scss/typography/iconfont';

    @media screen and (max-width: $screen-s) {
        .btn-primary,
        .btn-secondary,
        .btn-animation {
            margin: 10px 0;
        }
    }

    .btn-primary {
        position: relative;
        overflow: hidden;
        &:before {
            position: absolute;
            top: 10px;
            left: -20px;
            font-family: $font-icon;
            @extend %icon-x;
            transition: $duration ease;
        }
    }

    .btn-primary.is-active {
        padding-left: 30px;
        background-color: $color-error;
        &:before {
            left: 10px;
        }
    }

    .target {
        display: none;
        padding: 20px;
        border: 1px solid  $color-grey;
        background-color: $color-grey-light;
    }

</style>

<script>
    import {Foldable} from '../../../../src/js/modules/Foldable';
    import Velocity from 'velocity-animate';

    export default {
      mounted () {
        // Animation
        const foldableAnimated = new Foldable({
          trigger: document.querySelectorAll('.js-trigger-animated'),
          target: document.getElementById('js-target-animated'),
          openCallback: ({trigger, target, done}) => {
             Velocity(target, 'slideDown', {
               complete: () => done()
             })
           },
          closeCallback: ({trigger, target, done}) => {
            Velocity(target, 'slideUp', {
              complete: () => done()
            })
          }
        });
      }
    }
</script>