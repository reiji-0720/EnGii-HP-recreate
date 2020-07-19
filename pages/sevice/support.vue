<template>
  <div class="supportContainer">
    <div class="supportTop clearfix">
      <div class="supportTopLeft">
        <div class="supportImg"></div>
      </div>
      <div class="supportTopRight">
        <div class="supportIcon"></div>
        <h2 class="supportText">EnGii support</h2>
        <p class="supportExp">
          理想の自分、なりたい自分に向けて
          <br />足踏みしているあなたをサポートしたい
        </p>
      </div>
    </div>

    <div class="subArea">
      <div class="supportLeftVertical">
        <div class="sp-subAreaBox">
          <div class="sp-index-main">
            <p class="sp-verticalOne">EnGii support</p>
            <div class="sp-border sp-borderOne"></div>
          </div>
          <div class="sp-index-sub">
            <p class="sp-verticalSecond">EnGii media</p>
            <div class="sp-border sp-borderSecond"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="E-Chat_E-Ring_container">
      <div class="E-Chat_E-Ring_wrapper">
        <div class="E-Chat-wrapper">
          <img class="E-ChatIcon sp-icon" src="~/assets/サポート　アイコン　 chat.png" />
          <h2>E-Chat</h2>
          <p class="underTitle">職種別チャット</p>
          <div class="borderSupport"></div>
          <p>
            E-Chatは興味がある業界や職種の人々と
            <br />コミュニケーションができる
            <br />オープンチャットサービスです。
            <br />業界ならではの話や相談、
            <br />気軽な雑談をすることができます。
            <br />
          </p>
          <nuxt-link to>
            <btnService class="supportBtn" />
          </nuxt-link>
        </div>
        <div class="E-Ring-wrapper">
          <img class="E-RingIcon sp-icon" src="~/assets/サポート　アイコン　 ring.png" />
          <h2>E-Ring</h2>
          <p class="underTitle">知識共有</p>
          <div class="borderSupport"></div>
          <p>
            <br /> E-Ringは、ユーザー同士で悩みを解決するEnGii独自のサービスです。
            <br /> 周りの人に言えない悩みや疑問を質問したり、
            <br /> 自分の持っている知識を使って質問に回答できます。
          </p>
          <nuxt-link to>
            <btnService class="supportBtn" />
          </nuxt-link>
        </div>
      </div>
      <div class="E-Fitness-container">
        <div class="E-Fitness-wrapper">
          <img class="E-FitnessIcon" src="~/assets/サポート　アイコン　 fitness.png" />
          <h2>E-Fitness</h2>
          <p class="underTitle">ダイエットサポート</p>
          <div class="borderSupport"></div>
          <p>
            ダイエットサポート（1000円〜）
            <br />理想的なダイエットを叶えるE-Fitness！
            <br />1人だとついつい甘えてしまったり、
            <br />どうしたら痩せられるかわからない、運動は苦手、
            <br />などなどダイエットって難しいですよね。
            <br />痩せたいのに痩せられない。そんな人の「痩せたい！」を叶える
            <br />ダイエットサポートE-Fitness
            <br />代表であるサポーターの宮坂が2週間、公式LINEでやり取りします！
            <br />1日の振り返りを10分ほど行います。
            <br />あなたの食生活、生活の仕方にフィードバックすることで1人でもしっかりダイエットできるように致します！！
            <br />サポートをご希望の方は以下の公式LINEを追加してください！
          </p>
          <a href="https://lin.ee/d8yRSCJ" class="LINEArea">
            <p class="LINE">公式LINEはこちら</p>
          </a>
        </div>
        <div class="review-wrapper">
          <div class="E-Fitness_reviewTitle">
            <h3>Review</h3>
            <img class="sp-reviewIcon" src="~/assets/サポート　アイコン　 レビュー.png" />
          </div>
          <div class="borderSupport"></div>
          <div class="review-main">
            <div class="reviewChatWrapper rcwTop">
              <div class="reviewChatBoxLeft">
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
                <img src="~/assets/サポート　アイコン　 女性.png" />
                <p>女性</p>
                <p>10代</p>
              </div>
            </div>
            <div class="reviewChatWrapper rcwMiddle rcwRight">
              <div class="reviewChatBoxRight">
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
                <img src="~/assets/サポート　アイコン　 女性.png" />
                <p>女性</p>
                <p>20代前半</p>
              </div>
            </div>
            <div class="reviewChatWrapper rcwBottom">
              <div class="reviewChatBoxLeft">
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
                <img src="~/assets/サポート　アイコン　 女性.png" />
                <p>女性</p>
                <p>20代前半</p>
              </div>
            </div>
          </div>
          <!-- アコーディオンメニュー   -->
          <div class="reviewPullDown">
            <label for="reviewBar01">とても楽しく１ヶ月終えることができました！〈女性20代前半〉</label>
            <input type="checkbox" id="reviewBar01" class="accordion" />
            <ul id="links01">
              <li>
                １人でやってても、このくらいならいいか。とか、今日はいいやってなってしまってたのが、
                <br />るいさんが管理してくださってたおかげで、意識が変わって、ちゃんと目標持って
                <br />ダイエットできました！食べたものとか、運動とか、何か良くて、なにがいけないのかを夜の
                <br />電話でしっかり教えてくださったり、頑張ってるねって言ってもらったりして、
                <br />すごいモチベーションも上がったし、自分が今まで知らなかった知識も身につきました。
                <br />今まではアイス選ぶ時、裏面なんて見なかったのに、るいさんに教えていただいてからは、
                <br />裏面を見るようになりました！るいさんのダイエットサポートが終わってから、
                <br />周りにも痩せた？とか、可愛くなったね！って言われて、とても嬉しいです！
                <br />いまは、成人式に向けて頑張ってます！るいさんは、とても話しやすいし、
                <br />相談とか質問もしやすくて、私に合ったペースをアドバイスしてくれたので、
                <br />無理なく痩せることができました。しんどいとか、キツいイメージのダイエットですが、
                <br />とても楽しく１ヶ月終えることができました！ほんとうにありがとうございました！
              </li>
            </ul>
            <label for="reviewBar02">サポートしてもらって良かったです！ありがとうございました！〈女性20代前半〉</label>
            <input type="checkbox" id="reviewBar02" class="accordion" />
            <ul id="links02">
              <li>
                私は増えたり減ったりと毎日に差があったり、自分にあったダイエットにたどり着くのに
                <br />時間がかかり気持ち的にもブルーになりそうになりましたが、るいさん仕事忙しいのに
                <br />毎日電話して下さりアドバイスして下さって嬉しかったです！初めの体重より
                <br />1kg以上落とせたことが嬉しかったです！生理前とか体調崩してきちんと
                <br />最後までできなかったけどダイエットにモチベが上がりました！！
                <br />HIITも続けたらほんとに速攻効果でてびっくりしたので続けます笑
                <br />るいさんにサポートしてもらって良かったです！ありがとうございました！
              </li>
            </ul>
            <label for="reviewBar03">周りに痩せた？って言われることで、すごく自信がつきました！〈女性20代前半〉</label>
            <input type="checkbox" id="reviewBar03" class="accordion" />
            <ul id="links03">
              <li>
                最初の方は夕食後にお腹減ったり、すごい甘いもの食べたくなったりして辛かったんですけど、
                <br />食生活変えたら体重どころかお肌にも影響出てきて、そこからは何がなんでもやりきる！！
                <br />って思いでやってました！るいさんは、こまめに電話してくださってたので
                <br />すごく身近に感じて、「この人となら頑張れる！」って思ってました！
                <br />食生活だけじゃなくて、ちょっとした運動を加えるといいって聞いた時も、
                <br />体を動かすことでリフレッシュになっていたので、ストレスなくここまでやってこれたのは、
                <br />本当にるいさんのおかげだと思ってます！
                <br />目標の2キロ減も達成できて、自分的にも体が軽くなったり肌が綺麗になったり、
                <br />周りに痩せた？って言われることで、すごく自信がつきました！
                <br />１ヶ月間っていう短い間でしたが、とても濃くて充実してました、
                <br />ありがとうございました！！！！！
              </li>
            </ul>
          </div>
          <a href="https://lin.ee/d8yRSCJ" class="LINEArea">
            <p class="LINE">公式LINEはこちら</p>
          </a>
        </div>
      </div>
      <div class="E-Start-container">
        <div class="E-Start-wrapper">
          <img class="E-StartIcon sp-icon" src="~/assets/サポート　アイコン　 start.png" />
          <h2>E-Start</h2>
          <p class="underTitle">進学・就活サポート</p>
          <div class="borderSupport"></div>
          <p>
            E-start （初回相談無料）<br />
            E-startは、皆様の進学、就職、転職などの
            進路についてやその他のお悩みを聞き、
            アドバイスやサポートを行います！<br />
            公式LINEのトークでのやり取りや<br />
            お電話でのやり取りであなたの悩みに寄り添い、アドバイスします。<br />
            これまで様々な経験をして、何十件もの相談にのってきた代表の宮坂が
            皆様の相談にアドバイスいたします！<br />
           　関東、関西圏で転職希望の方には特別に <br />
            企業の紹介を出来ることもございます。 <br />
            悩みや不安がある方は、ご気軽に以下の公式LINEを追加してください！
          </p>
          <a href="https://lin.ee/d8yRSCJ" class="LINEArea">
            <p class="LINE">公式LINEはこちら</p>
          </a>
        </div>
        
        <div class="review-wrapper">
          <div class="E-Start_reviewTitle">
            <img class="sp-reviewIcon" src="~/assets/サポート　アイコン　 レビュー.png" />
            <h3>Review</h3>
          </div>
          <div class="borderSupport"></div>
          <div class="review-main">
            <div class="reviewChatWrapper rcw_es_top rcwRight">
              <div class="reviewChatBoxRight">
                <P>
                  進学で悩んでたけど、話聞いてもらって、的を得たアドバイスもらってスッキリしました！嫌だなと思うことがあって相談したときに「どうせやるなら精一杯やろ！」って言われてから自分の考え方が変わりました。
                  やるからには精一杯やるって思ってると嫌だなって思うことが少なくなりました!
                </P>
              </div>
              <div class="customerRight">
                <img src="~/assets/サポート　アイコン　 女性.png" />
                <p>女性</p>
                <p>10代後半</p>
              </div>
            </div>
            <div class="reviewChatWrapper rcw_es_bottom">
              <div class="reviewChatBoxLeft">
                <p>
                  就職先について、2つの内定先のどちらにするか迷っており相談に乗ってもらった。自分のやりたいことや将来的なキャリアステップのプランをふまえながら親身になって一緒に考えてもらい、気持ちの整理をつけることができた。
                  相談にのってくださった方は年が近くフランクでとても話しやすいが、経験豊富なため参考になる考えを聞くことができる。
                </p>
              </div>
              <div class="customerLeft">
                <img src="~/assets/サポート　アイコン　 男性.png" />
                <p>男性</p>
                <p>20代前半</p>
              </div>
            </div>
          </div>
          <div class="reviewPullDown">
            <label for="reviewBar04">的を得たアドバイスもらってスッキリしました！〈女性10代後半〉</label>
            <input type="checkbox" id="reviewBar04" class="accordion" />
            <ul id="links04">
              <li>
                進学で悩んでたけど、話聞いてもらって、的を得たアドバイスもらってスッキリしました！嫌だなと思うことがあって相談したときに「どうせやるなら精一杯やろ！」って言われてから自分の考え方が変わりました。
                やるからには精一杯やるって思ってると嫌だなって思うことが少なくなりました!
              </li>
            </ul>
            <label for="reviewBar05">経験豊富なため参考になる考えを聞くことができる〈男性20代前半〉</label>
            <input type="checkbox" id="reviewBar05" class="accordion" />
            <ul id="links05">
              <li>
                就職先について、2つの内定先のどちらにするか迷っており相談に乗ってもらった。自分のやりたいことや将来的なキャリアステップのプランをふまえながら親身になって一緒に考えてもらい、気持ちの整理をつけることができた。
                相談にのってくださった方は年が近くフランクでとても話しやすいが、経験豊富なため参考になる考えを聞くことができる。
              </li>
            </ul>
          </div>
          <a href="https://lin.ee/d8yRSCJ" class="LINEArea">
            <p class="LINE">公式LINEはこちら</p>
          </a>
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
import btnService from "~/components/parts/btnService.vue";

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
  height: 100%;
  overflow: hidden;
  /* height: 568px; */
}
.supportTopRight {
  float: left;
  padding-left: 5%;
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
  height: 140px;
  width: 140px;
  /* float: left; */
}

