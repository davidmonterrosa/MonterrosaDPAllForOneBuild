// Id Section
const firstNumberInput = document.getElementById("firstNumberInput");
const resultText = document.getElementById("resultText");
const submitSumBtn = document.getElementById("submitSumBtn");

const greet = async (userName) => {
    const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/HelloWorld/Hello/${userName}`);
    const data = response.text();
    console.log(data);
    return data;
}

// Fetch
submitSumBtn.addEventListener("click", async () => {
    const result = await greet(firstNumberInput.value)
    resultText.innerText = result;
});