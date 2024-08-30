import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('userInfo', () => {
  const userInfo = ref(null)
  const token = ref(null)

  const signIn = (data) => {
    userInfo.value = data.userInfo
    token.value = data.token
  }

  const signOut = () => {
    userInfo.value = null
    token.value = null
  }
  return { userInfo, token, signIn, signOut }
})
