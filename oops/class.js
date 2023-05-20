//  simple class  
class Person{
    name;
    height;
    birth;
    constructor(name,height,birth){
        this.name=name;
        this.height=height;
        this.birth=birth;
    }

    getPerson(){
        console.log(this.name,this.height,this.birth);
    }
}

var humman=new Person("humman",5,2000);
humman.getPerson();


//  Inharitance 
class Student extends Person{
    clas;
    roll_no;
    constructor(name,height,birth,clas,roll_no){
        super(name,height,birth);
        this.clas=clas;
        this.roll_no=roll_no;
    }

    getStudent(){
        console.log(this.name,this.birth,this.clas,this.height,this.roll_no);
    }
}


var ram=new Student("ram",3,2005,6,1002);
ram.getPerson(); 


// Encapsulation In javascripts
class Counter{
    #pricount=10;

    get getcount(){
        console.log(this.#pricount);
    }
    set setcount(count){
        this.#pricount=count;
    }
}

let tmpcount=new Counter();
tmpcount.setcount=100;

// tmpcount.#pricount=500   this will give error
console.log(tmpcount.getcount);