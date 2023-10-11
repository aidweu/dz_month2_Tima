var array = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50];
var new_Array = [];

for (var i = 0; i < array.length; i++) {
    var number = array[i];
    var first_letter = Number(number.toString()[0]);

    if (first_letter === 2 || first_letter === 5) {
        new_Array.push(number);
    }
}


new_Array.sort(function(a, b) {
    return b - a;
});

console.log(new_Array);
