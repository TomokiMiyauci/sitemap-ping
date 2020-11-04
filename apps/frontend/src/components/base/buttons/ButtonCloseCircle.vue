<template>
  <base-button @click="$emit('click')">
    <mdi-close-circle />
  </base-button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  import BaseButton from '/@/components/base/BaseButton.vue'
  import MdiCloseCircle from '/@/components/base/icons/MdiCloseCircle.vue'

  export default defineComponent({
    components: {
      MdiCloseCircle,
      BaseButton,
    },
    emits: ['click'],
  })
</script>
