<template>
    <div class="marg-y">
        <form action="">
            <input type="checkbox" id="miamolex" name="cats">
            <label for="miamolex">Miamolex</label>

            <input type="checkbox" id="arthur" name="cats">
            <label for="arthur">Arthur</label>

            <input type="checkbox" disabled id="disabled" name="cats">
            <label for="disabled">disabled</label>
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