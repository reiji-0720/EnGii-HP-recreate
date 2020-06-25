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
    margin-top:175px;
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
</style>