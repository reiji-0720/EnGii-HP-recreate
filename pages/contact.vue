<template>
    <div class="main">
        <contactHeader />
        <div class="cotactContainer">
          <p class="explain">EnGiiについてご相談やご質問などがある方は<br>
            下記の電話番号かお問い合わせフォームよりお問い合わせください。</p>
          <div class="form">
          <form action="https://docs.google.com/forms/u/1/d/e/1FAIpQLScp65y3TPoo0lu4EU4wCzYBghCQVIcUg-AIKFDCO_W0ddg9Mg/formResponse">
            <div class="formBox genre">
              <div class="text">
              <label for="genre"class="adjustP">お問い合わせジャンル</label>
              </div>
              <input id="genre"type="text"name="entry.1349348887">
            </div>
            <div class="formBox name">
            <div class="text">
              <label for="name"adjustP>お名前</label>
              </div>
              <input id="name"type="text"name="entry.1266804582">
            </div>
            <div class="formBox nameFurigana">
            <div class="text">
              <label for="nameFurigana"adjustP>お名前（フリガナ）</label>
              </div>
              <input id="nameFurigana"type="text"mame="entry.588093518">
            </div>
            <div class="formBox tel">
            <div class="text">
              <label for="tel"adjustP>電話番号</label>
              </div>
              <input name="entry.880583967"id="tel"type="tel"pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" placeholder="090-1234-5678">
            </div>
            <div class="formBox mail">
            <div class="text">
              <label for="email"adjustP>メールアドレス</label>
              </div>
              <input  placeholder="info@sample.com"pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" type="email" name="entry.1756975779"id="email">
            </div>
            <div class="formBox content">
            <div class="text">
              <label for="content"adjustP>お問い合わせ内容</label>
              </div>
              <textarea name="entry.1417750318"id="content"rows="20"cols="60" ></textarea>
            </div>
            <div class="submit">
              <button type="submit" value="送信" class="btn-submit bg-mainColor">送信</button>
            </div>
            </form>
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