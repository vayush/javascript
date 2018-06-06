//this to public functions
function Vehicle(color,seats){
    this.color = color;
    this.seats = seats;
    let wheels = 2;
    //this.wheels use
    this.getwheels = function () {
        return wheels
    };
    //return this.wheels to make it public
    this.setwheels = function (wh) {
        wheels = wh
    };
    this.canAccomodate = function (people) {
        return people <= seats ;
    }
}
let bike = new Vehicle('Black',2);
let car =  new Vehicle('Red',4);
console.log(bike.canAccomodate(3));
console.log(car.canAccomodate(3));
console.log(bike.wheels);
//wheels is private
 console.log(bike.getwheels());
//getwheels is public and can access private functions
car.setwheels(4);
console.log(car.getwheels());
