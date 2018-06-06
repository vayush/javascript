let arr = [1,2,3,4,5,6,7,8];
let evenArr = arr.filter(function(item,index,array){
    return (item % 2 == 0)
})
console.log(evenArr)

//reduce
let a = [1,2,3,4,5,6,7,8]

let sum = a.reduce(function(accum,item,index,array){
    console.log(index + " : " + accum)
    return accum + item
})
console.log(sum)