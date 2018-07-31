<template>
    <div class="form-group">
        <label>{{labelTitle}}</label>
        <slot></slot>
        <form-validation-error :form-errors="formErrors" :error-key="fieldName"></form-validation-error>
    </div>
</template>
<script>
    export default{
        props:{
            labelTitle:{required:true},
            formErrors:{default:Object},
            fieldName:{required:true},
        }
    }
</script>
