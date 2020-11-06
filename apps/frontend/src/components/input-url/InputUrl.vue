<template>
  <div class="flex justify-around mt-5">
    <template v-for="{ name, icon } in searchEngine" :key="name">
      <input
        :id="name"
        v-model="searchEngines"
        class="appearance-none hidden"
        type="checkbox"
        :value="name.toLowerCase()"
      />

      <label
        :for="name"
        class="w-32 h-32 shadow bg-white flex justify-center items-center rounded hover:shadow-md cursor-pointer hover:bg-gray-200 transition duration-300"
      >
        <div class="flex flex-col items-center">
          <component :is="icon" class="w-24 h-24" />
          <span class="text-lg pointer-events-none">{{ name }}</span>
        </div>
      </label>
    </template>
  </div>

  <teleport to="body">
    <div
      v-show="state"
      class="inset-0 bg-gray-900 bg-opacity-50 absolute flex justify-center items-center"
    >
      <div class="flex justify-center items-center">
        <div
          class="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-gray-900"
        />
      </div>
    </div>
  </teleport>

  <div class="flex flex-col">
    <div
      class="shadow bg-white mt-10 inline-flex justify-between items-center overflow-hidden rounded-full hover:shadow-md hover:bg-gray-200 transition duration-300 focus-within:bg-gray-300 bg-gradient-to-r focus-within:from-teal-400 focus-within:to-purple-400"
    >
      <div class="flex items-center">
        <mdi-sitemap class="mx-4 h-8 w-8" />
        <input
          v-model.trim="sitemapUrl"
          placeholder="Enter Sitemap URL"
          type="url"
          autocomplete="url"
          spellcheck="off"
          autofocus
          class="outline-none py-3 placeholder-gray-600 text-xl sm:text-3xl bg-transparent mr-3 focus:outline-none"
        />
      </div>

      <button-send
        :disabled="!isPostable"
        class="px-4 rounded-sm transition-colors duration-300 disabled:text-gray-600"
        @click="onClick"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import ky from 'ky'
  import { computed, defineComponent, reactive, toRefs } from 'vue'

  import ButtonSend from '/@/components/base/buttons/ButtonSend.vue'
  import MdiGoogle from '/@/components/base/icons/MdiGoogle.vue'
  import MdiMicrosoftBing from '/@/components/base/icons/MdiMicrosoftBing.vue'
  import MdiSitemap from '/@/components/base/icons/MdiSitemap.vue'
  import { useSync } from '/@/core/sync'
  const searchEngine = [
    {
      name: 'Google',
      icon: MdiGoogle,
    },
    { name: 'Bing', icon: MdiMicrosoftBing },
  ]
  const useForm = () => {
    const state = reactive({
      sitemapUrl: '',
      searchEngines: ['google'],
    })

    const isPostable = computed(() => {
      return !!state.sitemapUrl && !!state.searchEngines.length
    })

    return { ...toRefs(state), isPostable }
  }

  const http = ky.create({
    prefixUrl: 'https://sitemaping.tomoki-miyauci.vercel.app/',
    retry: 0,
  })
  export default defineComponent({
    components: {
      ButtonSend,
      MdiSitemap,
      MdiGoogle,
      MdiMicrosoftBing,
    },
    emits: ['success'],

    setup(_, { emit }) {
      const { sitemapUrl, searchEngines, isPostable } = useForm()
      const { syncCall, state } = useSync()

      const onClick = () => {
        syncCall(async () => {
          await http
            .post('api/dist', {
              mode: 'cors',
              json: {
                sitemapUrl: sitemapUrl.value,
                searchEngines: searchEngines.value,
              },
            })
            .json()
            .then(() => emit('success'))
            .catch(() => {
              throw new Error('ss')
            })
        })
      }

      return {
        onClick,
        sitemapUrl,
        searchEngines,
        isPostable,
        searchEngine,
        state,
      }
    },
  })
</script>

<style lang="scss" scoped>
  input[type='checkbox']:checked + label {
    @apply bg-gradient-to-r from-teal-400 to-purple-400 text-gray-700;

    &:hover {
      @apply from-teal-500 to-purple-500;
    }
  }
</style>
