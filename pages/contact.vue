<template>
    <div class="main">
        <contactHeader />
        <div class="cotactContainer">
          <p class="explain">EnGiiについてご相談やご質問などがある方は<br>
            下記の電話番号かお問い合わせフォームよりお問い合わせください。</p>
          <div class="form">
            <div class="formBox genre">
              <div class="text">
              <p class="adjustP">お問い合わせジャンル</p>
              </div>
              <input type="text">
            </div>
            <div class="formBox name">
            <div class="text">
              <p adjustP>お名前</p>
              </div>
              <input type="text">
            </div>
            <div class="formBox nameFurigana">
            <div class="text">
              <p adjustP>お名前（フリガナ）</p>
              </div>
              <input type="text">
            </div>
            <div class="formBox tel">
            <div class="text">
              <p adjustP>電話番号</p>
              </div>
              <input type="text">
            </div>
            <div class="formBox mail">
            <div class="text">
              <p adjustP>メールアドレス</p>
              </div>
              <input placeholder="サンプルテキスト" type="text">
            </div>
            <div class="formBox content">
            <div class="text">
              <p adjustP>お問い合わせ内容</p>
              </div>
              <textarea rows="20"cols="60" ></textarea>
            </div>
            <div class="submit">
              <button class="btn-submit bg-mainColor">送信</button>
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
.cotactContainer{
  width:80%;
  margin: 0 auto;
}
.explain{
  margin-top:100px;
  font-size:22px;
  letter-spacing:0.2em;
}
.form{
  margin-top:200px;
}
.formBox{
  margin-bottom: 80px;
  display:flex;
  width: 100%;
}
.adjustP{
  width:100%;
}
.text{
  width:50%;
  height:40px;
}
input,
textarea{
  margin:0 auto;
  width:40%;
  float:right;
  right:0;
  float:top;
  border:none;
  background-color:#EDF8FC;
}
.textarea{

}
.submit{
  text-align:center;
  margin-bottom:100px;
}
.bg-mainColor{

}
.btn-submit {
  padding: 10px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  /* height: 60px; */
  width: 159.89px;
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;
  border:none;
}

@media screen and (max-width: 1000px) {
  .btn-submit {
    font-size: 13px;
  }
}
@media screen (min-width:1366px){
  .cotactContainer{
    max-width:1366px;
 
  }
}
@media screen and (max-width:1366px){
  .explain{
  margin-top:100px;
  font-size:18px;
  letter-spacing:0.2em;
}
}
@media screen and (max-width:1000px){
  .explain{
  margin-top:100px;
  font-size:13px;
  letter-spacing:0.2em;
}
}
@media screen and (max-width:730px){
    .explain{
  margin-top:100px;
  font-size:8px;
  letter-spacing:0.2em;
}
}
@media screen and (max-width:500px){
      .explain{
  margin-top:100px;
  font-size:5px;
  letter-spacing:0.2em;
}
}
@media screen and (max-width:400px){
  
}
</style>