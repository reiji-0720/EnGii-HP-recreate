<template>
  <span class="triangle"></span>
</template>

<script>
export default {};
</script>

<style>
.triangle {
  display: inline-block;
  border-left: solid 30px #ffffff;
  border-top: solid 9px transparent;
  border-bottom: solid 9px transparent;
  vertical-align: middle;
  margin-left: 15px;
}
@media screen and (max-width: 1000px) {
  .triangle {
    display: inline-block;
    border-left: solid 15px #ffffff;
    border-top: solid 4.5px transparent;
    border-bottom: solid 4.5px transparent;
    vertical-align: middle;
    margin-left: 15px;
  }
}
</style>