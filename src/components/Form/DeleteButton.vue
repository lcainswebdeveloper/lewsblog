<template>
    <div @click="deleteRecord" class="btn btn-danger delete-record-button"><i class="fas fa-trash-alt"></i></i></div>    
</template>
<script>
export default {
    props:{
        deleteUrl:{required:true}
    },
    methods:{
        deleteRecord(){
            Flash.confirm("Are you sure you wish to delete this?")
                .then(() => {
                    this.$emit('delete-start');
                    axios.post(this.deleteUrl, {
                        "api_token":this.$store.state.authToken
                    })
                    .then(response => {
                        Flash.success(response.data);
                        Event.$emit('refresh-categories');
                        Event.$emit('refresh-posts');
                        this.$emit('close');
                        this.$emit('delete-success');
                        this.$router.push('/category/all');
                    })
                    .catch(error => {
                        Flash.error(error.response.data);
                        this.$emit('close');
                        this.$emit('delete-error');
                    })
                })
        }
    }
}
</script>
