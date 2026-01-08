const loveBtn = document.getElementById('loveBtn');
const friendBtn = document.getElementById('friendBtn');
const message = document.getElementById('message');

loveBtn.addEventListener('click', () => {
  message.textContent = "💖 รักเหมือนกันนะ";
});

friendBtn.addEventListener('click', () => {
  message.textContent = "เออ ก็แล้วแต่";
});
