const persen: {
    name: string;
    age: number;
    pets: string[];
    nestedObject: {
        key: string;
    };
} = {
    name: 'John Doe',
    age: 25,
    pets: ['dog', 'cat'],
    nestedObject: {
        key: 'value'
    }
};

console.log(typeof persen.name); // John Doe
