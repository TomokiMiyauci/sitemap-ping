<template>
  <div
    class="h-screen relative w-full flex px-4 text-center justify-center items-center flex-col bg-gradient-to-r from-gray-100"
  >
    <link-repo class="fixed right-0 top-0 text-gray-800" />
    <mdi-sitemap
      class="absolute w-full sm:w-2/3 h-168 text-gray-900 text-opacity-25"
      style="z-index: -1"
    />

    <div class="max-w-full">
      <h1
        class="sm:text-6xl text-5xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500"
      >
        <span>SITEMA</span><span style="text-shadow: 8px 7px 0 darkgrey">P</span
        ><span class="tracking-widest">ing</span>
      </h1>
      <h2 class="text-2xl text-gray-600">{{ t('description') }}</h2>

      <input-url @success="onSuccess" />

      <base-snackbar ref="snackbar" class="bottom-0 left-0 absolute" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  import LinkRepo from '/@/components/app/LinkRepo.vue'
  import BaseSnackbar from '/@/components/base/BaseSnackbar.vue'
  import MdiSitemap from '/@/components/base/icons/MdiSitemap.vue'
  import InputUrl from '/@/components/input-url/InputUrl.vue'

  export default defineComponent({
    components: {
      InputUrl,
      LinkRepo,
      BaseSnackbar,
      MdiSitemap,
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
  description: Request updating sitemap to search engine

ja:
  description: Request updating sitemap to search engine
</i18n>
