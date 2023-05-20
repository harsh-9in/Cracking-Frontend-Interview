// this is also called the prototypal inharitance

// these prototype will work on all the array and object present in the project 
Array.prototype.show=function(){
    return this;
}

Object.prototype.show=function(){
    return this;
}

let obj={
    getName:function() {return `${this.firstName} ${this.secondName}`}
}

let obj1={
    firstName:"harsh",
    secondName:"Kumar",

}

let obj2={
    firstName:"harshit",
    secondName:"Khanna",
    
}

obj1.__proto__=obj;
obj2.__proto__=obj;


console.log(obj2.getName());

let arr=[1,2,3,4,5];

console.log(arr.show());

console.log(obj1.show());


    