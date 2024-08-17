const api = "https://cataas.com/cat?json=true";

const catButton = document.getElementById("cat-button");
const catText = document.getElementById("cat-text");
const catImage = document.getElementById("cat-image");
const nameForm = document.getElementById("name-form");
const nameLabel = document.getElementById("name-label");
const catLabel = document.getElementById("cat-label");

nameForm.addEventListener("keyup", () => {
    const nameFormValue = nameForm.value;
    nameLabel.textContent = nameFormValue;
});


catButton.addEventListener("click", () => {
    const randomizeCat = async () => {
        try {
            const response = await fetch(api);
            const result = await response.json();
            const imageUrl = "https://cataas.com/cat/"
            console.log(result);


            catImage.src = `${imageUrl}${result._id}`;
            catLabel.textContent = `${result.tags[`${Math.random()}`]}`
        } catch {
            console.error("Error fetching cat image:", error);
            catText.textContent = "Seems like your cat khodam being buried in mountain of";
        }

    }
    randomizeCat();
})