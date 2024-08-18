// API ENDPOINT catass.com to randomize cat imagee
const api = "https://cataas.com/cat?type=xsmall&json=true";

// Array of Funny Names
const firstNames = [
    "Captain", "Sir", "Professor", "Doctor", "Agent",
    "Commander", "General", "Admiral", "Duke", "Baron",
    "King", "Queen", "Princess", "Prince", "Lord",
    "Lady", "Count", "Countess", "Marquis", "Marquise",
    "Wizard", "Witch", "Elf", "Orc", "Goblin",
    "Ninja", "Samurai", "Pirate", "Cowboy", "Alien",
    "Robot", "Android", "Cyborg", "Superhero", "Villain",
    "Smarty", "Giggles", "Noisy", "Sleepy", "Hungry",
    "Grumpy", "Happy", "Dopey", "Bashful", "Sneezy"
];

const lastNames = [
    "McAwesome", "VanAwesome", "O'Fantastic", "DeWonderful",
    "Superstar", "Genius", "Incredible", "Magnificent",
    "Fabulous", "AwesomeSauce", "Nerdlinger", "Geekerson",
    "Hackerman", "Coder", "Programmer", "Designer",
    "TheGreat", "TheMighty", "TheBold", "TheBrave",
    "TheWise", "TheFunny", "TheSmart", "TheCool",
    "Thunderbolt", "Lightning", "Hurricane", "Tornado",
    "Volcano", "Earthquake", "Meteor", "Comet",
    "Galaxy", "Universe", "BlackHole", "Starman",
    "Skywalker", "Vader", "Yoda", "Chewie"
];
// ELEMENT SELECTION
const catButton = document.getElementById("cat-button");
const nameForm = document.getElementById("name-form");
const mainTitle = document.getElementById("main-title");
const mainText = document.getElementById("main-text");


// When the button being clicked start randomizeCat function
catButton.addEventListener("click", () => {
    const randomizeCat = async () => {
        mainText.textContent = `Trying to Find Your Cat Khodam.....`
        try {
            // Fetching Data from API
            const response = await fetch(api);
            const result = await response.json();
            const imageUrl = "https://cataas.com/cat/"
            console.log(result);
            // Display usernameForm in text
            const nameFormValue = nameForm.value;
            // Function to Generate the Names of Cat
            const generateFunnyName = () => {
                const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
                const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
                return `${randomFirstName} ${randomLastName}`;
            }
            // Create new element in Document
            const catImage = document.createElement("img");
            const catText = document.createElement("p");
            // Element Content
            catImage.src = `${imageUrl}${result._id}`;
            catText.textContent = `${nameFormValue} your Cat Khodam is ${generateFunnyName()}`;
            // override elements style 
            catImage.style.marginTop = "1rem";
            catText.style.paddingTop = "0.8rem";
            // Displaying CatImage and Name
            mainText.innerHTML = '';
            mainText.append(catImage, catText);
            console.log(catImage, catText);
        } catch (error) {
            console.error("Error fetching cat image:", error);
            mainText.textContent = "Seems like your cat khodam being buried in mountain of whiskas";
        }
    }
    randomizeCat();
});