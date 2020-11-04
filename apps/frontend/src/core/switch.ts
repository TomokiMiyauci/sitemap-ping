import { computed, ComputedRef, ref } from 'vue'

type UseSwitcher = {
  state: ComputedRef<boolean>
  on: () => void
  off: () => void
  switchState: () => void
}
export const useSwitcher = (init = false): UseSwitcher => {
  const _state = ref(init)
  const state = computed(() => _state.value)
  const on = (): void => {
    _state.value = true
  }
  const off = (): void => {
    _state.value = false
  }
  const switchState = (): void => {
    _state.value = !_state.value
  }

  return { state, on, off, switchState }
}
