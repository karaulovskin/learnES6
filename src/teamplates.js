function greet(name) {
    console.log(`Hello ${name}`.toUpperCase());
}
greet('Bill');


function createEmail(to, from, subject, message) {
    console.log(`
        To: ${to}
        From: ${from}
        Subject: ${subject}
        Message: ${message}
    `);
}
createEmail('john@mail.com', 'Jane@mail.com', 'How are you doing?');


function sum(x, y) {
    console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`); /*parseInt() - преобразовать строку в число */
}
sum(5, 7);


let name = 'Bill';
console.log(upperName`Hi ${name}`);

function upperName(literals, value) {
    return literals[0] + value.toUpperCase();
}