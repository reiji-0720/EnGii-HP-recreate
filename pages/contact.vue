<template>
    <div class="main">
        <contactHeader />
        <div class="cotactContainer">
          <p class="explain">EnGiiについてご相談やご質問などがある方は<br>
            下記の電話番号かお問い合わせフォームよりお問い合わせください。</p>
          <div class="form">
            <div class="formBox genre">
              <p class="adjustP"></p>
              <input type="text">
            </div>
            <div class="formBox name">
              <p adjustP></p>
              <input type="text">
            </div>
            <div class="formBox nameFurigana">
              <p adjustP></p>
              <input type="text">
            </div>
            <div class="formBox tel">
              <p adjustP></p>
              <input type="text">
            </div>
            <div class="formBox mail">
              <p adjustP></p>
              <input type="text">
            </div>
            <div class="formBox content">
              <p adjustP></p>
              <textarea type="text"></textarea>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import contactHeader from "~/components/contact/contact-header";

export default {
  components: {
    contactHeader
  }
};
</script>
<style scoped>
.formBox{
  display:flex;
}
.adjustP{
  width:50%;
}
input,
textarea{
  width:40%;
}

</style>