// scripts.js
document.getElementById('calculate').addEventListener('click', function () {
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);

    if (isNaN(income) || isNaN(expenses)) {
        alert("Please enter valid numbers for both fields.");
        return;
    }

    const balance = income - expenses;

    const balanceElement = document.getElementById('balance');
    if (balance >= 0) {
        balanceElement.textContent = `Balance: $${balance.toFixed(2)} (You are within budget!)`;
        balanceElement.style.color = 'green';
    } else {
        balanceElement.textContent = `Balance: $${balance.toFixed(2)} (You are over budget!)`;
        balanceElement.style.color = 'red';
    }
});
