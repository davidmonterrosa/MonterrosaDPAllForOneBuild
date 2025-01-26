// Id Section
const firstNumberInput = document.getElementById("firstNumberInput");
const secondNumberInput = document.getElementById("secondNumberInput");
const answerToQuestions = document.getElementById("answerToQuestions");
const submitSumBtn = document.getElementById("submitSumBtn");

const askQuestions = async (userName, time) => {
    const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/AskingQuestions/AskQuestions/${userName}/${time}`);
    const data = response.text();
    console.log(data);
    return data;
}

// Fetch
submitSumBtn.addEventListener("click", async () => {
    const result = await askQuestions(firstNumberInput.value, secondNumberInput.value)
    answerToQuestions.innerText = result;
});