.supportIcon h2 {
  padding: 0;
}

.underTitle {
  font-weight: 600;
}
.supportText {
  font-size: 72px;
  font-weight: 700;
}
.supportExp {
  font-size: 20px;
}
.sp-br {
  display: none;
}

/*****************************************************
 **                                                 **
 **           EnGii supportとEnGii media            **
 **           が横文字になってるところ                  **
 **                                                 **
****************************************************** */
.supportContainer .subArea {
  height: 100px;
  position: relative;
}
.sp-subAreaBox {
  position: relative;
}
.sp-index-main {
  position: absolute;
  top: 0;
  right: 50px;
  height: 242.28px;
}

.sp-index-sub {
  position: absolute;
  right: 0;
  top: 0;
  height: 220.25px;
}
.sp-index-main,
.sp-index-sub {
  display: inline-block;
  transform: rotate(180deg);
}

.supportLeftVertical {
  position: absolute;
  right: 0;
  padding-top: 72px;
  text-align: right;
}
.supportLeftVertical p {
  writing-mode: vertical-rl;
  font-size: 24px;
}
.sp-verticalOne {
  padding-left: 18px;
  color: #9b9b9b;
}
.sp-verticalSecond {
  padding-left: 18px;
}
.sp-border {
  height: 80px;
  width: 1px;
  background-color: black;
  display: block;
}
.sp-borderOne {
  margin: 10px 0 10px 35px;
  border: 1px solid #9b9b9b;
}
.sp-borderSecond {
  margin: 10px 0 10px 35px;
  border: 1px solid #3bb2db;
}

