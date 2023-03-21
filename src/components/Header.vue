<template>
  <div class="bg-[#008289] text-white p-4 md:flex justify-between items-center border-[#707070] " >
    <div class="flex items-center md:mx-10 italic font-bold">
        <h1>Eventful Moments.</h1>
    </div>

    <ul class="md:flex md:items-center md:mx-10">
        <li class="md:mx-4">
            <router-link to="/">Login</router-link>
            
        </li>
        <li class="md:mx-4">
            <router-link to="/register">Register</router-link>
            
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'Header',
 
}
</script>