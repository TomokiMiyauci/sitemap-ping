<template>
  <div
    class="h-screen relative w-full flex justify-center items-center flex-col"
  >
    <h1 class="text-6xl">{{ t('logo') }}</h1>
    <h2>{{ t('description') }}</h2>

    <input-url @success="onSuccess" />

    <base-snackbar ref="snackbar" class="bottom-0 left-0 absolute" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useI18n } from 'vue-i18n'

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

      const { t } = useI18n({
        inheritLocale: true,
      })

      return { snackbar, onSuccess, t }
    },
  })
</script>

<i18n lang="yml">
en:
  logo: Sitemap Ping
  description: Request updating sitemap to search engine

ja:
  logo: Sitemap Ping
  description: Request updating sitemap to search engine
</i18n>
