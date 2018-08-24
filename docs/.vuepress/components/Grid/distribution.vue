<template>
    <div>
        <div class="bg-grey">

            <div class="grid grid-collapse around">
                <div class="col-4">
                    <div>space-around</div>
                </div>
                <div class="col-4">
                    <div>space-around</div>
                </div>
            </div>
            <br>
            <div class="grid grid-collapse center">
                <div class="col-3">
                    <div>center</div>
                </div>
                <div class="col-3">
                    <div>center</div>
                </div>
                <div class="col-3">
                    <div>center</div>
                </div>
            </div>
            <br>
            <div class="grid grid-collapse between">
                <div class="col-4 first">
                    <div>space-between</div>
                </div>
                <div class="col-4">
                    <div>space-between</div>
                </div>
            </div>
        </div>

    </div>
</template>

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
        padding: 4px;
        background-color: $color-primary;
        color: $color-white;
        text-align: center;
    }

    [class^="col-"] > * {
        @extend %col-element;
    }

    .grid.around {
        justify-content: space-around;
    }

    .grid.center {
        justify-content: center;
    }

    .grid.between {
        justify-content: space-between;
    }


</style>