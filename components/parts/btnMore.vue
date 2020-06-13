<template>
    <div class="more">
        more<Triangle />
    </div>
</template>
<script>
import Triangle from '~/components/Triangle.vue'


export default {
  components: {
    Triangle
  }
};
</script>
<style scoped>

.more{
        padding: 10px;
      text-align: center;
	  display: inline-block;
      vertical-align: middle;
      /* height: 60px; */
      width: 159.89px;
      background-color: #66bad7;
      text-decoration: none;
      color: #FFFFFF;
      font-size: 16px;
    }
</style>