<template>
    <div>
        <div class="pagination_wrapper">
            <ul class="pagination">
                <li><a href=""> << </a></li>
                <li><a href=""> < </a></li>
                <li><a href="">1</a></li>
                <li><span class="is-active">2</span></li>
                <li><a href="">3</a></li>
                <li><a href=""> > </a></li>
                <li><a href=""> >> </a></li>
            </ul>
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
    @import "src/scss/utils/_variables";
    @import "src/scss/utils/_reboot";
    @import "src/scss/components/pagination/_pagination-classic";
</style>