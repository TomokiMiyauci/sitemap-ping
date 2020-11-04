import { computed, ref } from 'vue'

export const useState = <T>(init: T) => {
  const _state = ref<any>(init)
  const state = computed(() => _state.value)

  const setState = (state: T) => {
    _state.value = state
  }

  return [state, setState]
}
