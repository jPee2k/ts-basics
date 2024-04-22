// Tuple == Array

const person: {
    role: [number, string]
} = {
    role: [2, 'author'],
};

person.role.push('admin');              // OK -> [2, 'author', 'admin'] -> exception
// person.role[1] = 10;                 // error
// person.role = [0, 'admin', 'user'];  // error
