<template>
    <div class="main">
        <div class="header">
            <div class="box headerBoxLeft">
                <div class="boxAdjust">
                    <img src="~/assets/icon01-contact.png">
                    <h1>CONTACT</h1>
                </div>
            </div>
            <div class="box headerBoxRight">
                <img src="~/assets/contact-main.jpg">
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.main{
    margin-top:125px;
}
.header{
    display:flex;
}
.box{
    width:50%;
}
.boxAdjust{
    width:50%;
    margin:0 auto;
    margin-top:100px;
}
.boxAdjust img{
    width:40%;
}
.boxAdjust h1{
    font-size:54px;
}

.headerBoxRight img{
    width:100%;
}

@media screen and (max-width:1336px){
    .boxAdjust h1{
        font-size:40px;
    }
}
@media screen and (max-width:1000px){
    .main{
        margin-top:100px;
    }
    .boxAdjust h1{
        font-size:35px;
    }
}
@media screen and (max-width:730px){
    .main{
        margin-top:75px;
    }
    .boxAdjust{
        margin-top:50px;
        margin-left:25%;
    }
    .boxAdjust h1{
        font-size:25px;
    }
}
@media screen and (max-width:400px){
    .boxAdjust{
        margin-top:30px;
        margin-left:15%;
    }
    .boxAdjust h1{
        font-size:20px;
    }
    
}
</style>