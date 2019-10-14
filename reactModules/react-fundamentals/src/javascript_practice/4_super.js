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
    paidStatus(){
        console.log(this.name + " is on a premium account.")
    }
}

class TrialUser extends User {
    trialEnding(){
        console.log("Your trial is ending soon " + this.name);
    }
}   
   
let trialUser = new TrialUser("Paul");

class bronzeUser extends User {

    constructor(username, password, ccinfo) {
        super(username, password);
        this.type = "Bronze User"
        this.ccinfo = ccinfo;
    }
}
let bronzeGuy = new bronzeUser("guy", "guy1", "123456789");
console.log(bronzeGuy)