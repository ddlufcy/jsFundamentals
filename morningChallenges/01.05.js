let bladeRunner = {
        nameOfMovie: "Bladerunner",
        runTime: 117,
        characters: [{
                    name: "Deckard",
                    age: 40,
                    items: [{ itemOne: "gun"}, {itemTwo: "badge"}]
                    },
                    {
                    name: "Rachel",
                    age: 1,
                    items: [{ itemOne: "fur coat"}, {itemTwo: "lipstick"}]   
                    }
                    ],                            
                }
console.log(bladeRunner.nameOfMovie)                
console.log(bladeRunner.runTime)             
console.log(bladeRunner.characters)   
console.log(bladeRunner.characters[0].name)   
console.log(bladeRunner.characters[0].items[1].itemTwo)   