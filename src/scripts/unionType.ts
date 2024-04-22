function combine (a: number | string, b: number | string) {
    let result;

    if (typeof a === 'number' && typeof b === 'number') {
        result = a + b;
    } else {
        result = a.toString() + b.toString();
    }

    return result;
}

console.log(combine(1, 2));     // 3
console.log(combine('1', '2')); // '12'
console.log(combine(1, '2'));   // '12'
