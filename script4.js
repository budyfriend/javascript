// foreach dan map
var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// menggunakan for
for (var i = 0; i < angka.length; i++) {
    console.log(angka[i]);
}

// menggunakan foreach tidak mengembalikan nilai array
angka.forEach(function (e) {
    console.log(e);
});

// map mengembalikan nilai array
var angka = [1, 2, 5, 3, 6, 8, 4];
var angka2 = angka.map(function (e) {
    return e * 2;
});
console.log(angka2.join(' - '));

// sort (mengurutkan isi array)
var angka = [1, 2, 5, 3, 6, 8, 4];
angka.sort();
console.log(angka.join(' - '));

var angka = [1, 2, 5, 3, 6, 8, 4, 20, 10];
angka.sort(function (a, b) {
    return a - b;
});
console.log(angka.join(' - '));