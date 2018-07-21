'use strict';

var staticLanguages = ['C', 'C++', 'Java'];
var dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];
var Languages = [].concat(staticLanguages, ['С#'], dynamicLanguages, ['Python']);

console.log(Languages);

function add(x, y, z) {
    console.log(x + y + z);
}

var number = [1, 2, 3];
add.apply(undefined, number);