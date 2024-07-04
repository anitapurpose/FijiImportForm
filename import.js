const deMinimis = 1000;
const vatRate = 0.15;
const form = document.getElementById("calculator-form");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission
  const itemCost = parseFloat(document.getElementById("item-cost").value);

  if (isNaN(itemCost) || itemCost < 0) {
    resultsDiv.textContent = "Please enter a valid positive number for item cost.";
    return;
  }

  let resultText = "";
  if (itemCost <= deMinimis) {
    const vatAmount = itemCost * vatRate;
    const totalCost = itemCost + vatAmount;
    resultText = `
      <p>Your item cost is FJD ${itemCost.toFixed(2)}.</p>
      <p>The item qualifies for de minimis exemption (no VAT).</p>
      <p>Total cost: FJD ${totalCost.toFixed(2)}</p>
    `;
  } else {
    const excessAmount = itemCost - deMinimis;
    const vatAmount = excessAmount * vatRate;
    const totalCost = itemCost + vatAmount;
    resultText = `
      <p>Your item cost is FJD ${itemCost.toFixed(2)}.</p>
      <p>Amount exceeding de minimis: FJD ${excessAmount.toFixed(2)}.</p>
      <p>VAT (15%) on excess amount: FJD ${vatAmount.toFixed(2)}.</p>
      <p>Total cost: FJD ${totalCost.toFixed(2)}.</p>
    `;
  }

  resultsDiv.innerHTML = resultText;
});
