<template>
    <div>
        <nav role="navigation">
            <ul>
                <li v-for="(item, index) in items">
                    <a :href="'#target-' + index" class="js-scrollspy-link">Target {{ index }}</a>
                </li>
            </ul>
        </nav>

        <div v-for="(item, index) in items" :id="'target-' + index" class="scrollspy-target">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium alias animi at autem cumque ea eum eveniet fugit id iste, iusto laboriosam nam placeat praesentium quaerat similique tempore, vel.
        </div>
    </div>
</template>

<script>
  import {Scrollspy} from '../../../../src/js/modules/Scrollspy';

  export default {
    name: "Scrollpsy",
    data () {
      return {
        items: 5
      }
    },
    mounted () {
      import ('velocity-animate').then((velocity) => {
        const scrollspy = new Scrollspy({
          activeZoneOffset: {
            start: 60,
            end: 0
          },
          navLinks: document.querySelectorAll('.js-scrollspy-link'),
          activeCallback: ({target}) => {
            target.classList.add('is-active');
          },
          notActiveCallback: ({target}) => {
            target.classList.remove('is-active');
          },
          clickCallback: ({targetOffset}) => {
            //Velocity(document.body, 'scroll', {offset: targetOffset - 60, duration: 1000});
          }
        });
        scrollspy.init();
      });
    }
  }
</script>

<style lang="scss" scoped>
    @import 'src/scss/utils/_variables';
    @import 'src/scss/utils/resets';

    img {
        display: block;
        position: relative;
        margin: 0 auto;
    }

    ul {
        @extend .list-reset;
        li {
            display: inline-block;

            a {
                display: block;
                padding: 0 10px;
                border: 1px solid;

                &.is-active {
                    background-color: $color-primary;
                    color: $color-white;
                }
            }
        }
    }

    .scrollspy-target {
        border: 1px solid;
        padding: 20px;
        margin: 50px auto;
        opacity: 0;
        transition-duration: 1000ms;

        &:nth-child(odd) {
            background-color: $color-primary;
            color: $color-white;
            transform: translateX(300px);
        }

        &:nth-child(even) {
            background-color: $color-secondary;
            transform: translateX(-300px);
        }

        &.is-active {
            opacity: 1;
            transform: translateX(0);
        }

    }
</style>