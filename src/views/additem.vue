<template>
<Header2 />

  <div class="mx-auto ml-0 w-1/2 ">
    <form class="w-full max-w-lg mx-auto p-10 bg-white  ">
      <div class="mb-4">
        <label class="block text-black mb-2" >
          Date in the future
        </label>
        <input class="w-full border border-gray-400 p-2 rounded-md" type="text" id="name" name="name" v-model="name" required>
      </div>
      <div class="mb-4">
        <label class="block text-black  mb-2" >
          Title
        </label>
        <input class="w-full border border-gray-400 p-2 rounded-md" type="email" id="email" name="email" v-model="email" required>
      </div>
      <div class="mb-4">
        <label class="block text-black mb-2" for="message">
          Details
        </label>
        <textarea class="w-full border border-gray-400 p-10 rounded-md" id="message" name="message" rows="5" v-model="message" required></textarea>
      </div>
     <div class="flex items-center justify-center">
        <button class="bg-[#5271ff] text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline" type="button" @click="login">
          Save
        </button>
      
      </div>
    </form>
  </div>

<Footer1 class="mt-40"/>
</template>

<script>

import Footer1 from '../components/Footer1.vue'
import Header2 from '../components/Header2.vue'


export default {
    components : {
        Header2,
        Footer1,
    }
}

</script>