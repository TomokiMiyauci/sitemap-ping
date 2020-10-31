<template>
  <button
    class="outline-none focus:outline-none disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-transparent"
  >
    <slot />
  </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({})
</script>
