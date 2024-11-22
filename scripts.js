// scripts.js
document.getElementById('calculate').addEventListener('click', function () {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const loanTerm = parseInt(document.getElementById('loanTerm').value);

    if (!loanAmount || !interestRate || !loanTerm) {
        document.getElementById('result').textContent = "Please enter valid inputs!";
        return;
    }

    const monthlyRate = interestRate / 12;
    const numPayments = loanTerm * 12;
    const monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));
    document.getElementById('result').textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
});
