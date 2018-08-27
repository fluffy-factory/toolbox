<template>
    <div>
        <div class="bg-grey">
            <div class="grid grid-collapse">
                <div class="col-6">
                    <div></div>
                </div>
                <div class="col-6">
                    <div></div>
                </div>
            </div>

            <br>

            <div class="grid grid-collapse">
                <div class="col-3">
                    <div></div>
                </div>
                <div class="col-3">
                    <div></div>
                </div>
                <div class="col-3">
                    <div></div>
                </div>
                <div class="col-3">
                    <div></div>
                </div>
            </div>

            <br>

            <div class="grid grid-collapse">
                <div class="col-4">
                    <div></div>
                </div>
                <div class="col-2">
                    <div></div>
                </div>
                <div class="col-2">
                    <div></div>
                </div>
                <div class="col-4">
                    <div></div>
                </div>
            </div>

            <br>

            <div class="grid grid-collapse">
                <div class="col-5">
                    <div></div>
                </div>
                <div class="col-2">
                    <div></div>
                </div>
                <div class="col-5">
                    <div></div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          columns: 12
        }
      }
    }
</script>

<style lang="scss" scoped>
    @import "src/scss/utils/variables";
    @import "src/scss/utils/reboot";
    @import "src/scss/layout/wrapper";
    @import "src/scss/layout/grid";

    .bg-grey {
        background-color: $color-grey;
    }

    [class*="col-"] > * {
        height: 30px;
        line-height: 30px;
        border: 1px solid lighten($color-primary, 10%);
        background-color: $color-primary;
        color: $color-white;
        text-align: center;
    }
</style>