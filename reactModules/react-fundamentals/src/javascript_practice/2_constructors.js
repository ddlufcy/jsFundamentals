class User {
    constructor(first, last, e){
        this.f = first;
        this.l = last;
        this.email = e;
    }
}
let userOne = new User("Paul", "Conner", "p@e11.org");

class Car{
    constructor(make, model, year){
        this.ma = make;
        this.mo = model;
        this.y = year;
    }
}
let driving = new Car("Honda", "Civic", 2018);
console.log(driving.ma + driving.mo);