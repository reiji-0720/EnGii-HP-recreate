<template>
    <div class="supportContainer">
    <div class="supportTop clearfix">
      <div class="supportTopLeft">
        <div class="supportImg"></div>
      </div>
      <div class="supportTopRight">
        <div class="supportIcon"></div>
        <h2 class="supportText">EnGii support</h2>
        <p class="supportExp">理想の自分、なりたい自分に向けて<br class="sp-br">足踏みしているあなたをサポートしたい</p>
      </div>
    </div>

    <div class="subArea">
      <div class="supportLeftVertical">
        <div class="sp-subAreaBox">
            <div class="inline clearfix sp-index-main">
          <p class="verticalOne">EnGii support</p>
          <div class="border borderOne"></div>
        </div>

        <div class="inline clearfix sp-index-sub">
          <p class="verticalSecond">EnGii media</p>
          <div class="border borderSecond"></div>
        </div>
        </div>
        
      </div>
    </div>
      <div class="E-Chat_E-Ring_container">
        <div class="E-Chat_E-Ring_wrapper">
          <div class="E-Chat-wrapper">
            <img class="E-ChatIcon sp-icon" src="~/assets/サポート　アイコン　 chat.png">
            <h2>E-Chat</h2>
            <p class="underTitle">職種別チャット</p>
            <div class="borderSupport"></div>
            <p>
              E-Chatは興味がある業界や職種の人々と<br>
              コミュニケーションができる<br>
              オープンチャットサービスです。<br>
              業界ならではの話や相談、<br>
              気軽な雑談をすることができます。<br>
            </p>
            <nuxt-link to>
              <btnService class="supportBtn" />
            </nuxt-link>
            
          </div>
          <div class="E-Ring-wrapper">
            <img class="E-RingIcon sp-icon" src="~/assets/サポート　アイコン　 ring.png">
            <h2>E-Ring</h2>
            <p class="underTitle">知識共有</p>
            <div class="borderSupport"></div>
            <p>
              E-Ringは、オンライン上で周りに聞けない<br>
              悩みや疑問に思っていることを質問したり、<br>
              自分の持っている知識を使って<br>
              質問に回答することで、ユーザー同士で<br>
              悩みを解決し合うEnGii独自のサービスです。
            </p>
            <nuxt-link to >
              <btnService class="supportBtn" />
            </nuxt-link>
            
          </div>
        </div>
        <div class="E-Fitness-container">
          <div class="E-Fitness-wrapper">
            <img class="E-FitnessIcon sp-icon" src="~/assets/サポート　アイコン　 fitness.png">
            <h2>E-Fitness</h2>
            <p class="underTitle">ダイエットサポート</p>
            <div class="borderSupport"></div>
            <p>
              ダイエットサポート（1200円〜）<br>
              無理ないダイエットを叶えるE-Fitness！<br>
              1人だとついつい甘えてしまったり、<br>
              どうやったらうまく痩せれるか分からない、運動は苦手、<br>
              などなどダイエットって本当に難しいですよね。<br>
              痩せたいのに痩せれない！そんな人の「痩せたい！」を叶える<br>
              ダイエットサポートE-Fitness。<br>
              代表でもあるサポーターの宮坂が2週間、公式LINEでやり取りするだけ！<br>
              1日の振り返りを夜に10分ほど行います。<br>
              あなたの食生活、生活の仕方にフィードバックすることで<br>
              正しい知識を身につ、1人でもしっかりダイエット<br>
              できるように致します！！詳しいことをお聞きしたい場合は<br>
              コンタクトから公式LINEを追加してください！
            </p>
          </div>
          <div class="review-wrapper">
            <div class="E-Fitness_reviewTitle">
              <h3>Review</h3>
              <img class="sp-reviewIcon" src="~/assets/サポート　アイコン　 レビュー.png">
            </div>
            <div class="borderSupport"></div>
            <div class="review-main">
              <div class="reviewChatWrapper rcwTop">
                <div class="reviewChatBox">
                  <p>
                    １人でやってても、このくらいならいいか。とか、今日はいいやってなってしまってたのが、
                    るいさんが管理してくださってたおかげで、意識が変わって、ちゃんと目標持って
                    ダイエットできました！食べたものとか、運動とか、何か良くて、なにがいけないのかを夜の
                    電話でしっかり教えてくださったり、頑張ってるねって言ってもらったりして、
                    すごいモチベーションも上がったし、自分が今まで知らなかった知識も身につきました。
                    今まではアイス選ぶ時、裏面なんて見なかったのに、るいさんに教えていただいてからは、
                    裏面を見るようになりました！るいさんのダイエットサポートが終わってから、
                    周りにも痩せた？とか、可愛くなったね！って言われて、とても嬉しいです！
                    いまは、成人式に向けて頑張ってます！るいさんは、とても話しやすいし、
                    相談とか質問もしやすくて、私に合ったペースをアドバイスしてくれたので、
                    無理なく痩せることができました。しんどいとか、キツいイメージのダイエットですが、
                    とても楽しく１ヶ月終えることができました！ほんとうにありがとうございました！

                  </p>
                </div>
                <div class="customerLeft">
                  <img src="~/assets/サポート　アイコン　 女性.png">
                  <p>女性</p>
                  <p>10代</p>
                </div>
              </div>
              <div class="reviewChatWrapper rcwMiddle rcwRight">
                <div class="reviewChatBox">
                  <p>
                    私は増えたり減ったりと毎日に差があったり、自分にあったダイエットにたどり着くのに
                    時間がかかり気持ち的にもブルーになりそうになりましたが、るいさん仕事忙しいのに
                    毎日電話して下さりアドバイスして下さって嬉しかったです！初めの体重より
                    1kg以上落とせたことが嬉しかったです！生理前とか体調崩してきちんと
                    最後までできなかったけどダイエットにモチベが上がりました！！
                    HIITも続けたらほんとに速攻効果でてびっくりしたので続けます笑
                    るいさんにサポートしてもらって良かったです！ありがとうございました！
                  </p>
                </div>
                <div class="customerRight">
                  <img src="~/assets/サポート　アイコン　 女性.png">
                  <p>女性</p>
                  <p>20代前半</p>
                </div>
              </div>
              <div class="reviewChatWrapper rcwBottom">
                <div class="reviewChatBox">
                  <p>
                    最初の方は夕食後にお腹減ったり、すごい甘いもの食べたくなったりして辛かったんですけど、
                    食生活変えたら体重どころかお肌にも影響出てきて、そこからは何がなんでもやりきる！！
                    って思いでやってました！るいさんは、こまめに電話してくださってたので
                    すごく身近に感じて、「この人となら頑張れる！」って思ってました！
                    食生活だけじゃなくて、ちょっとした運動を加えるといいって聞いた時も、
                    体を動かすことでリフレッシュになっていたので、ストレスなくここまでやってこれたのは、
                    本当にるいさんのおかげだと思ってます！
                    目標の2キロ減も達成できて、自分的にも体が軽くなったり肌が綺麗になったり、
                    周りに痩せた？って言われることで、すごく自信がつきました！
                    １ヶ月間っていう短い間でしたが、とても濃くて充実してました、
                    ありがとうございました！！！！！
                  </p>
                </div>
                <div class="customerLeft">
                  <img src="~/assets/サポート　アイコン　 女性.png">
                  <p>女性</p>
                  <p>20代前半</p>
                </div>
              </div>
            </div>
            <nuxt-link to >
              <btnService class="supportBtn" />
            </nuxt-link>
          </div>
        </div>
        <div class="E-Start-container">
          <div class="E-Start-wrapper">
            <img class="E-StartIcon sp-icon" src="~/assets/サポート　アイコン　 start.png">
            <h2>E-Start</h2>
            <p class="underTitle">進学・就活サポート</p>
            <div class="borderSupport"></div>
            <p>
              E-start （初回相談無料）<br>
              E-startは、みなさんの進学、就職、転職などの<br>
              進路についてやその他（恋愛なども）のお悩みを聞き、<br>
              アドバイスやサポートを行います！<br>
              公式LINEとのチャットでのやり取りでも<br>
              お電話でのやり取りであなたの悩みに寄り添い、アドバイスします。<br>
              国立の高等専門学校卒業後、大手鉄道会社に就職、<br>
              色んな葛藤をしながら3年かけて都内大手広告代理店に<br>
              転職した経験やこれまで何十件と色んな方の相談にのってきた<br>
              経験から多岐に渡るアドバイスをします！<br>
              悩んでることがあるなら、まずは気軽にコンタクトページから<br>
              公式LINEを追加してみてください！
            </p>
          </div>
          <div class="review-wrapper">
            <div class="E-Start_reviewTitle">
              <img class="sp-reviewIcon" src="~/assets/サポート　アイコン　 レビュー.png">
              <h3>Review</h3>
            </div>
            <div class="borderSupport"></div>
            <div class="review-main">
              <div class="reviewChatWrapper rcw_es_top rcwRight">
                <div class="reviewChatBox"></div>
                <div class="customerRight">
                  <img src="~/assets/サポート　アイコン　 女性.png">
                </div>
              </div>
              <div class="reviewChatWrapper rcw_es_bottom">
                <div class="reviewChatBox"></div>
                <div class="customerLeft">
                  <img src="~/assets/サポート　アイコン　 男性.png">
                </div>
              </div>
            </div>
            <nuxt-link to>
              <btnService class="supportBtn" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import Graphics from "~/components/graphics.vue";
