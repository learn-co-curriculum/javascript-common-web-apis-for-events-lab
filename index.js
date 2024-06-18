const pets = [
    {
        name: "Fido",
        image: "images/pets/dog.jpeg",
        description: "Fido the Dog. It wants to be your best friend!"
    },
    {
        name: "Kitty",
        image: "images/pets/cat.png",
        description: "Kitty the Cat. It wants to be your cute baby kitten!"
    },
    {
        name: "Hammy",
        image: "images/pets/hamster.jpeg",
        description: "Hammy the Hamster. It's so tiny and cute!"
    },
    {
        name: "Polly",
        image: "images/pets/parrot.jpeg",
        description: "Polly the Parrot. Polly wants a cracker!"
    },
    {
        name: "Angel",
        image: "images/pets/horse.jpeg",
        description: "Angel the Horse. It begs politely, like an angel, for you to adopt it."
    },
    {
        name: "Fluffy",
        image: "images/pets/guinea-pig.jpeg",
        description: "Fluffy the Guinea Pig. It's so soft and fluffy!"
    },
    {
        name: "Goldie",
        image: "images/pets/fish.jpeg",
        description: "Goldie the Goldfish. It lives under the sea and looks forward to sea you soon."
    }
];

let draggedPet;

function displayPetDetails(pet){
    const nameElement = document.querySelector('.name');
    nameElement.textContent = pet.name;
    
    const detailImageElement = document.querySelector('.detail-image');
    detailImageElement.src = pet.image;
    detailImageElement.alt = pet.name;

    const descriptionDisplayElement = document.getElementById('description-display');
    descriptionDisplayElement.textContent = pet.description;
}

displayPetDetails(pets[0]);

pets.forEach(addPetImageToPetsDiv);

function addPetImageToPetsDiv(pet){
    const imgElement = document.createElement('img');
    imgElement.src = pet.image;
    imgElement.alt = pet.name;

    const petsDiv = document.getElementById('pets');
    petsDiv.appendChild(imgElement);

    // Write your solution code for Task # 4 here!
}

function handleSubmit(event){
    // Write your solution code for Task # 2 here!
}

function handleLoad(event){
    // Write your solution code for Task # 3 here!
}

// Write your solution code for Task # 1 here!

// Write your solution code for Task # 5 here!

// Write your solution code for Task # 6 here!