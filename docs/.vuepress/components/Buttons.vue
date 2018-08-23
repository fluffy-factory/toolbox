<template>
    <div>
        <h3>Link</h3>
        <a href="#" class="btn-primary">Btn primary</a>
        <a href="#" class="btn-secondary">Btn secondary</a>
        <a href="#" class="btn-secondary disabled">Btn secondary</a>

        <br><br>

        <h3>Button & input</h3>
        <button class="btn-primary" type="button">button primary</button>
        <input class="btn-primary" type="button" value="input button primary">
        <button class="btn-primary" disabled type="button">button primary</button>

        <br><br>

        <h3>Wrapper</h3>
        <div class="buttons_wrapper collapse">
            <a href="#" class="btn-secondary">Btn secondary</a>
            <a href="#" class="btn-primary">Btn primary</a>
        </div>
    </div>
</template>

<script lang="scss" scoped>
    @import 'src/scss/utils/variables';
    @import 'src/scss/utils/reboot';
    @import 'src/scss/utils/mixins';
    @import 'src/scss/components/buttons';
    @import 'src/scss/layout/buttons-wrapper';
</script>