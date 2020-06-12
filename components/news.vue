<template>
    <div class="newsContainer">
        <div class="newsList" v-for="elem in lists" :key="elem.name">
            <p class="newsText">{{elem.name}}</p>
        </div>
    </div>
</template>

<script>
import Vue from "vue";

export default {
    data() {
    return {
      lists: [
        { name: "NEWS", date:'2020.06.07', title:'お知らせが入ります。' },
        { name: "NEWS", data:'2020.06.03', title:'お知らせが入ります。' },
        { name: "NEWS", data:'2020.06.01', title:'HPリニューアルのお知らせ' }
      ]
    };
  }
}
</script>

<style>

</style>