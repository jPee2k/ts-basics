type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function customCombine (
    a: Combinable,
    b: Combinable,
    resultType: ConversionDescriptor = 'as-number'
) {
    let result;

    if (typeof a === 'number' && typeof b === 'number' || resultType === 'as-number') {
        result = +a + +b;
    } else {
        result = a.toString() + b.toString();
    }

    return result;
}

console.log(customCombine(1, 2));                       // 3
console.log(customCombine('1', '2', 'as-number'));      // 3
console.log(customCombine('1', '2'));                   // 3 -> default is 'as-number'
console.log(customCombine('1', '2', 'as-text'));        // '12'
// console.log(customCombine('1', '2', 'as-tex'));      // error: Argument of type '"as-tex"' is not assignable to parameter of type '"as-number" | "as-text"'.
