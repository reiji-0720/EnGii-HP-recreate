<template>
    <div class="main">
        <contactHeader />
        <div class="cotactContainer">
          <p class="explain">EnGiiについてご相談やご質問などがある方は<br>
            下記の電話番号かお問い合わせフォームよりお問い合わせください。</p>
          <div class="form">
          <form action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSd9P0cnQTmkVHGT6lLnmWuXGlFrdtyJRwSTwq2XDRPT2vrFCg/formResponse" target="dummy">
          <iframe name="dummy" style="display:none;"></iframe>
            <div class="formBox genre">
              <div class="text">
              <label for="genre" class="adjustP" >お問い合わせジャンル</label>
              </div>
              <input id="genre"  type="text" v-model="userInfo.genre" name="entry.398878031">
             <span v-show="!validation.genre" class="text-warning">ジャンルを入力してください</span>
            </div>
            <div class="formBox name">
            <div class="text">
              <label for="name" adjustP>お名前</label>
              </div>
              <input id="name"  type="text" v-model="userInfo.name" name="1191593904">
              <span v-show="!validation.userName" class="text-warning">ユーザー名を入力してください</span>

            </div>
            <div class="formBox nameFurigana">
            <div class="text">
              <label for="nameFurigana" adjustP>お名前（フリガナ）</label>
              </div>
              <input id="nameFurigana"  type="text" v-model="userInfo.nameFurigana" name="entry.1441505981">
            <span v-show="!validation.userNameFurigana" class="text-warning">全角カタカナで入力してください</span>
            </div>
            <div class="formBox tel">
            <div class="text">
              <label for="tel" adjustP>電話番号</label>
              </div>
              <input name="entry.1537312469"  id="tel" type="tel" v-model="userInfo.tel" pattern="[0-9]{11}" placeholder="090-1234-5678">
            <span v-show="!validation.tel" class="text-warning">Telは数値で入力してください</span>
            </div>
            <div class="formBox mail">
            <div class="text">
              <label for="email" adjustP>メールアドレス</label>
              </div>
              <input  placeholder="info@sample.com"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" type="email" v-model="userInfo.email" name="entry.1059388771" id="email">
              <span v-show="!validation.Email" class="text-warning">正しいEmailを入力してください</span>
            </div>
            <div class="formBox content">
            <div class="text">
              <label for="content" adjustP>お問い合わせ内容</label>
              </div>
              <textarea name="entry.770171748" v-model="userInfo.content" id="content" rows="20" cols="60" ></textarea>
             <span v-show="!validation.content" class="text-warning">お問い合わせ内容を入力してください</span>
            </div>
            <div class="submit" >
              <button @click="analize" type="submit" value="送信" class="btn-submit bg-mainColor" >送信</button>

              <!-- @clickのところにもう一つの関数(analize)を呼び出して、@click="show=true"を判別して表示させる。 -->
              <!-- <button class="btn-submit bg-mainColor" @click="checkForm">check</button>
              <p>{{ Validation.result }}</p>
              <button     class="btn-submit bg-mainColor"  @click="show=true">送信</button> -->
            </div>
            </form>
            <contactBox message="Hello Vue.js"></contactBox>
          </div>
        </div>
        <modal @modal="show=false" v-if="show" />
    </div>
</template>
<script>
import contactHeader from "~/components/contact/contact-header";
import modal from "~/components/parts/contactModal.vue";
import contactBox from "~/components/contact/contact-box"
export default {
  components: {
    contactHeader,
    modal,
    contactBox,
  },
  data(){
    return{
      genre: null,
      count : 0,
      inputCase:[
        '',
        '',
        '',
        '',
        '',
        ''
      ],
      userInfo: {
        genre:'',
        name:'',
        nameFurigana:'',
        tel: '',
        email: '',
        content: ''
      },
   show:false,
   
  validation:{
   lengthError:true,
   genre:true,
   userName:true,
  userNameFurigana:true,
  Email:true,
  tel:true,
  content:true
  }
   
  //  Validation:{
  //    result:"",
  //  }
    }
  },
  //methods:{
    // checkForm(){
    //   var mailBool = false;
    //   var arrayFalse = [];
    //   var falseNum = '';
    //   for (let i=0; i <= 5; i++){
    //     if(!this.inputCase[i]){
    //       var falseCount = true;
    //       arrayFalse[i]= i;
    //     }
    //   }
    //   if(falseCount == true){
    //     falseNum = arrayFalse.join('')
    //   this.Validation.result= falseNum+"を入力してください"
    //   }else{
    //     this.Validation.result= "おけまる"
    //   }
    //   }
    // },
    computed: {
      analize:function(){
        if(this.validation == false){
          if(!this.validateGenre){
            genre = false;
          } else if(!this.validateuserName){
            userName=false;
          }else if(!this.validateuserNameFurigana){
            userNameFurigana = false;
          }else if(!this.validateEmail){
            Email = false;
          }else if(!this.validateTel){
            tel=false;
          }else{
            content = false;
          }
          return false;
        } else {
          return true
        }
      },
      validation: function () {
        return (this.validateGenre&&
                this.validateuserName&&
                this.validateuserNameFurigana&&
                this.validateTel &&
                this.validateEmail &&
                this.validateContent);
      },
      validateGenre:function(testCount ){
        if (this.userInfo.genre.length === 0){
          testCount =1;
          return false,testCount
        }
        else{
        return true;
        }
      },
      validateuserNameFurigana:function(){
        if (this.userInfo.nameFurigana.length === 0) {
          return (false,
          testCount = 2)
        } else{
        var pattern = /^[\u30a1-\u30f6]+$/;//全角カタカナ
        return pattern.test(this.userInfo.nameFurigana.trim());
        }
      },
      validateContent:function(){
        if (this.userInfo.content.length === 0) {
          return false;
        } else {
        var pattern = /^[^\x01-\x7E\xA1-\xDF]+$/;//全角文字（ひらがな・カタカナ・漢字 etc.）
        return pattern.test(this.userInfo.genre.trim());
        }
      },
      validateTel: function () {
        var pattern = /^\d+$/; // 1文字以上の整数のみ許容
        return pattern.test(this.userInfo.tel.trim());
      },
      validateEmail: function () {
        var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(this.userInfo.email);
      },
      validateUserName: function () {
        if (this.userInfo.name.length === 0) {
          return false;
        } else {
          var pattern = /^[^\x01-\x7E\xA1-\xDF]+$/;//全角文字（ひらがな・カタカナ・漢字 etc.）
        return pattern.test(this.userInfo.name.trim());
        }
      }
    }
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
  cursor:pointer;
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
    font-size:13px;
    letter-spacing:0.2em;
  }
  .form{
  margin-top:100px;
}
}

@media screen and (max-width:730px){
  .explain{
   margin-top:50px;
    font-size:5px;
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

  .btn-submit{
    margin-top:100px;
  }
}
@media screen and (max-width:400px){
}
</style>