/* .scrollsecond {
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
} */

.E-Chat_E-Ring_wrapper {
  display: flex;
}

.E-Chat-wrapper,
.E-Ring-wrapper {
  background-color: rgb(241, 241, 241);
  text-align: center;
  flex: 1;
  padding-bottom: 100px;
  padding-top: 50px;
}
.E-Chat-wrapper {
  border-right: solid 1px #3bb2db;
}
.E-Ring-wrapper {
  border-left: solid 1px #3bb2db;
}
.borderSupport {
  border-bottom: solid 2px #3bb2db;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 20px;
  width: 250px;
}
.E-Chat-wrapper h2,
.E-Ring-wrapper h2,
.E-Fitness-wrapper h2,
.E-Start-wrapper h2 {
  font-size: 45px;
}

.E-Chat-wrapper p,
.E-Ring-wrapper p,
.E-Fitness-wrapper p,
.E-Start-wrapper p {
  line-height: 40px;
  padding: 0 15px;
}
.sp-icon {
  width: 100px;
  height: 100px;
}
.supportBtn {
  margin-top: 60px;
}

/*****************************************************
 **                                                 **
 **                    E-Fitness                    **
 **                                                 **
****************************************************** */
.E-Fitness-container {
  background-color: #edf8fc;
  padding-bottom: 80px;
}
.E-Fitness-wrapper,
.E-Start-wrapper {
  text-align: center;
  padding-top: 100px;
}

