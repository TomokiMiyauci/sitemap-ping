<template>
  <base-svg v-bind="$attrs">
    <path :d="mdiSend" />
  </base-svg>
</template>

<script lang="ts">
  import { mdiSend } from '@mdi/js'
  import { defineComponent } from 'vue'

  import BaseSvg from '/@/components/base/BaseSvg.vue'

  export default defineComponent({
    components: {
      BaseSvg,
    },

    setup() {
      return { mdiSend }
    },
  })
</script>
