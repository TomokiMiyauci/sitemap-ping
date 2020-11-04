<template>
  <button
    class="outline-none focus:outline-none disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-transparent"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    emits: ['click'],
  })
</script>
