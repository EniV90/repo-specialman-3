<template>
<Header />

  <div class="flex mt-40 justify-center items-center ">
    <form @submit.prevent="handleSubmit">
      <h2 class="text-4xl font-bold mb-4">Welcome back,</h2>
      <p class="w-full max-w-md   ">Hi, my name is Eventful Moments, I am a bucket… no, not the bucket of water but I store awesome moments you will like to have in coming years.</p>
      <div class="mb-4 py-5">
        <label class="block text-black-700  mb-2" for="email">
          Email
        </label>
        <input
          class="appearance-none border rounded-[5px] w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          v-model="email"
        />
      </div>
      <div class="mb-6">
        <label class="block text-black-700  mb-2" for="password">
          Password
        </label>
        <input
          class="appearance-none border rounded-[5px] w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          v-model="password"
        />
      </div>
      <div class="flex items-center justify-center">
        <button class="bg-[#5271ff] text-white py-2 px-16 rounded-[10px] focus:outline-none focus:shadow-outline" type="button" >
          Login
        </button>
      
      </div>
    </form>
  </div>
  <Footer1 />
</template>

<script>

import Footer1 from '../components/Footer1.vue'
import Header from '../components/Header.vue'
import Errors from '../components/Errors.vue'
import axios from 'axios'
export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  components: {
     Footer1,
     Header,
  },
  methods: {
    
    async handleSubmit() {
      
      const response = await axios.post('users/login', {
        email: this.email,
        password: this.password
      })

      localStorage.setItem('token', response.data.token)
        this.$store.dispatch('user', response.data.user)

      this.$router.push('/bucketlist')
    }
  }
}
</script>

