<template>
<Header2 />

  <div class="mx-auto ml-0 w-1/2 ">
    <form @submit.prevent="handleEdit" class="w-full max-w-lg mx-6 p-10 bg-white  ">
      <div class="mb-4">
        <label class="block text-black mb-2 mt-6 " >
          Date in the future
        </label>
        <input class="w-full border border-gray-400 p-2 rounded-md" type="text" id="name" name="name" v-model="futureDate" required>
        
      </div>
      <div class="mb-4">
        <label class="block text-black  mb-2" >
          Title
        </label>
        <input class="w-full border border-gray-400 p-2 rounded-md" type="email" id="email" name="email" v-model="title" required>
      </div>
      <div class="mb-4">
        <label class="block text-black mb-2" for="message">
          Details
        </label>
        <textarea class="w-full border border-gray-400 p-20 rounded-md" id="message" name="message" rows="5" v-model="details" required></textarea>
      </div>
     <div class="flex items-center justify-center">
        <button class="bg-[#5271ff] text-white font-bold py-2 px-10 rounded-[10px] focus:outline-none focus:shadow-outline" type="button" >
          Update
        </button>
      
      </div>
    </form>
  </div>

<Footer1 class="mt-40"/>
</template>

<script>

import Footer1 from '../../components/Footer1.vue'
import Header2 from '../../components/Header2.vue'
import axios from 'axios'

export default {
  name: "edititem",
    components : {
        Header2,
        Footer1,
    },

    data() {
      return {
        futureDate: '',
        title: '',
        details: '',
        id: '',
      }
    },

    async created() {
     this.id = this.$router.currentRoute._rawValue.params.id
     const response = await axios.get(`moment/${this.id}`)
     this.title = response.data.data.title
     this.details = response.data.data.details 
    },

    methods: {
      async handleEdit() {
        const response = await axios.patch(`moment/${this.id}`, {
          title: this.title,
          futureDate: this.futureDate,
          details: this.details,
        })
        this.$router.push(`/moment/$this.id`)
      }
    }
}

</script>