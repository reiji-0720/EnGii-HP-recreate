<template>
    <div class="main">
        <contactHeader />
        <div class="cotactContainer">
          <p class="explain">EnGiiについてご相談やご質問などがある方は<br>
            下記の電話番号かお問い合わせフォームよりお問い合わせください。</p>
          <div class="form">
            <form
              id="formApp"
              @submit="((show=true)||(this.rset()))"
              action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSd9P0cnQTmkVHGT6lLnmWuXGlFrdtyJRwSTwq2XDRPT2vrFCg/formResponse" 
              method="post"
              target="dummy"
            >
              <iframe name="dummy" style="display:none;"></iframe>
              <div class="formBox genre">
                <div class="text">
                  <label for="genre" class="adjustP" >お問い合わせジャンル</label>
                </div>
                <div class="inputBox">
                  <input
                    name="entry.398878031"
                    id="genre"
                    type="text"
                    pattern="[^\x20-\x7E]*"
                    v-model="userInfo.genre"
                    required
                  >
                </div>
              </div>
              <div class="formBox name">
                <div class="text">
                  <label for="name" class="adjustP">お名前</label>
                </div>
                <div class="inputBox">
                  <input
                    name="entry.1191593904"
                    id="name"
                    type="text"
                    pattern="[^\x20-\x7E]*"
                    v-model="userInfo.name"
                    required
                  >
                </div>
              </div>
              <div class="formBox nameFurigana">
                <div class="text">
                  <label for="nameFurigana" adjustP>お名前（フリガナ）</label>
                </div>
                <div class="inputBox">
                  <input
                    name="entry.1441505981"
                    id="nameFurigana"
                    type="text"
                    pattern="(([\u30A1-\u30F6]*)||([\uFF66-\uFF9F]*))"
                    v-model="userInfo.nameFurigana"
                    required
                  >
                </div>
              </div>
              <div class="formBox tel">
                <div class="text">
                  <label for="tel" adjustP>電話番号</label>
                </div>
                <div class="inputBox">
                  <input
                    name="entry.1537312469"
                    id="tel"
                    type="tel"
                    v-model="userInfo.tel" pattern="(([0-9]{11})||[0-9]{10}))"
                    required
                  >
                </div>
              </div>
              <div class="formBox mail">
                <div class="text">
                  <label for="email" adjustP>メールアドレス</label>
                </div>
                <div class="inputBox">
                  <input
                    name="entry.1059388771"
                    id="email"
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                    v-model="userInfo.email"
                    required
                  >
                </div>
              </div>
              <div class="formBox content">
                <div class="text">
                  <label for="content" adjustP>お問い合わせ内容</label>
                </div>
                <div class="inputBox">
                  <textarea
                  name="entry.770171748"
                  v-model="userInfo.content"
                  id="content"
                  rows="20"
                  cols="60"
                  required
                  >
                  </textarea>
                </div>
              </div>
              <div class="submit" >
                <p>
                  <input
                    type="submit"
                    value="送信"
                    class="btnSubmit bg-mainColor"
                  >
                </p>
              </div> 
            </form>
          </div>
        </div>
        <modal @modal="show=false" v-if="show" />
    </div>
</template>
<script>
import contactHeader from "~/components/contact/contact-header";
import modal from "~/components/parts/contactModal.vue";
import contactBox from "~/components/contact/contact-box";
export default {
  components: {
    contactHeader,
    modal,
    contactBox,
  },
  data(){
    return{
      errors: [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      userInfo: {
        genre:null,
        name:null,
        nameFurigana:null,
        tel: null,
        email: null,
        content: null
      },
   show:false,
    }
  },
}
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
.inputBox{
  width:50%;
}
input,
textarea{
  margin:0 auto;
  right:0;
  float:top;
  width:100%;
  border:none;
  background-color:#EDF8FC;
}
input{
  height:50px;

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
  cursor:pointer;
}
/* inputの要素の幅を指定 */

.genre{
  margin-top:100px;
}
/* ボタンの装飾 */
.btnSubmit{
  background-color:#3bb2db;
  cursor:pointer;
  color:white;
  padding: 10px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  /* height: 60px; */
  width: 159.89px;
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;

}

/* NGなら赤くする */
form input:focus:invalid {
  border : tomato 2px solid;
}
/* 操作中、入力値が正しい場合は、不正エラーを消す */
form input:focus:valid + .error .invalid {
  display : none;
}
/* OKなら、その他のテキストボックス以外を緑にする */
form input:valid:not(:last-child) {
  border : seagreen 2px solid;
}
/* errorメッセージを赤くする */
.error{
  color:red;
}
@media screen and (max-width: 1000px) {
  .btn-submit {
    font-size: 13px;
  }
}
@media screen and (min-width:1366px) {
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
    font-size:1.0rem;
    letter-spacing:0.2em;
  }
  .form{
  margin-top:100px;
}
}

@media screen and (max-width:730px){
  .explain{
   margin-top:50px;
    font-size:0.7rem;
    letter-spacing:0.2em;
  }
.form{
  margin-top:70px;
}
  .formBox{
    display:block;
  }
  .text{
    width:100%;
  }
  input,textarea{
    width:100%;
  }
  input{
    height:50px;
  }
.inputBox{
  width:100%;
}
  .btnSubmit{
    margin-top:100px;
  }
}
</style>