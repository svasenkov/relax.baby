import { ieFix } from "./utils/ie-fix";
import { iosVhFix } from "./utils/ios-vh-fix";

import { initModals } from "./modules/init-modals";
import { initSwiper } from "./modules/init-swiper";

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------
const reviewBtn = document.querySelector(".reviews a");
const mainContainer = document.querySelector("#content_main");
const messageContainer1 = document.querySelector(".message p");
const messageContainer2 = document.querySelector(".message span");
const buttonBlock = document.querySelector("form");

if (messageContainer1) {
  let typed1 = new Typed(messageContainer1, {
    strings: ["Отключи интернет<br/>Не пользуйся устройствами<br/>Отдохни"],
    typeSpeed: 20,
    showCursor: false,
    onComplete: type2,
  });

  function type2() {
    let typed2 = new Typed(messageContainer2, {
      strings: ["Осознанность решает - заплати за это"],
      typeSpeed: 30,
      showCursor: false,
      onComplete: () => {
        buttonBlock.classList.add("visible");
        buttonBlock.classList.remove("visually-hidden");
      },
    });
  }
  mainContainer.addEventListener("click", geHide2);
  reviewBtn.addEventListener("click", geHide);

  initSwiper();
}

function startTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.text(minutes + ":" + seconds);

    if (--timer < 0) {
      display.text("Время вышло").addClass("finish");
    }
  }, 1000);
}

jQuery(function ($) {
  let nMinutes = 60 * 60,
    display = $("#time");
  startTimer(nMinutes, display);
});

let timeout = window.price * 100;
setTimeout(() => $("#myAudioElement")[0].play(), 60 * 60000);

function geHide() {
  let element = document.getElementById("rew_act");
  let element2 = document.getElementById("content_main");

  element.classList.toggle("active");
  element2.classList.toggle("rew-open");
}

function geHide2() {
  let element = document.getElementById("rew_act");
  let element2 = document.getElementById("content_main");

  element.classList.remove("active");
  element2.classList.remove("rew-open");
}
