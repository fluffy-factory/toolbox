<template>
    <div>
        <form action="">
           <ul class="list-reset">
               <li>
                   <label class="is-required" for="b">Username</label>
                   <input id="b" type="text">
               </li>
               <li>
                   <label class="is-required" for="email">Email</label>
                   <input id="email" type="email">
               </li>
               <li>
                   <label for="a">Username</label>
                   <ul class="form_error">
                       <li>
                           <p>Oops error !</p>
                       </li>
                   </ul>
                   <input id="a" type="text">
               </li>
           </ul>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    @import 'src/scss/utils/variables';
    @import 'src/scss/utils/resets';
    @import 'src/scss/typography/iconfont';
    @import 'src/scss/utils/reboot';
    @import 'src/scss/components/forms';
    @import 'src/scss/components/form-error';
</style>