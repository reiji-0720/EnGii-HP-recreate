
<template>
 <div class="modal">


   <div class="modal-wrap">
    <div class="modal-thanks">
    <p>回答ありがとうございました</p>
    </div>
     <button class="btnCloseModal" @click="$emit('modal')"> 
       <div class="btn-close">
       <p>閉じる</p>
       </div>
     </button>
   </div>
 </div>
</template>

<style  scoped>
 .modal {
   position: fixed;
   top: 100px;
   width: 100%;
   height: 50vh;

   z-index:100000;
 }
 .modal-wrap {
     background-color:#3bb2db;
     width:50%;
     margin: 0 auto;
     height: 100%;
     text-align:center;
}
.btnCloseModal{
    margin-top:100px;
    padding: 20px 0;
    font-size:30px;
    font-weight:600;
    cursor:pointer;
    background-color:white;
    border-radius: 15px;
    border:none;
    width:50%;
}
.btn-close{
    border:none;
}

</style>