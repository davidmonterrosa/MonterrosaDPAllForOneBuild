// Id Section
const firstNumberInput = document.getElementById("firstNumberInput");
const resultText = document.getElementById("resultText");
const submitSumBtn = document.getElementById("submitSumBtn");

const getRestaurant = async (inputString) => {
    const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/RestaurantPicker/PickRestaurant/${inputString}`);
    const data = await response.text();
    console.log(data);
    return data;
}

// Fetch
submitSumBtn.addEventListener("click", async () => {
    const result = await getRestaurant(firstNumberInput.value)
    resultText.innerText = result;
});