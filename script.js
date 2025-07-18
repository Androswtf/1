function calculatePrice() {
  const checkboxes = document.querySelectorAll('.services input[type="checkbox"]');
  const tariffBoxes = document.querySelectorAll('.tariffs input[type="checkbox"]');
  const months = parseInt(document.getElementById('months').value, 10) || 1;
  let total = 0;
  checkboxes.forEach(cb => {
    if (cb.checked) {
      total += parseInt(cb.value, 10);
    }
  });
  tariffBoxes.forEach(cb => {
    if (cb.checked) {
      total += parseInt(cb.value, 10);
    }
  });
  total *= months;
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `Ваш маркетинговый бюджет: ${total} ₽`;
}

document.getElementById('calculate').addEventListener('click', calculatePrice);

const contactBtn = document.getElementById('contact-btn');
const modal = document.getElementById('contact-modal');
const sendBtn = document.getElementById('send-contact');
const nameInput = document.getElementById('client-name');
const phoneInput = document.getElementById('client-phone');

function checkInputs() {
  if (nameInput.value.trim() && phoneInput.value.trim()) {
    sendBtn.disabled = false;
  } else {
    sendBtn.disabled = true;
  }
}

contactBtn.addEventListener('click', () => {
  modal.classList.add('active');
});

nameInput.addEventListener('input', checkInputs);
phoneInput.addEventListener('input', checkInputs);

sendBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  nameInput.value = '';
  phoneInput.value = '';
  sendBtn.disabled = true;
  alert('Скоро мы с вами свяжемся, благодарим!');
});
