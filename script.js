document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("results").innerHTML = "";
  const convertFrom = document.getElementById("material-selector").value;
  const convertTo = document.getElementById("to-material-selector").value;
  const materialAmount = document.getElementById("material-amount").value;
  calculateMaterial(convertFrom, convertTo, materialAmount);
});

function calculateMaterial(convertFrom, convertTo, materialAmount) {
  if (convertFrom === "999") {
    if (convertTo === "999") return alert("Toks skaičiavimas negalimas");

    const gold = calculateGold(materialAmount, convertTo);
    renderResult(convertFrom, convertTo, materialAmount, gold);
  } else {
    const pureGold = calculatePureGold(materialAmount, convertFrom);
    const gold = calculateGold(pureGold, convertTo);
    renderResult(convertFrom, convertTo, materialAmount, gold);
  }
}

function calculatePureGold(materialAmount, fineness) {
  return Number(materialAmount) * Number(fineness / 1000);
}

function calculateGold(materialAmount, fineness) {
  return Number(materialAmount) / Number(fineness / 1000);
}

function renderResult(convertFrom, convertTo, amount, gold) {
  const resultBlock = document.getElementById("results");
  const span = document.createElement("span");
  span.textContent = `Iš ${amount} g. ${convertFrom} aukso: gaunasi ${convertTo} aukso: ${gold} g. `;
  resultBlock.append(span);
}
