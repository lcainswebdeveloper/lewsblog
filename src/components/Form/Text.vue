<template>
    <input type="text" :value="value" @input="$emit('input', $event.target.value)" class="form-control">        
</template>
<script>
    export default{
        props:{
            fieldName:{required:true},
            value:{}
        }
    }
</script>
