<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
import Toast from 'vue-toastification'
import { useUserInfoStore } from '@/stores/userInfoStore' // Importing your Pinia store

// Define reactive variables for form inputs
const email = ref('')
const password = ref('')

// Set up router and route
const router = useRouter()
const route = useRoute()
const redirect = route.query.redirect || '/'

// Access the Pinia store
const userInfoStore = useUserInfoStore()

// Submit handler to send API request
const submitHandler = async () => {
  try {
    const { data } = await axios.post('/api/auth/login', {
      email: email.value,
      password: password.value
    })

    if (data) {
      // Call the signIn action from the Pinia store
      userInfoStore.setToken(data)
      localStorage.setItem('token', JSON.stringify(data))

      const userInfo = await axios.get('/api/user-info', {
        headers: { Authorization: `Bearer ${data.access_token}` }
      })
      userInfoStore.setUserInfo(userInfo.data)
      localStorage.setItem('userInfo', JSON.stringify(userInfo.data))

      router.push(redirect || '/')
    }
  } catch (error) {
    //Toast.error(error.response?.data?.message || 'An error occurred')
  }
}

// Redirect if already logged in
onMounted(() => {
  if (userInfoStore.userInfo) {
    router.push(redirect)
  }
})
</script>

<template>
  <div class="small-container">
    <title>Sign In</title>
    <h1 class="my-3">Sign In</h1>
    <form @submit.prevent="submitHandler">
      <div class="mb-3">
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" required class="form-control" />
      </div>
      <div class="mb-3">
        <label for="password">Password</label>
        <input id="password" v-model="password" type="password" required class="form-control" />
      </div>
      <div class="mb-3">
        <button type="submit" class="btn btn-primary">Sign In</button>
      </div>
      <div class="mb-3">
        New customer?
        <RouterLink :to="`/signup?redirect=${redirect}`">Create your account</RouterLink>
      </div>
      <!-- Uncomment this if you need password reset feature -->
      <!-- <div class="mb-3">
          Forget Password? <router-link to="/forget-password">Reset Password</router-link>
        </div> -->
    </form>
  </div>
</template>

<style scoped>
.small-container {
  max-width: 400px;
  margin: auto;
}

.mb-3 {
  margin-bottom: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
}
</style>
