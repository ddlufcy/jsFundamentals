//es6 classes
class User {
    constructor (name){
        this.name = name;
        this.type = "Trial user";
    }
    //Method 1
    greet(){
        console.log('Welcome back, ' + this.name);
    }
    //method 2
    status(){
        console.log('Current status: ' + this.type);
    }
}

//instance of new object
let anonDude = new User("Anonymous dude");

anonDude.greet();
anonDude.status();

let anonLady = new User("Anonymous lady");
anonLady.greet();
anonLady.status();

let Jeff = new User("Jeff");
Jeff.greet();
Jeff.status();