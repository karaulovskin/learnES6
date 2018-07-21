'use strict';

var _templateObject = _taggedTemplateLiteral(['Hi ', ''], ['Hi ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
    console.log(('Hello ' + name).toUpperCase());
}
greet('Bill');

function createEmail(to, from, subject, message) {
    console.log('\n        To: ' + to + '\n        From: ' + from + '\n        Subject: ' + subject + '\n        Message: ' + message + '\n    ');
}
createEmail('john@mail.com', 'Jane@mail.com', 'How are you doing?');

function sum(x, y) {
    console.log(x + ' + ' + y + ' = ' + (parseInt(x) + parseInt(y))); /*parseInt() - преобразовать строку в число */
}
sum(5, 7);

var name = 'Bill';
console.log(upperName(_templateObject, name));

function upperName(literals, value) {
    return literals[0] + value.toUpperCase();
}