.E-FitnessIcon {
  height: 100px;
  width: 180px;
}

.E-Fitness_reviewTitle,
.E-Start_reviewTitle {
  display: flex;
  text-align: center;
  margin: 0 auto;
  width: 205px;
  margin-top: 150px;
}
.E-Fitness_reviewTitle h3,
.E-Start_reviewTitle h3 {
  font-size: 27px;
  margin-top: 50px;
  line-height: 30px;
  margin-right: 20px;
}
/*      Review       */
.review-wrapper {
  text-align: center;
}
.sp-reviewIcon {
  width: 80px;
  height: 80px;
}

.review-wrapper .borderSupport {
  margin-top: 10px;
  width: 205px;
}

/*    Chatの装飾     */
.reviewChatBoxLeft,
.reviewChatBoxRight {
  width: 600px;
  line-height: 40px;
  font-size: 0.8rem;
  background-color: #bee6f3;
  border-radius: 15px;
  padding: 10px 30px;
  position: relative;
  text-align: left;
}
.reviewChatBoxLeft:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  left: -7px;
  bottom: -68px;
  border-style: solid;
  z-index: 10;
  border-color: transparent transparent transparent #bee6f3;
  border-width: 77px 0px 28px 47px;
  transform: rotate(223deg);
}

.reviewChatBoxRight:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  right: 7px;
  bottom: -68px;
  border-style: solid;
  z-index: 10;
  border-color: transparent transparent transparent #bee6f3;
  border-width: 77px 0px 28px 47px;
  transform: rotate(170deg);
}
/* (rcwTop)reviwChatBox Top */

