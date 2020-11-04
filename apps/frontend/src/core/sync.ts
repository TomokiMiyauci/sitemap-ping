import { ComputedRef } from 'vue'

import { useSwitcher } from '/@/core/switch'

type UseSync = {
  syncCall: (fn: () => unknown) => Promise<unknown>
  state: ComputedRef<boolean>
}

export const useSync = (): UseSync => {
  const { state, on: onSync, off: offSync } = useSwitcher()
  const syncCall = async (fn: () => unknown): Promise<unknown> => {
    if (state.value) return
    try {
      onSync()
      await fn()
    } finally {
      offSync()
    }
  }

  return { syncCall, state }
}
