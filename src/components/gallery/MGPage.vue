<template>
  <div>
    <div class="Brid-groom-content Brid-img">
    <div class="Brid-groom-area">
      <div class="container">
        <div class="container-wrap">
          <h1>Gallery</h1>
          <ul class="container-wrap-lists clearfix">
            <li class="container-wrap-list fl margin-r-5">
              <router-link to="/home">Home</router-link>
            </li>
            <li class="container-wrap-list active fl margin-l-5">Gallery</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    <PublicTab></PublicTab>
  </div>
</template>

<script>
import PublicTab from './publicTab.vue'
export default {
  components: {
    PublicTab
  }
}
</script>

<style>

</style>
