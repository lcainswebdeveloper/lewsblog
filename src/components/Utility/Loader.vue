<template>
    <div class="loading-spinner-container">
        <div class="loading-spinner"></div>
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name:"UtilityLoader",
        props:{

        }
    }
</script>
<style>
    .loading-spinner-container{
        text-align:center;
    }
    .loading-spinner {
        border: 5px solid #f3f3f3; /* Light grey */
        border-top: 5px solid #3d3d3d; /* Blue */
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin:auto;
        animation: spin 2s linear infinite;
        
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>

