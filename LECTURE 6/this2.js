//learn this.pointer important

function alpha() {
    this.aa=10
}
alpha();
console.log(aa);

let obj = {
    p:10,
    q:20,
    r:function () {
        console.log(this);
        alpha()
    }
};
obj.r();
console.log(obj.a);
//this is in lexical scope

let x = obj.r;
// x();
let obj2= {
    a : 10,
    b : 20,
    c :x
}
obj2.c();