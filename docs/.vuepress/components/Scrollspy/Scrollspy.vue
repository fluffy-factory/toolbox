<template>
    <div>
        <nav role="navigation">
            <ul>
                <li>
                    <a href="#target-1" class="js-scrollspy-link">Target 1</a>
                </li>
                <li>
                    <a href="#target-2" data-scrollspy-target="#target-2" class="js-scrollspy-link">Target 2</a>
                </li>
                <li>
                    <a href="#target-3" class="js-scrollspy-link">Target 3</a>
                </li>
            </ul>
        </nav>

        <div id="target-1" class="scrollspy-target">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium alias animi at autem cumque ea eum eveniet fugit id iste, iusto laboriosam nam placeat praesentium quaerat similique tempore, vel.
        </div>

        <div id="target-2" class="scrollspy-target">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium alias animi at autem cumque ea eum eveniet fugit id iste, iusto laboriosam nam placeat praesentium quaerat similique tempore, vel.
        </div>

        <div id="target-3" class="scrollspy-target">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium alias animi at autem cumque ea eum eveniet fugit id iste, iusto laboriosam nam placeat praesentium quaerat similique tempore, vel.
        </div>
    </div>
</template>

<script>
  import {Scrollspy} from '../../../../src/js/modules/Scrollspy';
  export default {
    name: "Scrollpsy",
    mounted () {
        const scrollspy = new Scrollspy({
          navLinks: document.querySelectorAll('.js-scrollspy-link'),
          activeCallback: ({target}) => {
            console.log(target);
            target.classList.add('is-active')
          },
          notActiveCallback: ({target}) => {
            target.classList.remove('is-active')
          }
        });
        console.log(scrollspy.data);
    }
  }
</script>

<style lang="scss" scoped>
    @import 'src/scss/utils/_variables';
    @import 'src/scss/utils/resets';

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
        padding: 20px;
        margin: 100px auto;
        opacity: 0;
        transition-duration: 500ms;

        &.is-active {
            opacity: 1;
        }
    }
</style>