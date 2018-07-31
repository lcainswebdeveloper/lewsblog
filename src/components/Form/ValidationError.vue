<template>
    <div>
        <div v-if="formErrors.has(errorKey)" class="help-block">
            <strong v-text="formErrors.get(errorKey)"></strong>
        </div>
    </div>
</template>
<script>
    export default{
        name:"FormValidationError",
        props:{
            formErrors:{required:true},
            errorKey:{required:true}
        }
    }
</script>
<style>
    .help-block{
        text-align:right;
    }
    .help-block strong{
        color:red!important;
        font-weight:bold;
        font-size:12px;
    }
</style>
