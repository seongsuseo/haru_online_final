// 하루 아바타 클릭 시 음성 재생
document.getElementById('haru_avatar').addEventListener('click', () => {
  const voice = document.getElementById('haru_voice');
  if (voice) voice.play();
});

// 메뉴 이동 함수 (1번은 외부 사이트, 나머지는 scene_5_02 ~ 5_14로 이동)
function goToTheme(num) {
  if (num === 1) {
    window.open("https://chat.openai.com", "_blank");
  } else {
    const page = "scene_5_" + String(num).padStart(2, '0') + ".html";
    window.location.href = page;
  }
}

// 각 버튼에 goToTheme 연결
for (let i = 1; i <= 14; i++) {
  const btn = document.getElementById(`theme_btn_${i}`);
  if (btn) {
    btn.addEventListener
('click', () => goToTheme(i));
  }
}