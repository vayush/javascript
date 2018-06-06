let arr = [1,2,3,4,5,6,7,8];

let sqarr = arr.map(function(item,index,array){
    return item*item
})
console.log(sqarr)

console.log(Math.sqrt(9))

let rootarr = arr.map(Math.sqrt)
console.log(rootarr)
//reverse
let revarr = arr.map(function(item,index,array){
    return array[array.length - index -1]
})
console.log(revarr)
clog.s
