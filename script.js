(function() {
    const budgetInput = document.getElementById('budget');
    const budgetValue = document.getElementById('budget-value');
    const priceValue = document.getElementById('price-value');

    const PERCENT = 0.15; // 15% от бюджета
    const FIXED = 2000; // фиксированная часть

    function formatNumber(num) {
        return num.toLocaleString('ru-RU');
    }

    function updatePrice() {
        const budget = parseInt(budgetInput.value, 10);
        budgetValue.textContent = formatNumber(budget);
        const price = Math.round(budget * PERCENT + FIXED);
        priceValue.textContent = formatNumber(price);
    }

    if (budgetInput) {
        budgetInput.addEventListener('input', updatePrice);
        updatePrice();
    }

    function validateForm(form) {
        form.addEventListener('submit', function(e) {
            if (!form.checkValidity()) {
                e.preventDefault();
                alert('Пожалуйста, заполните все обязательные поля.');
            }
        });
    }

    const calcForm = document.getElementById('calc-form');
    const feedbackForm = document.getElementById('feedback-form');
    if (calcForm) validateForm(calcForm);
    if (feedbackForm) validateForm(feedbackForm);

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    if (burger && nav) {
        burger.addEventListener('click', function() {
            nav.classList.toggle('open');
        });
    }
})();
