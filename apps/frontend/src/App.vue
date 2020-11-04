<template>
  <div
    class="h-screen relative w-full flex justify-center items-center flex-col"
  >
    <h1 class="text-6xl">Sitemap Ping</h1>
    <h2>Request updating sitemap to search engine</h2>

    <input-url @success="onSuccess" />

    <base-snackbar ref="snackbar" class="bottom-0 left-0 absolute" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'

  import BaseSnackbar from '/@/components/base/BaseSnackbar.vue'
  import InputUrl from '/@/components/input-url/InputUrl.vue'

  export default defineComponent({
    components: {
      InputUrl,
      BaseSnackbar,
    },

    setup() {
      const snackbar = ref<typeof BaseSnackbar>()

      const onSuccess = () => {
        snackbar.value?.setNotice('Success')
      }

      return { snackbar, onSuccess }
    },
  })
</script>
