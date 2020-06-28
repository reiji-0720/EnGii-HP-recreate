<template>
   <div class="test">
      <div class="contact-title">
          <p>{{message}}</p>
      </div>
    </div>
</template>
<script>
export default {
        props:['message']
}
</script>
<style scoped>
.test{
    height:300px;
    width:100%;
    background-color:orange;
}
.contact-title{
    color:white;
    font-size:30px;
    margin-top:100px;
    text-align: center;
}
</style>