// Id Section
const firstNumberInput = document.getElementById("firstNumberInput");
const secondNumberInput = document.getElementById("secondNumberInput");
const resultText = document.getElementById("resultText");
const submitSumBtn = document.getElementById("submitSumBtn");

const compareNumbers = async (num1, num2) => {
    const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/GreaterOrLess/GreaterOrLess/${num1}/${num2}`);
    const data = response.text();
    console.log(data);
    return data;
}

// Fetch
submitSumBtn.addEventListener("click", async () => {
    const result = await compareNumbers(firstNumberInput.value, secondNumberInput.value)
    resultText.innerText = result;
});