// worksbtn
$(function () {
  // #で始まるアンカーをクリックした場合に処理
  $("a[href^=#works]").click(function () {
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href = $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? "html" : href);
    // 移動先を数値で取得
    var position = target.offset().top;
    // スムーススクロール
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

/*Accordion*/
const accSingleTriggers = document.querySelectorAll(".js-acc-single-trigger");

accSingleTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleAccordion)
);

function toggleAccordion() {
  const items = document.querySelectorAll(".js-acc-item");
  const thisItem = this.parentNode;

  items.forEach((item) => {
    if (thisItem == item) {
      thisItem.classList.toggle("is-open");
      return;
    }
    item.classList.remove("is-open");
  });
}

/*Topへ戻るボタン*/

//スクロール量を取得する関数
function getScrolled() {
  return window.pageYOffset !== undefined
    ? window.pageYOffset
    : document.documentElement.scrollTop;
}

//トップに戻るボタンの要素を取得
var topButton = document.getElementById("js-scroll-fadein");

//ボタンの表示・非表示
window.onscroll = function () {
  getScrolled() > 500
    ? topButton.classList.add("is-fadein")
    : topButton.classList.remove("is-fadein");
};

//トップに移動する関数
function scrollToTop() {
  var scrolled = getScrolled();
  window.scrollTo(0, Math.floor(scrolled / 2));
  if (scrolled > 0) {
    window.setTimeout(scrollToTop, 30);
  }
}

//イベント登録
topButton.onclick = function () {
  scrollToTop();
};

//ハンバーガーメニュー
$(function () {
  $(".hamburger-btn").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".hamburger").addClass("active");
    } else {
      $(".hamburger").removeClass("active");
    }
  });
  $(".hamburger__list").click(function () {
    $(".hamburger,.hamburger-btn").removeClass("active");
  });
});
