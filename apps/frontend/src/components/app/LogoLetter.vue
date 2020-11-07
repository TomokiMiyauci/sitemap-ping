<template>
  <h1
    class="sm:text-6xl text-5xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500"
  >
    <span>{{ SITEMA }}</span
    ><span style="text-shadow: 8px 7px 0 darkgrey">{{ P }}</span
    ><span class="tracking-widest">{{ ING }}</span>
  </h1>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  const logo = {
    SITEMA: 'SITEMA',
    P: 'P',
    ING: 'ing',
  }

  export default defineComponent({
    setup() {
      return { ...logo }
    },
  })
</script>
