<template>
  <div class="flex justify-around mt-5">
    <input
      id="checkbox"
      v-model="searchEngines"
      class="checked:bg-green-300 appearance-none bg-green-400"
      type="checkbox"
      value="google"
      checked
    />

    <label
      for="checkbox"
      class="w-32 h-32 shadow flex justify-center items-center rounded hover:shadow-md cursor-pointer hover:bg-gray-100"
    >
      <div class="flex flex-col items-center">
        <mdi-google class="w-24 h-24" />
        <span class="text-lg">Google</span>
      </div>
    </label>
    <label
      class="w-32 h-32 shadow flex justify-center items-center rounded hover:shadow-xl cursor-pointer hover:bg-gray-100 ml-8"
    >
      <input
        v-model="searchEngines"
        class="checked:bg-green-300 appearance-none bg-green-400"
        type="checkbox"
        value="bing"
        checked
      />
      <mdi-microsoft-bing />
      <span class="text-lg">bing</span>
    </label>
  </div>

  <input id="no" type="checkbox" name="my-input" />
  <label class="text-yellow-200" for="no">No</label>

  <input type="radio" class="checked:bg-gray-900 text-orange-400" />

  <input
    v-model="searchEngines"
    class="checked:bg-green-300"
    type="checkbox"
    value="ffff"
    checked
  />

  {{ searchEngines }}
  <div
    class="shadow inline-flex justify-center items-center overflow-hidden rounded-full hover:shadow-md"
  >
    <mdi-sitemap class="mx-4" />
    <input
      v-model.trim="sitemapUrl"
      placeholder="Enter sitemap URL"
      type="url"
      autofocus
      class="outline-none bg-transparent w-56 focus:outline-none"
    />
    <button-send
      :disabled="!isPostable"
      class="bg-gray-300 p-2 rounded-sm"
      @click="onClick"
    />
  </div>
</template>

<script lang="ts">
  import ky from 'ky'
  import { computed, defineComponent, reactive, toRefs } from 'vue'

  import ButtonSend from '/@/components/base/buttons/ButtonSend.vue'
  import MdiGoogle from '/@/components/base/icons/MdiGoogle.vue'
  import MdiMicrosoftBing from '/@/components/base/icons/MdiMicrosoftBing.vue'
  import MdiSitemap from '/@/components/base/icons/MdiSitemap.vue'

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
    prefixUrl: 'https://sitemap-ping.tomoki-miyauci.vercel.app/',
    retry: 0,
  })
  export default defineComponent({
    components: {
      ButtonSend,
      MdiSitemap,
      MdiGoogle,
      MdiMicrosoftBing,
    },

    setup() {
      const { sitemapUrl, searchEngines, isPostable } = useForm()

      const onClick = () => {
        http
          .post('api', {
            mode: 'cors',
            json: {
              sitemapUrl: sitemapUrl.value,
              searchEngines: searchEngines.value,
            },
          })
          .json()
      }

      return { onClick, sitemapUrl, searchEngines, isPostable }
    },
  })
</script>

<style lang="scss">
  input[type='checkbox']:checked + label {
    @apply text-teal-500 bg-teal-100;
  }
</style>
