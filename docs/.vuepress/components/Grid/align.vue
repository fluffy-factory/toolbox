<template>
    <div>
        <div class="bg-grey">

            <div class="grid grid-collapse top">
                <div class="col-6 first">
                    <div>top</div>
                </div>
                <div class="col-6">
                    <div>top</div>
                </div>
            </div>
            <br>
            <div class="grid grid-collapse middle">
                <div class="col-6 first">
                    <div>middle</div>
                </div>
                <div class="col-6">
                    <div>middle</div>
                </div>
            </div>
            <br>
            <div class="grid grid-collapse bottom">
                <div class="col-6 first">
                    <div>bottom</div>
                </div>
                <div class="col-6">
                    <div>bottom</div>
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
        background-color: $color-primary;
        color: $color-white;
        text-align: center;
    }

    [class^="col-"] > * {
        @extend %col-element;
    }

    .first > * {
        height: 50px;
        //line-height: 50px;
    }

    .grid.top {
        @extend .col-top;
    }

    .grid.middle {
        @extend .col-middle;
    }

    .grid.bottom {
        @extend .col-bottom;
    }


</style>