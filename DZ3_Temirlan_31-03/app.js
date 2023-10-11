var array = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50];
var new_Array = [];

for (var i = 0; i < array.length; i++) {
    var number = array[i];
    var first_letter = Number(number.toString()[0]);

    if (first_letter === 2 || first_letter === 5) {
        new_Array.push(number);
    }
}

console.log(new_Array);



var how_many_tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
var counting_tags = {};

for (var i = 0; i < how_many_tags.length; i++) {
    var tag_non = how_many_tags[i];

    if (counting_tags[tag_non]) {
        counting_tags[tag_non] += 1;
    } else {
        counting_tags[tag_non] = 1;
    }
}

console.log(counting_tags);

new_Array.sort()




