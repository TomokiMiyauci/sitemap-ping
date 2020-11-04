<template>
  <base-svg v-bind="$attrs">
    <path :d="mdiCloseCircle" />
  </base-svg>
</template>

<script lang="ts">
  import { mdiCloseCircle } from '@mdi/js'
  import { defineComponent } from 'vue'

  import BaseSvg from '/@/components/base/BaseSvg.vue'

  export default defineComponent({
    components: {
      BaseSvg,
    },

    setup() {
      return { mdiCloseCircle }
    },
  })
</script>
