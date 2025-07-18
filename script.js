function calculatePrice() {
  const checkboxes = document.querySelectorAll('.services input[type="checkbox"]');
  const months = parseInt(document.getElementById('months').value, 10) || 1;
  let total = 0;
  checkboxes.forEach(cb => {
    if (cb.checked) {
      total += parseInt(cb.value, 10);
    }
  });
  total *= months;
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `Итого: ${total} ₽`;
}

document.getElementById('calculate').addEventListener('click', calculatePrice);
