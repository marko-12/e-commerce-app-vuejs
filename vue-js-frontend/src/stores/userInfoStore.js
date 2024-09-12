import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('userInfo', () => {
  const userInfo = ref(null)
  const token = ref(null)

  const setToken = (data) => {
    token.value = data
  }

  const setUserInfo = (ui) => {
    userInfo.value = ui
  }

  const signOut = () => {
    userInfo.value = null
    token.value = null
  }
  return { userInfo, token, setToken, setUserInfo, signOut }
})
