<template>
    <div>
        <utility-modal v-if="authenticated && showModal == true" @close="showModal = false">
            <h5 slot="header" class="modal-title">{{buttonText}}</h5>
            <category-form slot="body" @close="showModal = false" :active-record="activeRecord"></category-form>
        </utility-modal>
        <div v-if="authenticated" @click="showModal = true" class="category-button btn btn-info">
            <slot name="btn-text">{{buttonText}}</slot>
        </div>
    </div>        
</template>
<script>
export default{
    props:{
        activeRecord:{}
    },
    computed:{  
        buttonText(){
            if(!this.editingMode){
                return 'Add Category';
            }else{
                return 'Edit Category'
            }
        },
        editingMode(){
            return typeof this.activeRecord == 'object';
        },
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
