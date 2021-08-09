function calculate(args){
    let result;
    if(args.op==="+"){
    result=args.n1+args.n2;
    }else if(args.op==="-"){
    result=args.n1-args.n2;
    }else{
    result="Not supported";
    }
    return result;
}


// CASE 1
class Obj1 {
    constructor(op, n1, n2) {
        this.op = op;
        this.n1 = n1;
        this.n2 = n2;
    }
}

const case1 = new Obj1("-", 9, 6);
console.log(calculate(case1));



// CASE 2
let obj2 = {
    op: "+",
    n1: 3,
    n2: 12
};
console.log(calculate(obj2));