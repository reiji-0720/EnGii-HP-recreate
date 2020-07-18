
<template>
 <div class="modal">
 

   <div class="modal-wrap">
    <div class="modal-thanks">
    <p class="text-main">回答ありがとうございました</p>
    <p class="subText">回答いただいた内容は無事送信されました</p>
    </div>
     <nuxt-link 
       v-bind="$attrs"
       class="btnCloseModal"
       
       @click="$emit('modal')"
       
    >
       <div class="btn-close">
       <p>閉じる</p>
       </div>
     </nuxt-link>
   </div>

 </div>
</template>

<style  scoped>
 .modal {
     padding-top:200px;
   position: fixed;
   top: 0;
   width: 100%;
   height: 100vh;
   background-color:rgba(170,170,170,0.7);

   z-index:100000;
 }
 .modal-wrap {
     background-color:#EDF8FC;
     width:500px;
     margin: 0 auto;
     height: 300px;
     text-align:center;
     border-radius:5px;
     border: solid 2px #3bb2db;
}
.text-main{
    font-size:30px;
    margin-bottom:10px;
}
.modal-thanks{
    padding-top:80px;

}
.btnCloseModal{
    margin-top:50px;
    padding: 10px 0;
    font-size:20px;
   
    cursor:pointer;
    background-color:#3bb2db;
    border-radius: 5px;
    color:white;
    border:none;
    width:50%;
}
.btn-close{
    border:none;
}

@media screen and (max-width: 600px){
     .modal-wrap {
        width:300px;
    }
    .text-main{
        font-size:20px;
        font-weight:600;
        margin-bottom:10px;
    }
    .subText{
        margin-top:20px;
        font-size: 5px;
        
    }
    .btnCloseModal{
    margin-top:50px;
    padding: 10px 0;
    font-size:12px;
   
    cursor:pointer;
    background-color:#3bb2db;
    border-radius: 5px;
    color:white;
    border:none;
    width:50%;
}
}

</style>