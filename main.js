const input = document.getElementById("input");
const serchbutton = document.getElementById("button");
const display = document.getElementById("display");
const quizImage = document.getElementById("quiz-image");
const clearbutton = document.getElementById("clear");

clearbutton.onclick = function () {
  input.value = " ";
  display.textContent = " ";
  quizImage.src = "";
};

serchbutton.onclick = function () {
  const text = input.value;
  if (text == "趣味は何ですか？") {
    display.textContent = "ゲーム、漫画、映画鑑賞、旅行、和太鼓です";
  } else if (text == "好きな食べ物は？") {
    display.textContent =
      "焼きたてのメロンパン！　外のサクサク感と中のふわっと感のギャップに萌えますね。";
    quizImage.src = "01.jpg";
  } else if (text == "好きなゲームは何ですか？") {
    display.textContent =
      "スプラトゥーンです！！！。　トータル2000時間はやっているかも…？";
    quizImage.src = "images.jpeg";
  } else if (text == "何時に寝ますか？") {
    display.textContent = "深夜２時です。　朝は起きれません。";
  } else if (text == "誕生日はいつですか？") {
    display.textContent = "３月３日です。誕生日プレゼント待ってます。　";
    quizImage.src = "hina.jpg";
  } else if (text == "今日は何日ですか？") {
    display.textContent = "今日は2021年５月8日です。";
  } else if (text == "今までの武勇伝は？") {
    display.textContent =
      "ガラスのドアに突進した事。ガラスのドアがあった事忘れていた模様。";
  } else if (text == "最近観た映画は何ですか？") {
    display.textContent =
      "マネーボール。　プロ野球チームを統計学で勝利に導く映画";
    quizImage.src = "moneyboll.jpeg";
  } else if (text == "最近買った高い物は何ですか？") {
    display.textContent = "桶太鼓を買いました。　皆さんもmy桶太鼓どうですか？";
  } else if (text == "How are you?") {
    display.textContent = "I'm fine!!!!!!";
    quizImage.src = "fine.jpeg";
  } else if (text == "好きな和太鼓チームはどこですか？") {
    display.textContent =
      "最近は鼓童にハマっています。　しかし、過酷な環境なので入りたいとは思いません...";
  } else if (text == "好きなポケモンは何ですか？") {
    display.textContent =
      "ヌマクローですかね・・・。　何と言っても、あの無表情かわいいですよね。";
    quizImage.src = "numa.png";
  } else if (text == "サークル活動してますか？") {
    display.textContent = "大学祭実行委員に入っています!!!";
  } else if (text == "どこに住んでいますか？") {
    display.textContent = "愛知県です！！";
  } else if (text == "名産品はありますか？") {
    display.textContent = "うずらと山芋が入った豊橋カレーうどんが有名ですね";
    quizImage.src = "karei.jpeg";
  } else if (text == "こんにちは") {
    display.textContent = "hello";
  } else if (text == "有名な太鼓店はどこですか？") {
    display.textContent =
      "やはり、新潟にある浅野太鼓店さんではないのでしょうか";
  }
};
