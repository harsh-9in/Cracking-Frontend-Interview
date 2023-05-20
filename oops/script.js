// creating object using lateral

let person= {
    firstName: "harsh",
    lastName: "Kumar",

    getName:function(){
        return `This is the name ${this.firstName} ${this.lastName}`
    }
}

console.log(person.firstName);
console.log(person.getName());


// creating object using object constructor

function Company(companyName,address){
    this.companyName=companyName;
    this.address=address;

    function getCompanyData(){
        return `the company ${this.companyName} is pleced at${this.address}`
    }
}


let comp1=new Company("Infosys","banglore");
let comp2=new Company("TCS","Mumbai");


console.log(comp1)
console.log(comp2);