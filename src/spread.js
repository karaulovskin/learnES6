let staticLanguages = ['C', 'C++', 'Java'];
let dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];
let Languages = [...staticLanguages, 'С#', ...dynamicLanguages, 'Python'];

console.log(Languages);


function add(x, y, z) {
    console.log(x + y + z);
}

let number = [1, 2, 3];
add(...number);