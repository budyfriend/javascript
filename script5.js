// filter dan find (mengembalikan banyak nilai) dan (mengembalikan datu nilai)
// 1. filter (mengembalikan banyak nilai)
var angka = [1, 2, 10, 5, 2, 3, 6, 8, 4];
var angka2 = angka.filter(function (x) {
    return x > 5;
});
console.log(angka2.join(' - '));

// 2. find (mengembalikan datu nilai)
var angka = [1, 2, 10, 5, 2, 3, 6, 8, 4];
var angka2 = angka.find(function (x) {
    return x > 5;
});
console.log(angka2);