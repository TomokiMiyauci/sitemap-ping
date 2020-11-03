<template>
  <div class="h-screen w-full flex justify-center items-center flex-col">
    <h1 class="text-6xl">Sitemap Ping</h1>
    <h2>Request updating sitemap to search engine</h2>

    <input-url />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  import InputUrl from '/@/components/input-url/InputUrl.vue'

  export default defineComponent({
    components: {
      InputUrl,
    },
  })
</script>
