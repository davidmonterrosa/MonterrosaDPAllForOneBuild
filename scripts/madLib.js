// Id Section
const victimNameField = document.getElementById("victimNameField");
const animalField = document.getElementById("animalField");
const taskNameField = document.getElementById("taskNameField");
const itemField = document.getElementById("itemField");
const rivalNameField = document.getElementById("rivalNameField");
const specialMoveField = document.getElementById("specialMoveField");
const animalCountField = document.getElementById("animalCountField");
const numberField = document.getElementById("numberField");
const adjectiveField = document.getElementById("adjectiveField");
const distanceField = document.getElementById("distanceField");
const storyText = document.getElementById("storyText");
const generateStoryBtn = document.getElementById("generateStoryBtn");

const generateStory = async ( victimName,  animal,  taskName,  item,  rivalName,  specialMoveName,  animalCount,  number,  adjective,  unitofDistance) => {
    const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/MadLib/GenerateStory/${victimName}/${animal}/${taskName}/${item}/${rivalName}/${specialMoveName}/${animalCount}/${number}/${adjective}/${unitofDistance}`);
    const data = await response.text();
    console.log(data);
    return data;
}

// Fetch
generateStoryBtn.addEventListener("click", async () => {
    console.log(victimNameField.value)
    const result = await generateStory(victimNameField.value, animalField.value, taskNameField.value, itemField.value, rivalNameField.value, specialMoveField.value, animalCountField.value, numberField.value, adjectiveField.value, distanceField.value)
    storyText.innerText = result;
});