let characters = []

function addCharacter() {
    const characterName = prompt("Enter Name:");
    const initiativeRoll = prompt("Initiative:");

    const character = {
        name: characterName,
        initiative: parseInt(initiativeRoll)
    };

    characters.push(character);
    characters.sort((a,b) => b.initiative - a.initiative);

    updateInitiativeList();
}

function updateInitiativeList() {
    const initiativeList = document.getElementById("initiative-list");
    initiativeList.innerHTML = "";

    characters.forEach((character) => {
        const li = document.createElement("li");
        li.textContent = `${character.name}: ${character.initiative}`;
        initiativeList.appendChild(li);
    });
}