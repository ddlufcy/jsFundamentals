/*
    -objects store enumerable properties in a key value pair
    -denoted by {}
*/

let netFlix = {
    id: 1,
    name: 'The Office',
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                }
            ]
        }
    },
    season2: {},
    season3: {}
};

/*
    - Where arrays use bracket notation [], objects use what is called dot notation (.)
*/
// console.log("All Data:", netFlix)
// console.log("Season Info:", netFlix.season1.seasonInfo)
// console.log("Episode 5", netFlix.season1.seasonInfo.episodeInfo[4].episode)
console.log(`episode number: ${netFlix.season1.seasonInfo.episodeInfo[4].episode}`)
console.log(`episodeName: ${netFlix.season1.seasonInfo.episodeInfo[4].episodeName}`)

/*
    JSON Objects
        
        - JSON stand for JavaScript Object Notation
        - The JSON syntax is derived for JavaScript Object Notation syntax, but the JSON format is text only
        -JSON exists as a string - useful when we want to fetch data from a server. It needs to be converted to a native
            JavaScript Object if you want to access the data.
*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkKnicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}
// Objects & Object values
console.log(Object.keys(spaceJam.toonSquad));
console.log(Object.keys(spaceJam.toonSquad.duck))
console.log(Object.keys(spaceJam.toonSquad).toString())
console.log(Object.values(spaceJam.toonSquad));

/*
    -Object bracket notation
       - object bracket notation also allows us to parse through an object and pull out specific information
       - using object bracket notation can be useful if we want to store a key from an object in a variable
       - all keys in objects are keys even though they are not wrapped in qoutes

*/
let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
};
// keys in an object are strings

// let test = Object.keys(garden);
// console.log(test);
// console.log(typeof test[0]);

// Standard dot notation
console.log(garden.vegetable);

// object bracket notation
let zucchini = garden['vegetable']; 
/*
we can access keys in an object by specifying the name of the object followed by the key we want to grab in brackets. The key name that we pass into our object needs to be a string (wrapped in quotes) because all keys in an object are strings
*/
console.log(zucchini);

let baking = {};
baking['zucchini'] = 'better make some bread!'; // setting key/value pair using object bracket notation
console.log(baking);

console.log(baking[garden['vegetable']]);
console.log(baking['zucchini']);

// using bracket notation is a good idea when you might not be able to use dot notation to dig through an object

let testObj = {
    "Spaces Here": true,
    noSpaces: true
}
console.log(testObj.noSpaces);
console.log(testObj.["Spaces Here"];
// Our use case for object bracket notation is if a key in our object has spaces in it