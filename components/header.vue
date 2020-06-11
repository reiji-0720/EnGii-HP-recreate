<template>
    <div class="headerContainer">
        <img src="~/assets/EngiiLogoNew.png" class="headerLogo" width="15%">
        <div class="headerMenue">
            <p>NEWS</p>
            <p>SERVICE</p>
            <p>INFLUENCER</p>
            <p>ABOUT</p>
            <p>CONTACT</p>
            <p>MEMBER</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.headerContainer {
    background-color: #ffff;
    display: flex;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 25px;
}

.headerLogo {
    margin: 0 50px 0 70px;
}

.headerMenue {
    display: flex;
}

.headerMenue p {
    margin: 7px 17px 0 17px;
}
</style>