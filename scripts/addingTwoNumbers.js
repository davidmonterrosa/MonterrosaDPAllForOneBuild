// Id Section
const firstNumberInput = document.getElementById("firstNumberInput");
const secondNumberInput = document.getElementById("secondNumberInput");
const sumOfTwoNumbers = document.getElementById("sumOfTwoNumbers");
const submitSumBtn = document.getElementById("submitSumBtn");

const addNumbers = async (num1, num2) => {
    const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/AddingTwoNumbers/AddNumbers/${num1}/${num2}`);
    const data = response.text();
    console.log(data);
    return data;
}

// Fetch
submitSumBtn.addEventListener("click", async () => {
    const result = await addNumbers(firstNumberInput.value, secondNumberInput.value)
    sumOfTwoNumbers.innerText = result;
});