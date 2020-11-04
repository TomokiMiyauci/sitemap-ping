<template>
  <div class="flex justify-around mt-5">
    <input
      id="checkbox"
      v-model="searchEngines"
      class="appearance-none"
      type="checkbox"
      value="google"
      checked
    />

    <label
      for="checkbox"
      class="w-32 h-32 shadow flex justify-center items-center rounded hover:shadow-md cursor-pointer hover:bg-gray-200 transition duration-300"
    >
      <div class="flex flex-col items-center">
        <mdi-google class="w-24 h-24" />
        <span class="text-lg">Google</span>
      </div>
    </label>
    <input
      id="checkbox1"
      v-model="searchEngines"
      class="checked:bg-green-300 appearance-none bg-green-400"
      type="checkbox"
      value="bing"
    />

    <label
      for="checkbox1"
      class="w-32 h-32 ml-10 shadow flex justify-center items-center rounded hover:shadow-md cursor-pointer hover:bg-gray-100"
    >
      <div class="flex flex-col items-center">
        <mdi-microsoft-bing class="w-24 h-24" />
        <span class="text-lg">Bing</span>
      </div>
    </label>
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
      class="shadow mt-10 inline-flex justify-center items-center overflow-hidden rounded-full hover:shadow-md hover:bg-gray-100 transition duration-300 focus-within:bg-gray-300 focus-within:text-teal-400"
    >
      <mdi-sitemap class="mx-4" />
      <input
        v-model.trim="sitemapUrl"
        placeholder="Enter Sitemap URL"
        type="url"
        autocomplete="url"
        spellcheck="off"
        autofocus
        class="outline-none bg-transparent w-64 mr-3 focus:outline-none"
      />
      <button-send
        :disabled="!isPostable"
        class="bg-gray-500 p-2 rounded-sm transition-colors duration-300 hover:bg-gray-600"
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
              console.log(22)
              throw new Error('ss')
            })
        })
      }

      return { onClick, sitemapUrl, searchEngines, isPostable, state }
    },
  })
</script>

<style lang="scss" scoped>
  input[type='checkbox']:checked + label {
    @apply text-teal-500 bg-teal-100;

    &:hover {
      @apply bg-teal-200;
    }
  }
</style>
