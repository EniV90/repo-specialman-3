<template>
<Header />

  <div class="flex justify-center items-center h-screen">
    <form class="w-full max-w-md ">
      <h2 class="text-4xl text-black-800 font-bold mb-4">Create an account,</h2>
      
     
      <div class="mb-5">
        <label class="block text-gray-700  mb-2" for="name">
          Fullname
        </label>
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="name"
          v-model="name"
        />
      </div>
      <div class="mb-5">
        <label class="block text-gray-700  mb-2" for="email">
          Email
        </label>
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          v-model="email"
        />
      </div>
      <div class="mb-5">
        <label class="block text-gray-700  mb-2" for="password">
          Password
        </label>
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          v-model="password"
        />
      </div>
      <div class="flex items-center justify-center">
        <button class="bg-[#5271ff] text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline" type="button" @click="login">
          Create
        </button>
      
      </div>
    </form>
  </div>
  <Footer1 />
</template>

<script>

import Footer1 from '../components/Footer1.vue'
import Header from '../components/Header.vue'

export default {
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
    login() {
      console.log(`Email: ${this.email}, Password: ${this.password}`);
    }
  }
}
</script>