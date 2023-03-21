<template>
<Header2 />

  <div class="max-w-9xl mx-10 px-4 sm:px-6 lg:px-8 " v-if="user">
    <div class="block">
        <h1 class="text-4xl font-bold text-gray-800 my-8 -mx-6 ">{{ moment.title}}</h1>

        <p class="-mt-6 text-[#5271FF] -mx-6">{{ moment.futureDate.slice(0, 10)}}</p>
   
    </div>
    
   <div class="w-full max-w-8xxl p-8 bg-white ">
        
        <p class="leading-relaxed mt-4 -mx-12">
          {{moment.details}}
        </p>
       
   </div>
     <div class="flex mb-20 -mx-4">
      <router-link :to=" '/moment/'+moment._id + '/edit'">

         <button class="bg-[#06C3B4] text-white font-bold py-2 px-20  focus:outline-none focus:shadow-outline rounded-md" type="button">
          Edit
        </button>
        <button class="bg-[#C34F06] mx-5 text-white font-bold py-2 px-20  focus:outline-none focus:shadow-outline rounded-md" type="button" @click="handleDelete">
          Delete
        </button>
      </router-link>
       
      
      </div>
      
  </div>
<Footer1 />
</template>


<script>

import Footer1 from '../../components/Footer1.vue'
import Header2 from '../../components/Header2.vue'

import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  name: 'singleitem',
      components: {
     Footer1,
     Header2,

    props: ['id'],

     data() {
      return {
        user: null
      }
     },
     
     async created() {
        const response = await axios.get('moment/'+ this.id)
         
        this.moment = response.data
     }
  },

  methods : {
  async handleDelete() {
    await axios.delete('moment/' + this.id)

    this.$router.push('/')
  }
  },

  computed: {
    ...mapGetters(['user'])
  }

}


</script>