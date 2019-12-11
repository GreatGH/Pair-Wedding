<template>
  <transition
  enter-active-class="animated bounceInRight"
  leave-active-class="animated"
  >
    <slot name="bounceInRight"></slot>
  </transition>
</template>
<script>
export default {
  name: 'lefttoright'
}
</script>

<style>

</style>
