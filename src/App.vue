<template>
<div class="container">

 </div>
 <router-view />
</template>

<script>
import bucketlist from './views/moment/bucketlist.vue'
import Login from './views/login.vue'
import singleitem from './views/moment/singleitem.vue'
import additem from './views/moment/additem.vue'
import edititem from './views/moment/edititem.vue'
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

    data() {
        return {
            user: null
        }
    },

    async created() {
        const response = await axios.get('user');

        this.$store.dispatch('user', response.data);
    }
}
</script>


