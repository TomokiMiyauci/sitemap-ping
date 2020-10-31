<template>
  <base-svg v-bind="$attrs">
    <path :d="mdiMicrosoftBing" />
  </base-svg>
</template>

<script lang="ts">
  import { mdiMicrosoftBing } from '@mdi/js'
  import { defineComponent } from 'vue'

  import BaseSvg from '/@/components/base/BaseSvg.vue'

  export default defineComponent({
    components: {
      BaseSvg,
    },

    setup() {
      return { mdiMicrosoftBing }
    },
  })
</script>
