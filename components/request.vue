<template>
  <div class="requestContainer">
    <div class="request">
      <p>依頼はこちら</p>
    </div>
  </div>
</template>

<style>
.requestContainer {
  text-align: center;
  margin: auto;
}

.request {
  margin: auto;
  background-color: #39acd8;
  width: 15%;
}

.request p {
  font-size: 1.3rem;
  color: #ffff;
  padding: 8px 0;
}

@media screen and (max-width: 1000px) {
  .request p {
    font-size: 1rem;
    color: #ffff;
    padding: 8px 0;
  }
}

@media screen and (max-width: 740px) {
  .request {
    margin: auto;
    background-color: #39acd8;
    width: 30%;
  }
  .request p {
    font-size: 1.3rem;
    color: #ffff;
    padding: 8px 0;
  }
}

@media screen and (max-width: 500px) {
  .request {
    margin: auto;
    background-color: #39acd8;
    width: 35%;
  }
  .request p {
    font-size: 1.0rem;
    color: #ffff;
    padding: 8px 0;
  }
}
</style>