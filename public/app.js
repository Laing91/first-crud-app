const startingCharacters = 
  [{
        "name": "Wardancer",
        "tasks": [
            {
                "dungeonName": "Chaos Dungeon",
                "currentProgress": 0,
                "maxProgress": 2,
                "resetFrequency" : "daily"
            },
            {
                "dungeonName": "Guardian Raid",
                "currentProgress": 0,
                "maxProgress": 2,
                "resetFrequency" : "daily"
            },
            {
                "dungeonName": "Una's Task",
                "currentProgress": 0,
                "maxProgress": 3,
                "resetFrequency" : "daily"
            },
            {
                "dungeonName": "Guild Support",
                "currentProgress": 0,
                "maxProgress": 1,
                "resetFrequency" : "daily"
            },
            {
                "dungeonName": "Argos",
                "currentProgress": 0,
                "maxProgress": 1,
                "resetFrequency" : "weekly"
            },
            {
                "dungeonName": "Valtan",
                "currentProgress": 0,
                "maxProgress": 1,
                "resetFrequency" : "weekly"
            },
            {
                "dungeonName": "Vykas",
                "currentProgress": 0,
                "maxProgress": 1,
                "resetFrequency" : "weekly"
            }
        ]
    },
    {
        "name": "Artillerist",
        "tasks": [
            {
                "dungeonName": "Chaos Dungeon",
                "currentProgress": 0,
                "maxProgress": 2,
                "resetFrequency" : "daily"
            },
            {
                "dungeonName": "Guardian Raid",
                "currentProgress": 0,
                "maxProgress": 2,
                "resetFrequency" : "daily"
            },
            {
                "dungeonName": "Una's Task",
                "currentProgress": 0,
                "maxProgress": 3,
                "resetFrequency" : "daily"
            },
            {
                "dungeonName": "Guild Support",
                "currentProgress": 0,
                "maxProgress": 1,
                "resetFrequency" : "daily"
            },
            {
                "dungeonName": "Argos",
                "currentProgress": 0,
                "maxProgress": 1,
                "resetFrequency" : "weekly"
            },
            {
                "dungeonName": "Valtan",
                "currentProgress": 0,
                "maxProgress": 1,
                "resetFrequency" : "weekly"
            },
            {
                "dungeonName": "Vykas",
                "currentProgress": 0,
                "maxProgress": 1,
                "resetFrequency" : "weekly"
            }
        ]
    },
    {
        "name": "Scrapper",
        "tasks": [
            {
                "dungeonName": "Chaos Dungeon",
                "currentProgress": 0,
                "maxProgress": 2,
                "resetFrequency" : "daily"
            },
            {
                "dungeonName": "Guardian Raid",
                "currentProgress": 0,
                "maxProgress": 2,
                "resetFrequency" : "daily"
            },
            {
                "dungeonName": "Una's Task",
                "currentProgress": 0,
                "maxProgress": 3,
                "resetFrequency" : "daily"
            },
            {
                "dungeonName": "Guild Support",
                "currentProgress": 0,
                "maxProgress": 1,
                "resetFrequency" : "daily"
            },
            {
                "dungeonName": "Argos",
                "currentProgress": 0,
                "maxProgress": 1,
                "resetFrequency" : "weekly"
            },
            {
                "dungeonName": "Valtan",
                "currentProgress": 0,
                "maxProgress": 1,
                "resetFrequency" : "weekly"
            },
            {
                "dungeonName": "Vykas",
                "currentProgress": 0,
                "maxProgress": 1,
                "resetFrequency" : "weekly"
            }
        ]
    }];

function saveCharacters() {
  localStorage.setItem("characters", JSON.stringify(characters));
}

function loadCharacters() {
  let charStr = localStorage.getItem("characters");
  return JSON.parse(charStr) ?? startingCharacters;
}

characters = loadCharacters()



function renderCharacters()  {
  const dungeonList = document.querySelector("#header");
  dungeonList.innerHTML = `<td>Name</td>`
  
  characters[0].tasks.forEach((task) => dungeonList.innerHTML += `<td>${task.dungeonName}</td>`)
  
	const characterList = document.querySelector("#character-list");
  let html = "";
  
  characters.forEach((character, index) => {
  	html+=`<tr> <td> ${character.name} </td>`;
    character.tasks.forEach((task, index2) => {
      let maxed = task.currentProgress == task.maxProgress
      
    html+=`<td><button class="btnStyle" style="border: 1px solid black ${maxed ? "#4cbd2a" : ""}; background-color: ${maxed ? "#4cbd2a" : ""}" id="${index}, ${index2}" onclick="increment(${index}, ${index2})">(${task.currentProgress} / ${task.maxProgress})</button></td>`;
    })
});
  
  characterList.innerHTML = html;
}

function increment(nameIndex, dungeonIndex){
  if(characters[nameIndex].tasks[dungeonIndex].currentProgress < characters[nameIndex].tasks[dungeonIndex].maxProgress){
    characters[nameIndex].tasks[dungeonIndex].currentProgress++
  }
  saveCharacters()
  renderCharacters()
}


renderCharacters();

  
  function reset(){
    characters = startingCharacters
    renderCharacters()
    saveCharacters()
  }

  function dailyReset(){
    characters.forEach((char) => char.tasks.filter((task) => task.resetFrequency == "daily").forEach((task) => task.currentProgress = 0))

    saveCharacters()
    renderCharacters()
  }
// dailyReset()

  function weeklyReset(){
   characters.forEach((char) => char.tasks.filter((task) => task.resetFrequency == "weekly").forEach((task) => task.currentProgress = 0))

    saveCharacters()
    renderCharacters()
  }