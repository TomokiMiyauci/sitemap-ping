<template>
  <a href="https://github.com/TomokiMiyauci/sitemaping" target="_brank">
    <mdi-github class="w-12 h-12" />
  </a>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  import MdiGithub from '/@/components/base/icons/MdiGithub.vue'
  export default defineComponent({
    components: {
      MdiGithub,
    },

    setup() {
      console.log(process.env)
    },
  })
</script>