.rcwTop {
  margin: 10% auto auto 8%;
}
.reviewChatBoxLeft {
  margin-left: 15%;
}

/* (rcwMiddle)reviwChatBox Middle */
.rcwRight {
  margin-bottom: 200px;
  position: relative;
  width: 800px;
}
.rcwMiddle {
  margin: auto 8% 15% auto;
}

.reviewChatBoxRight {
  margin-left: 10%;
}

.customerRight {
  position: absolute;
  right: 0;
}
.rcwRight .customerRight img {
  transform: scale(-1, 1);
}

/* (rcwBottom)reviwChatBox Bottom */

.rcwBottom {
  margin-left: 10%;
  margin-bottom: 100px;
}
.rcwBottom {
  margin: 10% auto auto 8%;
}
.reviewChatBoxLeft {
  margin-left: 11%;
}
/*    customer 画像    */
.customerRight img,
.customerLeft img {
  margin-top: 50px;
  width: 80px;
  height: 80px;
}
.customerRight,
.customerLeft {
  text-align: left;
}

.customerLeft p {
  margin-left: 35px;
}
.customerRight p {
  padding-left: 15px;
}
/*    アコーディオンメニュー    */
.reviewPullDown {
  display: none;
  width: 75%;
  margin: 0 auto;
}

.reviewPullDown a {
  display: block;
  padding: 15px;
  text-decoration: none;
  color: #000;
}

label {
  display: block;
  margin: 7% 0 4px 0;
  padding: 15px;
  line-height: 1;
  color: #fff;
  background: #3bb2db;
  cursor: pointer;
}

input {
  display: none;
}

.reviewPullDown ul {
  margin: 0;
  padding: 0;
  background: #bee6f3;
  list-style: none;
}

.reviewPullDown li {
  height: 0;
  text-align: left;
  padding: 3% 0 0 3%;
  overflow: hidden;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

#reviewBar01:checked ~ #links01 li,
#reviewBar03:checked ~ #links03 li {
  height: 370px;
  opacity: 1;
}

#reviewBar02:checked ~ #links02 li {
  height: 270px;
  opacity: 1;
}

#reviewBar04:checked ~ #links04 li,
#reviewBar05:checked ~ #links05 li {
  height: 200px;
  opacity: 1;
}
/*****************************************************
 **                                                 **
 **                    E-Start                      **
 **                                                 **
****************************************************** */
.E-Start-container {
  margin-bottom: 200px;
}
.E-Start-wrapper img {
  width: auto;
}

/*      Review       */

.E-Start_reviewTitle {
  width: 205px;
}

.E-Start_reviewTitle img {
  margin-right: 40px;
  margin-left: -30px;
}

.E-Start_reviewTitle h3 {
  margin-right: 0;
}

.rcw_es_top {
  margin: 10% 7% 15% auto;
}
.rcw_es_bottom {
  margin: 10% auto auto 8%;
}
.rcw_es_top .reviewChatBoxRight {
  height: 200px;
  margin-left: 90px;
}
.rcw_es_bottom .reviewChatBoxLeft {
  height: 200px;
  margin-left: 120px;
}

