<template>
    <div class="marg-y">
        <form action="">
            <input type="radio" id="piapolex" name="cats">
            <label for="piapolex">Piapolex</label>

           <input type="radio" id="jean" name="cats">
           <label for="jean">Jean</label>

            <input type="radio" disabled id="disabled2" name="cats">
            <label for="disabled2">disabled</label>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    @import "src/scss/utils/_variables.scss";
    @import "src/scss/typography/_iconfont.scss";
    @import "src/scss/components/_checkbox.scss";
    @import "src/scss/components/_radio.scss";

    .marg-y {
        margin: 20px auto;
    }
</style>