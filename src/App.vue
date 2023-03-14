<template>
<div class="container">

 </div>
 <router-view />
</template>

<script>
import bucketlist from './views/bucketlist.vue'
import Login from './views/login.vue'
import singleitem from './views/singleitem.vue'
import additem from './views/additem.vue'
import edititem from './views/edititem.vue'
import register from './views/register.vue'

export default {
    components: {
        Login,
        bucketlist,
        singleitem,
        additem,
        edititem,
        register,
        
    },
}
</script>


