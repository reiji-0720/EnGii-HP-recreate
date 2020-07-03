<template>
  <div class="applicationImgContainer">
    <div class="applicationImgTop">
      <img src="~/assets/neopaIcon.png" width="17%" />
    </div>
    <div class="applicationImgMain">
      <img src="~/assets/neopa.png" width="20%" />
      <img src="~/assets/neopa1.png" width="20%" />
      <img src="~/assets/neopa2.png" width="20%" />
    </div>
    <div class="applicationImgMain">
      <img src="~/assets/neopa3.png" width="20%" />
      <img src="~/assets/neopa4.png" width="20%" />
      <img src="~/assets/neopa5.png" width="20%" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.applicationImgContainer {
  margin: 10% auto;
  width: 82%;
  text-align: center;
  border: solid #4d4d4d 1px;
}

.applicationImgTop {
  margin: 5% auto 0 auto;
}

.applicationImgMain img {
  margin: 5% 3%;
}

@media screen and (max-width: 730px) {
  .applicationImgContainer {
    margin: 10% auto;
    width: 82%;
    text-align: center;
    border: solid #4d4d4d 1px;
  }

  .applicationImgTop {
    margin: 5% auto 0 auto;
  }

  .applicationImgTop img{
      margin-left: 3%;
    width: 30%;
  }

  .applicationImgMain img {
    margin: 5% 3%;
    width: 45%;
  }
}
</style>