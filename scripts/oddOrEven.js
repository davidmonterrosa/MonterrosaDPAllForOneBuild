// Id Section
const firstNumberInput = document.getElementById("firstNumberInput");
const resultText = document.getElementById("resultText");
const submitSumBtn = document.getElementById("submitSumBtn");

const checkNumber = async (userName) => {
    const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/OddOrEven/OddOrEven/${userName}`);
    const data = await response.text();
    console.log(data);
    return data;
}

// Fetch
submitSumBtn.addEventListener("click", async () => {
    const result = await checkNumber(firstNumberInput.value)
    resultText.innerText = result;
});