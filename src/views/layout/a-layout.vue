<template>
  <div>
    <a-navbar />
    <main class="pb-4">
      <router-view />
    </main>
    <aFooter />
  </div>
</template>

<script>
import aNavbar from "@/views/layout/a-navbar.vue";
import aFooter from "@/views/layout/a-footer.vue";
export default {
  components: {
    aNavbar,
    aFooter
  }
};
</script>