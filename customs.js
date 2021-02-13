var arr11 = ['a', 'b', 'c'];
var arr22 = [1, 2, 3];
var arr1122 = arr11.concat(...arr22);
console.log(arr1122);


var arr13 = [1, 2, 3];
var arr31 = arr13.reverse();
console.log(arr31);


var arr15 = [3, 4, 1, 2, 7];
var arr51 = arr15.sort();
console.log(arr51);


var arr55 = [3, 4, 1, 2, 7];
var arr66 = [];
for (var i = 0; i < arr55.length; i++) {
    if (arr55[i] % 2 == 0) {
        arr66.push(arr55[i]);
    }
}
console.log(arr66);