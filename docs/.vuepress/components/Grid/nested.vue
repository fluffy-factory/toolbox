<template>
    <div>
        <div class="bg-grey">

            <div class="grid grid-collapse">
                <div class="col-s-7">
                    <div>

                        <div class="grid grid-collapse">
                            <div class="col-s-7">
                                <div>

                                    <div class="grid grid-collapse">
                                        <div class="col-s-7">
                                            <div></div>
                                        </div>
                                        <div class="col-s-5">
                                            <div></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-s-5">
                                <div>
                                    <div class="grid grid-collapse">
                                        <div class="col-s-7">
                                            <div></div>
                                        </div>
                                        <div class="col-s-5">
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-s-5">
                    <div>
                        <div class="grid grid-collapse">
                            <div class="col-s-12">
                                <div>
                                    <div class="grid grid-collapse">
                                        <div class="col-s-7">
                                            <div></div>
                                        </div>
                                        <div class="col-s-5">
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

    %col-element {
        border: 1px solid lighten($color-primary, 10%);
        padding: 20px;
        background-color: $color-primary;
        color: $color-white;
        text-align: center;
    }

    [class*="col-"] > * {
        @extend %col-element;
    }

    [class*="col-"] > * [class*="col-"] > * {
        @extend %col-element;
        padding: 15px;
        background-color: darken($color-primary, 10%);
    }

    [class*="col-"] > * [class*="col-"] > * [class*="col-"] > * {
        @extend %col-element;
        padding: 10px;
        background-color: darken($color-primary, 20%);
    }
</style>