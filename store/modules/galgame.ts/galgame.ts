import type { GalgameStorePersist } from '~/store/types/galgame/galgame'

export const usePersistGalgameStore = defineStore({
  id: 'Galgame',
  persist: {
    storage: persistedState.localStorage
  },
  state: (): GalgameStorePersist => ({
    vndbId: '',
    name: {
      'en-us': '',
      'ja-jp': '',
      'zh-cn': ''
    },
    introduction: {
      'en-us': '',
      'ja-jp': '',
      'zh-cn': ''
    }
  }),
  actions: {
    resetGalgameData() {
      this.vndbId = ''
      this.name = {
        'en-us': '',
        'ja-jp': '',
        'zh-cn': ''
      }
      this.introduction = {
        'en-us': '',
        'ja-jp': '',
        'zh-cn': ''
      }
    }
  }
})
