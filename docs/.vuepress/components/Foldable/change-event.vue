<template>
    <div>
        <form action="">
            <input id="show" class="js-trigger-checkbox" type="checkbox">
            <label for="show">Show me more fields</label>

            <div id="js-target-checkbox" class="target">
                <ul>
                    <li>
                        <label class="is-required" for="name">Label</label>
                        <input id="name" type="text">
                    </li>
                    <li>
                        <label for="text">Text</label>
                        <textarea name="text" id="text" cols="30" rows="10"></textarea>
                    </li>
                </ul>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    @import 'src/scss/utils/easing';
    @import 'src/scss/utils/variables';
    @import 'src/scss/utils/reboot';
    @import 'src/scss/utils/mixins';
    @import 'src/scss/components/buttons';
    @import 'src/scss/components/forms';
    @import 'src/scss/components/checkbox';
    @import 'src/scss/utils/resets';
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

    ul {
        @extend .list-reset;
    }
</style>

<script>
    import {Foldable} from '../../../../src/js/modules/Foldable';
    import {setRequiredFields} from '../../../../src/js/utils/setRequiredFields';

    export default {
      mounted () {
        import ('velocity-animate').then((velocity) => {
          const Velocity = velocity.default;
          // Change event
          const foldableChange = new Foldable({
            eventType: 'change',
            trigger: document.querySelectorAll('.js-trigger-checkbox'),
            target: document.getElementById('js-target-checkbox'),
            openCallback: ({trigger, target, done}) => {
              if (trigger.checked) {

                const labelsRequired = target.querySelectorAll('label.is-required');
                setRequiredFields(labelsRequired, true);

                Velocity(target, 'slideDown', {
                  duration: 600,
                  complete: () => done()
                });
              }
            },
            closeCallback: ({trigger, target, done}) => {
              if (!trigger.checked) {

                const labelsRequired = target.querySelectorAll('label.is-required');
                setRequiredFields(labelsRequired, false);

                Velocity(target, 'slideUp', {
                  duration: 600,
                  complete: () => done()
                });
              }
            }
          });
        });
      }
    }
</script>