<template>
<Header />

  <div class="flex justify-center items-center mt-40">
    <form  class="w-full max-w-md " >
      <h2 class="text-4xl text-black-800 font-bold mb-6 font-sans">Create an account,</h2>
      
     
      <div class="mb-5">
        <label class="block text-gray-700 mb-2" for="name">
          Fullname
        </label>
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="fullname"
          type="text"
          v-model="fullname"
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
        <button class="bg-[#5271ff] text-white font-bold py-2 px-20 rounded-[10px] focus:outline-none focus:shadow-outline" type="button" @click.prevent="handleregister">
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
import axios from 'axios'
export default {
  name: 'register',
  data() {
    return {
      fullname: '',
      email: '',
      password: '',
    }
  },
  components: {
     Footer1,
     Header,
  },
  methods: {
    async handleregister(){

      await axios.post("users/signup", {
        fullname: this.fullname,
        email: this.email,
        password: this.password
      })
      
      
      this.$router.push('/')
    }
  }
}
</script>