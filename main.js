function modalOpen() {
  //------------------------------------------------------------
  //  モーダルウインドウ オープン
  //------------------------------------------------------------
  document.getElementById("modalArea").className = "modalBg modalBgOpen";
}

function modalClose() {
  //------------------------------------------------------------
  //  モーダルウインドウ クローズ
  //------------------------------------------------------------
  document.getElementById("modalArea").className = "modalBg modalBgClose";
}

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

// ハンバーガーメニュー
function hamburger() {
  document.getElementById("line1").classList.toggle("line_1");
  document.getElementById("line2").classList.toggle("line_2");
  document.getElementById("line3").classList.toggle("line_3");
  document.getElementById("nav").classList.toggle("in");
}
document.getElementById("hamburger").addEventListener("click", function () {
  hamburger();
});
