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
let dan = new User("Daniel");

// trialUser.trialEnding();
dan.paidStatus();