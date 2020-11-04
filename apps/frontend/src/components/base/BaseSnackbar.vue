<template>
  <div
    v-show="isShow"
    class="bg-white border pl-2 items-center shadow hover:shadow-md transition-shadow duration-300 rounded-full flex justify-between p-2"
  >
    <span class="flex">
      <component :is="iconComponent" :class="iconClass" />
      <span class="whitespace-pre-line ml-2">{{ messageee }}</span>
    </span>
    <button-close-circle class="ml-10" @click="hide" />
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, nextTick, Ref, toRefs, watch } from 'vue'

  import ButtonCloseCircle from '/@/components/base/buttons/ButtonCloseCircle.vue'
  import MdiCheckCircle from '/@/components/base/icons/MdiCheckCircle.vue'
  import { useState } from '/@/core/state'
  import { useSwitcher } from '/@/core/switch'
  import { wait } from '/@/utils/timer'

  const useSnackbar = (messageRef: Ref<string>) => {
    const { state: isShow, on: show, off: hide } = useSwitcher()
    const [messageee, setMessage] = useState('hogehoge')

    const setNotice = (tmpMessage: string): void => {
      setMessage(tmpMessage || messageRef.value)
      show()
    }

    watch(isShow, async (now, prev) => {
      if (now && !prev) {
        console.log(now, prev)
        await wait(5000)

        hide()
        await nextTick()
        setMessage('')
      }
    })

    return { isShow, hide, show, messageee, setNotice }
  }

  export default defineComponent({
    components: {
      MdiCheckCircle,
      ButtonCloseCircle,
    },

    props: {
      message: {
        type: String,
        default: '',
      },

      icon: {
        type: String,
        default: 'check',
      },
    },

    setup(props) {
      const { icon, message } = toRefs(props)
      const { hide, ...rest } = useSnackbar(message)
      const iconComponent = computed(() => {
        switch (icon.value) {
          case 'check': {
            return 'mdi-check-circle'
          }
        }
      })

      const iconClass = computed(() => {
        switch (icon.value) {
          case 'check': {
            return 'text-teal-500'
          }
        }
      })

      return { iconComponent, iconClass, hide, ...rest }
    },
  })
</script>