import App from "~/components/app.vue";
import WebHP from "~/components/webHP.vue";
import Video from "~/components/video.vue";
import btnService from "~/components/parts/btnService.vue"

export default {
components: {
    Graphics,
    App,
    WebHP,
    Video,
    btnService
  }
};
</script>
<style scoped>
.supportContainer {
  margin-top: 10%;
}
.supportTopLeft {
  float: right;
  width: 60%;
  height:100%;
  overflow:hidden;
  /* height: 568px; */
}
.supportTopRight {
  float: left;
  padding-left: 30px;
  width: 40%;
}
.supportTop {
  height: 568px;
}
.supportImg {
  background-image: url("~@/assets/five-assorted-balloons.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  /* height: 75%; */
  padding-top: 75%;
}
.supportIcon {
  background-image: url("~@/assets/supportIcon.png");
  background-size: cover;
  background-position: center;
  height: 137px;
  width: 140px;
  /* float: left; */
}
.underTitle{
  font-weight: 600;
}
.supportText {
  font-size: 72px;
  font-weight: 700
}
.supportExp {
  font-size: 20px;
}
.sp-br{
  display: none;
}



/*****************************************************
 **                                                 **
 **           EnGii supportとEnGii media            **
 **           が横文字になってるところ                  **
 **                                                 **
****************************************************** */
.subArea {
  height: 100px;
  position: relative;
}
.sp-subAreaBox{
  position: relative;

}
.sp-index-main{
  position:absolute;
  top:0;
  right:50px;
  height:242.28px;
}

.sp-index-sub{
  position:absolute;
  right:0;
  top:0;
  height:220.25px;
}
.inline {
  /* float: left; */
  display: inline-block;
  transform:rotate(180deg);
}
.supportLeftVertical {
  position:absolute;
  right:0;
  padding-top: 72px;
   text-align:right;
}
.supportLeftVertical p {
  writing-mode: vertical-rl;
  font-size: 24px;
}
.verticalOne {
  padding-left: 18px;
  color: #9b9b9b;
}
.verticalSecond {
  padding-left: 18px;
}
.border {
  height: 80px;
  width: 1px;
  background-color: black;
  display: block;
}
.borderOne {
  margin: 10px 0 10px 35px;
  border: 1px solid #9b9b9b;
}
.borderSecond {
  margin: 10px 0 10px 35px;
  border: 1px solid #3bb2db;
}
.mediaContens {
  font-size: 20px;
  border-bottom: solid 2px #3bb2db;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  margin: auto;
  height: 30px;
  width: 89px;
}
.scrollsecond {
  float: right;
  margin: -730px 30px 0;
}
.scrolltext {
  writing-mode: vertical-rl;
  margin-left: 25px;
  color: #3bb2db;
  font-size: 14px;
}
.scrollborder {
  border-left: 1px solid #3bb2db;
  display: block;
  height: 80px;
  margin: 10px 0 0 35px;
}
.mediaUp {
}
.mediaDown{
  height: 766px;
}

.E-Chat_E-Ring_wrapper{
  display: flex;
  
}

.E-Chat-wrapper,
.E-Ring-wrapper{
 background-color: rgb(241,241,241);
  text-align: center;
  flex:1;
  padding-bottom:100px;
  padding-top:50px;
}
.E-Chat-wrapper{
  border-right:solid 1px #3bb2db;
}
.E-Ring-wrapper{
  border-left:solid 1px #3bb2db;
}
.borderSupport{
  border-bottom:solid 2px  #3bb2db;
  margin: 0 auto;
  margin-top:30px;
  margin-bottom: 20px;
  width: 250px;
  

}
.E-Chat-wrapper h2,
.E-Ring-wrapper h2,
.E-Fitness-wrapper h2,
.E-Start-wrapper h2{
  font-size:45px;
}

.E-Chat-wrapper p,
.E-Ring-wrapper p,
.E-Fitness-wrapper p,
.E-Start-wrapper p{

  line-height: 40px;
}
.sp-icon{
  width:100px;
  height: 100px;
}
.supportBtn{
  margin-top:60px;

}



/*****************************************************
 **                                                 **
 **                    E-Fitness                    **
 **                                                 **
****************************************************** */
.E-Fitness-container{
  background-color: #EDF8FC;
   padding-bottom:80px;
}
.E-Fitness-wrapper,
.E-Start-wrapper{
  text-align: center;
  padding-top:100px;
 
}

.E-Fitness_reviewTitle,
.E-Start_reviewTitle{
  display:flex;
  text-align: center;
  margin:0 auto;
  width:205px;
  margin-top:150px;
}
.E-Fitness_reviewTitle h3,
.E-Start_reviewTitle h3{
  font-size:27px;
  margin-top:50px;
  line-height: 30px;
  margin-right:20px;
}
/*      Review       */
.review-wrapper{
  text-align: center;
}
.sp-reviewIcon{
  width: 80px;
  height:80px;
}

.review-wrapper .borderSupport{
  margin-top:10px;
  width: 205px;
}


/*    Chatの装飾     */
.reviewChatBox{
  width: 600px;
  line-height: 40px;
  font-size:12px;
  background-color: #BEE6F3;
  border-radius: 15px;
  padding: 10px 30px;
}

/* (rcwTop)reviwChatBox Top */

.rcwTop {
  margin-left: 20%;
  margin-bottom: 100px;
}
.rcwTop .reviewChatBox{
  margin-left: 10%;
}

/* (rcwMiddle)reviwChatBox Middle */
.rcwRight {
 
  margin-bottom: 200px;
  position:relative;
  width:800px;
}
.rcwMiddle{
  margin-left: 40%;
}
.rcwMiddle .reviewChatBox{
  margin-left: 10%;
}

.customerRight{
  position: absolute;
  right:0;

}
.rcwRight .customerRight img{
  transform: scale(-1, 1);
}

/* (rcwBottom)reviwChatBox Bottom */

.rcwBottom {
  margin-left: 10%;
  margin-bottom: 100px;
}
.rcwBottom .reviewChatBox{
  margin-left: 10%;
}
/*    customer 画像    */
.customerRight img,
.customerLeft img{
  width: 80px;
  height:80px;
}
.customerRight ,
.customerLeft{
    
    text-align: left;
}

.customerLeft p{
  margin-left:35px;
}
.customerRight p{
  padding-left:15px;
}

/*****************************************************
 **                                                 **
 **                    E-Start                      **
 **                                                 **
****************************************************** */
.E-Start-container{
  margin-bottom:200px;
}
.E-Start-wrapper img{
  width: auto;
}

/*      Review       */

.E-Start_reviewTitle{
  width:205px;
}

.E-Start_reviewTitle img{
  margin-right:40px;
  margin-left:-30px;
  
}

.E-Start_reviewTitle h3{
  margin-right: 0;
}

.rcw_es_top{
  margin-left:20%;
}
.rcw_es_bottom {
  margin-left:25%;
  margin-bottom:200px;
}
.rcw_es_top .reviewChatBox{
  height:200px;
  margin-left:90px;
}
.rcw_es_bottom .reviewChatBox{
  height:200px;
  margin-left:120px;
}






@media screen and (max-width: 730px) {
  .supportTop{
    margin-top: 15%;
  }
  .supportTopLeft{
    float: none;
    margin: 0 auto;
    width: 100%;
  }
  .supportIcon{
    float: right;
    width: 92px;
    height: 90px;
  }
  .supportImg{
    width: 100%;
    padding: 0;
    height: 280px;
  }
  /* .mediaIcon h2, .mediaIcon p{
    float: left;
  } */

  .scrollsecond {
    display: none;
  }
  .supportLeftVertical{
    display: none;
  }
  .supportText{
    font-size: 26px;
  }
  .supportExp{
    font-size: 16px;
  }
  .sp-br{
    display: block;
  }
  .subArea{
    margin: 70px 0 -30px;
  }
  .supportTopRight{
    padding: 0;
    float: none;
    margin: 25px auto;
    width: 85%;
  }
  .supportTop{
    height: 230px;
  }
  .supportDown{
    height: 1500px;
  }
}
</style>