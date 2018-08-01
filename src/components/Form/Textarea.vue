<template>
    <textarea name="" id="" cols="30" rows="5" @input="$emit('input', $event.target.value)" class="form-control">
        {{value}}
    </textarea>     
</template>
<script>
    export default{
        props:{
            fieldName:{required:true},
            value:{}
        }
    }
</script>
