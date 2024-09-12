<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink, RouterView } from 'vue-router'

// Define refs for form inputs
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

// Set up navigation
const router = useRouter()
const redirect = router.currentRoute.value.query.redirect || '/'

// Handle form submission
const submitHandler = () => {
  // Add form validation or API call logic here
  if (password.value === confirmPassword.value) {
    console.log('Form Submitted', { name: name.value, email: email.value })
    // Perform signup logic, and redirect
    router.push(redirect)
  } else {
    alert('Passwords do not match')
  }
}
</script>

<template>
  <div class="small-container">
    <title>Sign Up</title>
    <h1 class="my-3">Sign Up</h1>
    <form @submit.prevent="submitHandler">
      <div class="mb-3">
        <label for="name">Name</label>
        <input id="name" v-model="name" type="text" required class="form-control" />
      </div>

      <div class="mb-3">
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" required class="form-control" />
      </div>

      <div class="mb-3">
        <label for="password">Password</label>
        <input id="password" v-model="password" type="password" required class="form-control" />
      </div>

      <div class="mb-3">
        <label for="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          v-model="confirmPassword"
          type="password"
          required
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <button type="submit" class="btn btn-primary">Sign Up</button>
      </div>

      <div class="mb-3">
        Already have an account?
        <RouterLink :to="`/signin?redirect=${redirect}`">Sign-In</RouterLink>
      </div>
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
</style>
