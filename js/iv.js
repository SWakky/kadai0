// ここからコードを書きます🤗

// イーブイボタン
$(".zbtn").on("click", function(){
  console.log("aaa");
  $("div").children("img").attr("src", "image/zukan1.png");
  console.log("bbb")
});

// シャワーズボタン
$(".zbtna").on("click", function(){
  console.log("aaa");
  $("div").children("img").attr("src", "image/zukan2.png");
  console.log("bbb")
});

// サンダースボタン
$(".zbtnb").on("click", function(){
  console.log("aaa");
  $("div").children("img").attr("src", "image/zukan3.png");
  console.log("bbb")
});

// ブースターボタン
$(".zbtnc").on("click", function(){
  console.log("aaa");
  $("div").children("img").attr("src", "image/zukan4.png");
  console.log("bbb")
});

// エーフィーボタン
$(".zbtnd").on("click", function(){
  console.log("aaa");
  $("div").children("img").attr("src", "image/zukan5.png");
  console.log("bbb")
});

// ブラッキーボタン
$(".zbtne").on("click", function(){
  console.log("aaa");
  $("div").children("img").attr("src", "image/zukan6.png");
  console.log("bbb")
});

// リーフィアボタン
$(".zbtnf").on("click", function(){
  console.log("aaa");
  $("div").children("img").attr("src", "image/zukan7.png");
  console.log("bbb")
});

// グレイシアボタン
$(".zbtng").on("click", function(){
  console.log("aaa");
  $("div").children("img").attr("src", "image/zukan8.png");
  console.log("bbb")
});

// ニンフィアボタン
$(".zbtnh").on("click", function(){
  console.log("aaa");
  $("div").children("img").attr("src", "image/zukan9.png");
  console.log("bbb")
});


// 背景ランダムボタン
$(".btn").on("click", function () {
    const random = Math.floor(Math.random() * 5);
    console.log(random, "ランダム数字");

    if (random === 0) {
      console.log("空");
      $("h2").text("たかくて　あおい　そら！").css("color", "black");
      $(".randomhaikei").css("background-image", "url(image/aozora.jpg");
    } else if (random === 1) {
      console.log("機械工場");
      $("h2").text("ここは　マシンが　いっぱいの　こうじょうだ！").css("color", "black");
      $(".randomhaikei").css("background-image", "url(image/kikai.jpg");
    } else if (random === 2) {
      console.log("宇宙");
      $("h2").text("ええっ！　うちゅうまで　きちゃった！").css("color", "black");
      $(".randomhaikei").css("background-image", "url(image/space.jpg");
    } else if (random === 3) {
      console.log("砂漠");
      $("h2").text("じりじり　あつい！　ここは　さばくだ！").css("color", "black");
      $(".randomhaikei").css("background-image", "url(image/sabaku.png");
    } else if (random === 4) {
      console.log("岩山");
      $("h2").text("ごつごつ。いわが　いっぱいの　やまだね！").css("color", "black");
      $(".randomhaikei").css("background-image", "url(image/rock.jpg");
    }
  });

// 最後にメッセージ
  $(".btny").on("click", function(){
    console.log("aaa");
    $("h3").text("とっても　じょうずに　できたね！");
    console.log("bbb")
  });
  
  $(".btnn").on("click", function(){
    console.log("aaa");
    $("h3").text("とっても　すてきだよ！　じしんを　もってね！");
    console.log("bbb")
  });


// $("xxxx") = 要素 class名 id名