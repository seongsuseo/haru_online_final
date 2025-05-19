<script>
  document.getElementById('haru_avatar').addEventListener('click', () => {
    document.getElementById('haru-voice').play();
  });

  document.getElementById('passview-btn').addEventListener('click', () => {
    document.getElementById('chat-ui').style.display = 'block';
  });

  document.getElementById('send-btn').addEventListener('click', () => {
    const userInput = document.getElementById('chat-input').value;
    handleChatGPT(userInput); // 기존 ChatGPT 연동 함수
  });
</script>
