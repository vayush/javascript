//there is no classes in js
// can be created using function
//syntactic sugar
//uneval  tosource
//outside contructor function are created in prototype
//getter and setter
class Person{
    constructor (name,age){
        this._name = name;
        this.nick = name.split(" ")[0].toLowerCase();
        this.age = age;
        this.greet = function(){
            return `Hello $(this.name)`;
        }
    }
    get lastname(){
        return this._name.split(" ")[1]
    }
    //in argument only one value
    get name(){return this._name}
    set name(val){
        this._name = val;
        this.nick = val.split(" ")[0].toLowerCase();
    }
    getFirstName(){
        return this.name.split(" ")[0]
    }
}
let p = new Person("john doe",40);
console.log(p);
console.log(p.getFirstName())
console.log(p.lastname)
