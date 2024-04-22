// let combineFunction: Function;
let combineFunction: (a: number, b: number) => number;

const addNums = (a: number, b: number) : number => {
    return a + b;
};

const addStrs = (a: string, b: string) : string => {
    return a + b;
}

combineFunction = addNums;
// combineFunction = addStrs; // error: Type '(a: string, b: string) => string' is not assignable to type '(a: number, b: number) => number'.

console.log(combineFunction(1, 2));
// console.log(combineFunction(1, 2, 4, 'fff'));
