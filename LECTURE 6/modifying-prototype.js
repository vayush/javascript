// string.prototype.somefun = function () {
//     console.log('OMG')
// }
//


let str = 'AYUSH VERMA'

Array.prototype.filterNums = function () {
    return this.filter(i => (typeof i == 'number'))
};

let arr = [1,'abcd',3,{a:10}];

///TAKE function FROM CLASS PROGRAM make simple

console.log(arr.filterNums());