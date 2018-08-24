<template>
    <div>
        <div v-if="type === 'info'" class="box-info">
            <p>
                Information message.
            </p>
        </div>

        <div v-if="type === 'success'" class="box-success">
            <p>
                Success message !
            </p>
        </div>

        <div v-if="type === 'warning'" class="box-warning">
            <p>
                Warning message.
            </p>
        </div>

        <div v-if="type === 'error'" class="box-error">
            <p>
                Error message !
            </p>
        </div>
    </div>
</template>

<script>
    export default {
      props: {
        type: ''
      },
    }
</script>

<style lang="scss" scoped>
    @import "src/scss/utils/_variables.scss";
    @import "src/scss/utils/_reboot.scss";
    @import "src/scss/typography/_iconfont.scss";
    @import "src/scss/components/_box-message.scss";
</style>