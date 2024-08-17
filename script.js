// API ENDPOINT catass.com to randomize cat imagee
const api = "https://cataas.com/cat?json=true";

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
const catImage = document.getElementById("cat-image");
const catText = document.getElementById("cat-text");
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

            const generateFunnyName = () => {
                const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
                const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

                return `${randomFirstName} ${randomLastName}`;

            }

            catLabel.textContent = `${generateFunnyName()}`;

        } catch {
            console.error("Error fetching cat image:", error);
            catText.textContent = "Seems like your cat khodam being buried in mountain of Whiskas";
        }
    }
    randomizeCat();
})