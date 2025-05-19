function handleChatGPT(input) {
    console.log("사용자 입력:", input);
    alert("ChatGPT에 전달: " + input);
  }
  document.getElementById('send-btn').addEventListener('click', () => {
    const userInput = document.getElementById('chat-input').value;
    handleChatGPT(userInput);
  });