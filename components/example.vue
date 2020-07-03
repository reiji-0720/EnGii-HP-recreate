<template>
  <div class="productionExampleContainer">
    <div class="productionExample">
      <p>制作事例</p>
    </div>
  </div>
</template>

<style>
.productionExampleContainer {
  text-align: center;
  margin: auto;
}

.productionExample {
  margin: auto;
  background-color: #39acd8;
  width: 15%;
}

.productionExample p {
  font-size: 1.3rem;
  color: #ffff;
  padding: 8px 0;
}

@media screen and (max-width: 1000px) {
  .productionExample p {
    font-size: 1rem;
    color: #ffff;
    padding: 8px 0;
  }
}

@media screen and (max-width: 740px) {
  .productionExample {
    margin: auto;
    background-color: #39acd8;
    width: 30%;
  }
  .productionExample p {
    font-size: 1.3rem;
    color: #ffff;
    padding: 8px 0;
  }
}

@media screen and (max-width: 500px) {
  .productionExample {
    margin: auto;
    background-color: #39acd8;
    width: 35%;
  }
  .productionExample p {
    font-size: 1.0rem;
    color: #ffff;
    padding: 8px 0;
  }
}
</style>