<template>
  <base-button>
    <mdi-send />
  </base-button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  import BaseButton from '/@/components/base/BaseButton.vue'
  import MdiSend from '/@/components/base/icons/MdiSend.vue'

  export default defineComponent({
    components: {
      MdiSend,
      BaseButton,
    },
  })
</script>
