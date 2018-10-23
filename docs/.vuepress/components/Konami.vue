<template></template>
<script>
    import { Konami } from '../../../src/js/modules/Konami';
    export default {
      mounted () {
        new Konami(() => alert('Wow you know the Konami code, I am proud of you.'));
      }
    }
</script>