.LINEArea{
  text-decoration: none;
  height: 60px;

}
.LINE{
  width: 170px;
  margin: 30px auto 0 auto;  
  background-color: #17B005;
  color: white;
  display: inline-block;
  line-height: 60px;
}
@media screen and (max-width: 1000px) {
  .supportText {
    font-size: 55px;
  }

  .supportExp {
    font-size: 1rem;
  }

  .supportIcon {
    background-image: url("~@/assets/supportIcon.png");
    background-size: cover;
    background-position: center;
    height: 110px;
    width: 110px;
    /* float: left; */
  }

  .sp-index-main p,
  .sp-index-sub p {
    font-size: 1.2rem;
  }

  .review-main {
    display: none;
  }
  .reviewPullDown {
    display: block;
    width: 75%;
    margin: 0 auto;
  }

  .reviewPullDown a {
    display: block;
    padding: 15px;
    text-decoration: none;
    color: #000;
  }

  label {
    display: block;
    margin: 7% 0 4px 0;
    padding: 15px;
    line-height: 1;
    color: #fff;
    background: #3bb2db;
    cursor: pointer;
  }

  input {
    display: none;
  }

  .reviewPullDown ul {
    margin: 0;
    padding: 0;
    background: #bee6f3;
    list-style: none;
  }

  .reviewPullDown li {
    height: 0;
    text-align: left;
    padding: 3% 0 0 3%;
    overflow: hidden;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }

  #reviewBar01:checked ~ #links01 li {
    height: 450px;
    opacity: 1;
  }

  #reviewBar03:checked ~ #links03 li {
    height: 420px;
    opacity: 1;
  }

  #reviewBar02:checked ~ #links02 li {
    height: 270px;
    opacity: 1;
  }

  #reviewBar04:checked ~ #links04 li,
  #reviewBar05:checked ~ #links05 li {
    height: 160px;
    opacity: 1;
  }
  .subArea {
    height: auto;
  }
}

@media screen and (max-width: 850px) {
  .subArea {
    display: none;
  }
}
@media screen and (max-width: 770px) {
  .supportTop {
    margin: 15% auto 30% auto;
  }
  .supportTopLeft {
    float: none;
    margin: 0 auto;
    width: 100%;
  }
  .supportIcon {
    float: right;
    width: 92px;
    height: 92px;
  }
  .supportImg {
    width: 100%;
    padding: 0;
    height: 280px;
  }
  /* .mediaIcon h2, .mediaIcon p{
    float: left;
  } */
  .E-Chat-wrapper {
    border: none;
  }
  .E-Ring-wrapper {
    border: none;
  }
  .E-Fitness-container p,
  .E-Start-container p {
    margin: 20px;
  }
  .scrollsecond {
    display: none;
  }
  .supportLeftVertical {
    display: none;
  }
  .supportText {
    font-size: 26px;
  }
  .supportExp {
    font-size: 0.8rem;
  }
  .sp-br {
    display: block;
  }
  .subArea {
    display: none;
  }
  .supportTopRight {
    padding: 0;
    float: none;
    margin: 25px auto;
    width: 85%;
  }
  .supportTop {
    height: 230px;
  }
  .supportDown {
    height: 1500px;
  }
  .E-Chat_E-Ring_wrapper {
    display: block;
  }
}
@media screen and (max-width: 730px) {
  li {
    font-size: 0.7rem;
  }
  label {
    font-size: 0.8rem;
  }
  .supportTop {
    margin: 15% auto 50% auto;
  }
  .supportTopLeft {
    float: none;
    margin: 0 auto;
    width: 100%;
  }
  .supportIcon {
    float: right;
    width: 92px;
    height: 92px;
  }
  .supportImg {
    width: 100%;
    padding: 0;
    height: 280px;
  }
  /* .mediaIcon h2, .mediaIcon p{
    float: left;
  } */
  .E-Chat-wrapper {
    border: none;
  }
  .E-Ring-wrapper {
    border: none;
  }
  .E-Fitness-container p,
  .E-Start-container p {
    margin: 20px;
  }
  .scrollsecond {
    display: none;
  }
  .supportLeftVertical {
    display: none;
  }
  .supportText {
    font-size: 26px;
  }
  .supportExp {
    font-size: 0.8rem;
  }
  .sp-br {
    display: block;
  }
  .subArea {
    display: none;
  }
  .supportTopRight {
    padding: 0;
    float: none;
    margin: 25px auto;
    width: 85%;
  }
  .supportTop {
    height: 230px;
  }
  .supportDown {
    height: 1500px;
  }
  .E-Chat_E-Ring_wrapper {
    display: block;
  }
}
</style>