/*'use strict';

// 要素
const music = new Audio('musics/music.mp3');
const play = document.getElementById('play');
const volumeUp = document.getElementById('volume-up');
const volumeDown = document.getElementById('volume-down');
const mute = document.getElementById('mute');

// 再生ボタン
play.addEventListener('click', function(){
  if(!music.paused){
    play.innerHTML ="再生";
    music.pause();
  }else{
    play.innerHTML = "停止";
    music.play();
  }
});

// 音量ボタン
volumeUp.addEventListener('click', function(){
  const volume = music.volume;
  if(volume < 1){
    music.volume = (volume * 10 + 1) / 10;
  }
});
volumeDown.addEventListener('click', function(){
  const volume = music.volume;
  if(volume > 0){
    music.volume = (volume * 10 - 1) / 10;
  }
});

// ミュートボタン
mute.addEventListener('click', function(){
  if(music.muted){
    music.muted = false;
    mute.innerHTML = '<i class="fas fa-volume-mute">';
  }else{
    music.muted = true;
    mute.innerHTML = '<i class="fas fa-volume-up"></i>';
  }
});*/

document.getElementById("text").addEventListener("click", () => {
  const temp = document.getElementById("list").style.display;
  if (temp == "" || temp === "none") {
      document.getElementById("list").style.display = "block";
  } else {
      document.getElementById("list").style.display = "none";
  }
})

document.getElementById("ccc").addEventListener("click", () => {
  const temp = document.getElementById("list_sf").style.display;
  if (temp == "" || temp === "none") {
      document.getElementById("list_sf").style.display = "block";
  } else {
      document.getElementById("list_sf").style.display = "none";
  }
})

document.getElementById("ddd").addEventListener("click", () => {
  const temp = document.getElementById("list_fan").style.display;
  if (temp == "" || temp === "none") {
      document.getElementById("list_fan").style.display = "block";
  } else {
      document.getElementById("list_fan").style.display = "none";
  }
})

document.getElementById("eee").addEventListener("click", () => {
  const temp = document.getElementById("list_my").style.display;
  if (temp == "" || temp === "none") {
      document.getElementById("list_my").style.display = "block";
  } else {
      document.getElementById("list_my").style.display = "none";
  }
})

document.getElementById("fff").addEventListener("click", () => {
  const temp = document.getElementById("list_gya").style.display;
  if (temp == "" || temp === "none") {
      document.getElementById("list_gya").style.display = "block";
  } else {
      document.getElementById("list_gya").style.display = "none";
  }
})

document.getElementById("ggg").addEventListener("click", () => {
  const temp = document.getElementById("list_sp").style.display;
  if (temp == "" || temp === "none") {
      document.getElementById("list_sp").style.display = "block";
  } else {
      document.getElementById("list_sp").style.display = "none";
  }
})

document.getElementById("hhh").addEventListener("click", () => {
  const temp = document.getElementById("list_lv").style.display;
  if (temp == "" || temp === "none") {
      document.getElementById("list_lv").style.display = "block";
  } else {
      document.getElementById("list_lv").style.display = "none";
  }
})

document.getElementById("iii").addEventListener("click", () => {
  const temp = document.getElementById("list_bt").style.display;
  if (temp == "" || temp === "none") {
      document.getElementById("list_bt").style.display = "block";
  } else {
      document.getElementById("list_bt").style.display = "none";
  }
})

document.getElementById("jjj").addEventListener("click", () => {
  const temp = document.getElementById("list_id").style.display;
  if (temp == "" || temp === "none") {
      document.getElementById("list_id").style.display = "block";
  } else {
      document.getElementById("list_id").style.display = "none";
  }
})

document.getElementById("kkk").addEventListener("click", () => {
  const temp = document.getElementById("list_gen").style.display;
  if (temp == "" || temp === "none") {
      document.getElementById("list_gen").style.display = "block";
  } else {
      document.getElementById("list_gen").style.display = "none";
  }
})
