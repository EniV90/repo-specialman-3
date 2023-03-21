<template>
    <Header2 />
    
    <div v-if="authIsReady">
    <div v-if='user'>
    <div class=" text-black p-4 md:flex justify-between items-center border-[#707070] mt-10" >
    <div class="flex items-center md:mx-10 ">
        <div class="block">
             <h1 class="text-4xl font-bold md:mx-7">{{user.fullname}},</h1>
             <p class="mt-2 md:mx-7">Here are items in your eventful moment bucket.</p>
        </div>
       
    </div>

    <ul class="md:flex md:items-center md:mx-10">
        <li class="md:mx-4">

          <router-link to="/additem">
              <div class="flex items-center justify-center">
        <button class="bg-[#5271ff] text-white py-4 px-20 rounded-[10px] focus:outline-none focus:shadow-outline" type="button">
          Add Item
        </button>
        </div>
          </router-link>
             
      
      
            
        </li>
        
    </ul>
  </div>

   

     <div v-for="moment in moments" :key="moment.id">
        <div class="flex justify-center mt-10">
    <div class="grid grid-cols-2 gap-8">
      <div class="w-full max-w-2xl p-8 bg-[#FFF5A7] rounded-mg shadow-lg">
        <h2 class="text-lg font-semibold mb-4">{{moment.title}}</h2>
        <p class="text-gray-600 leading-relaxed">
          {{moment.details}}
        </p>
        <div class=" text-black p-4 md:flex justify-between items-center " >
    <div class="flex items-center">
        <router-link :to="{ name: 'singleitem', params: { id: moment._id}}" class="text-[#5271FF]">view deatils</router-link>
    </div>

    <ul class="md:flex md:items-center md:mx-15">
        <li class="md:mx-4">
            <h6 class="text-[#B2B2B2]">{{ moment.createdAtslice(0,10)}}</h6>
            
        </li>
        <li class="md:mx-4">
            <h6>{{ moment.updateAt.slice(0,10)}}</h6>
            
        </li>
    </ul>
  </div>
      </div>
      </div>
     
        <div class="flex justify-center mt-10">
    <div class="grid grid-cols-2 gap-8">
      <div class="w-full max-w-2xl p-8 bg-[#FFF5A7] rounded-mg shadow-lg">
        <h2 class="text-lg font-semibold mb-4">{{moment.title}}</h2>
        <p class="text-gray-600 leading-relaxed">
          {{moment.details}}
        </p>
        <div class=" text-black p-4 md:flex justify-between items-center " >
    <div class="flex items-center">
        <router-link :to="{ name: 'singleitem', params: { id: moment._id}}" class="text-[#5271FF]">view deatils</router-link>
    </div>

    <ul class="md:flex md:items-center md:mx-15">
        <li class="md:mx-4">
            <h6 class="text-[#B2B2B2]">{{ moment.createdAtslice(0,10)}}</h6>
            
        </li>
        <li class="md:mx-4">
            <h6>{{ moment.updateAt.slice(0,10)}}</h6>
            
        </li>
    </ul>
  </div>
      </div>
      </div>
    
        <div class="flex justify-center mt-10">
    <div class="grid grid-cols-2 gap-8">
      <div class="w-full max-w-2xl p-8 bg-[#FFF5A7] rounded-mg shadow-lg">
        <h2 class="text-lg font-semibold mb-4">{{moment.title}}</h2>
        <p class="text-gray-600 leading-relaxed">
          {{moment.details}}
        </p>
        <div class=" text-black p-4 md:flex justify-between items-center " >
    <div class="flex items-center">
        <router-link :to="{ name: 'singleitem', params: { id: moment._id}}" class="text-[#5271FF]">view deatils</router-link>
    </div>

    <ul class="md:flex md:items-center md:mx-15">
        <li class="md:mx-4">
            <h6 class="text-[#B2B2B2]">{{ moment.createdAtslice(0,10)}}</h6>
            
        </li>
        <li class="md:mx-4">
            <h6>{{ moment.updateAt.slice(0,10)}}</h6>
            
        </li>
    </ul>
  </div>
      </div>
      </div>
    
        <div class="flex justify-center mt-10">
    <div class="grid grid-cols-2 gap-8">
      <div class="w-full max-w-2xl p-8 bg-[#FFF5A7] rounded-mg shadow-lg">
        <h2 class="text-lg font-semibold mb-4">{{moment.title}}</h2>
        <p class="text-gray-600 leading-relaxed">
          {{moment.details}}
        </p>
        <div class=" text-black p-4 md:flex justify-between items-center " >
    <div class="flex items-center">
        <router-link :to="{ name: 'singleitem', params: { id: moment._id}}" class="text-[#5271FF]">view deatils</router-link>
    </div>

    <ul class="md:flex md:items-center md:mx-15">
        <li class="md:mx-4">
            <h6 class="text-[#B2B2B2]">{{ moment.createdAtslice(0,10)}}</h6>
            
        </li>
        <li class="md:mx-4">
            <h6>{{ moment.updateAt.slice(0,10)}}</h6>
            
        </li>
    </ul>
  </div>
      </div>
      </div>

      
</div>
</div>

</div>
 <div class="flex items-center justify-center mt-10 mb-24">
        <button class="bg-[#5271ff] text-white py-4 px-20 rounded-[10px] focus:outline-none focus:shadow-outline" type="button">
          Load More
        </button>
      
      </div>
    </div>
    </div>
    </div>
    </div>
<h2 v-if="!user">Login to view page</h2>

      <Footer1 />
</template>

<script>


import Footer1 from '../../components/Footer1.vue'
import Header2 from '../../components/Header2.vue'
import axios from 'axios'

import { mapGetters } from 'vuex'


export default {

  name: 'bucketlist',
    components: {
     Footer1,
     Header2,
  },

  data() {
    return{
    moments: [],
    authIsReady: false
    }
  },

  async created () {
  const response = await axios.get('users/me')
  const data = response.data.data[0]
  this.moments = data.moments

  this.$stor.dispatch('user', data)
  this.authIsReady = this.$store.state.authIsReady
},

computed: {
  ...mapGetters(['user'])
},
}


</script>