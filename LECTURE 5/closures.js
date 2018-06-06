
function createCounter(){
    let x =0;
    function count(){
        ++x;
        return x;
    }
    return count ;
}
let myCounter = createCounter();

console.log(myCounter())
console.log(myCounter())
console.log(myCounter())
console.log(myCounter())