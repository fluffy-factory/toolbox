<template>
    <div>
        <div class="pagination_wrapper">
            <ul class="pagination">
                <li class="first"><a href=""></a></li>
                <li class="prev"><a href=""></a></li>
                <li><a href="">2</a></li>
                <li><span class="is-active">3</span></li>
                <li><a href="">4</a></li>
                <li class="next"><a href=""></a></li>
                <li class="last"><a href=""></a></li>
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
    @import "src/scss/utils/variables";
    @import "src/scss/utils/reboot";
    @import "src/scss/typography/iconfont";
    @import "src/scss/components/pagination/pagination-custom";
</style>