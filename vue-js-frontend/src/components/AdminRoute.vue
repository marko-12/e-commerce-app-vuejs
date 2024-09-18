<script setup>
import { useRouter } from 'vue-router'
import { useUserInfoStore } from '@/stores/userInfoStore'
import { onMounted } from 'vue'

const userInfoStore = useUserInfoStore()
const router = useRouter()

const isAdmin = userInfoStore.userInfo?.isAdmin

onMounted(() => {
  if (!isAdmin) {
    router.push('/signin')
  }
})
</script>

<template>
  <div v-if="isAdmin">
    <slot />
  </div>
  <div v-else>
    <RouterView />
  </div>
</template>
