<script setup>
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
import { useUserInfoStore } from '@/stores/userInfoStore'
import { ref, computed } from 'vue'
import axios from 'axios'

const router = useRouter()
const route = useRoute()
const redirect = route.query.redirect || '/'

const userStore = useUserInfoStore()
const id = ref(userStore.userInfo?.id || '')
const name = ref(userStore.userInfo?.name || '')
const email = ref(userStore.userInfo?.email || '')
const access_token = ref(userStore.token?.access_token)

const submitHandler = async (e) => {
  try {
    const { data } = await axios.patch(
      `/api/users/${id.value}`,
      {
        name: name.value,
        email: email.value
      },
      {
        headers: { Authorization: `Bearer ${access_token.value}` }
      }
    )

    // Update the store after successful submission
    userStore.setUserInfo(data)
    router.push(redirect || '/')
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <title>{{ name }}s profile</title>
  <div class="container small-container form-container">
    <h1 class="my-3 text-center">User Profile</h1>
    <form @submit.prevent="submitHandler" class="form">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input id="name" v-model="name" type="text" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input id="email" v-model="email" type="email" class="form-control" required />
      </div>
      <div class="mb-3 text-center">
        <button type="submit" class="btn btn-primary">Update</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form {
  width: 33%; /* Makes the form a third of the screen */
}

.form-control {
  width: 100%;
}

.text-center {
  text-align: center;
}

@media (max-width: 768px) {
  /* For small screens, make the form wider to adapt */
  .form {
    width: 90%;
  }
}
</style>
