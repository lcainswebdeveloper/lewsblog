<template>
    <div>
        <utility-modal v-if="authenticated && showModal == true" @close="showModal = false">
            <h5 slot="header" class="modal-title">Add Post</h5>
        </utility-modal>
        <div v-if="authenticated" @click="showModal = true" class="btn btn-info">Add Post</div>
    </div>        
</template>
<script>
export default{
    computed:{
        authUser(){
            return this.$store.state.authUser;
        },
        authenticated(){
            return this.$store.state.authenticated;
        }
    },
    data(){
        return{
            showModal:false
        }
    }
}
</script>
