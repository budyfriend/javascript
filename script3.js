// manipulasi array

// menambah isi array
var arr = [];
arr[0] = "budiono";
arr[1] = "haris";
arr[2] = "hawasi";
console.log(arr);

// menghapus array
var arr = ['budiono', 'haris', 'hawasi'];
arr[1] = undefined;
console.log(arr);

// menampilkan isi array
var arr = ['budiono', 'haris', 'hawasi'];
for (var i = 0; i < arr.length; i++) {
    console.log('Mahasiswa ke -' + (i + 1) + ' : ' + arr[i]);
}

// metod pada join
var arr = ['budiono', 'haris', 'hawasi'];

// push dan pop / menambahkan dan menghapus array (untuk halaman terakhir)
// 1. push  bisa menambahkan lebih dari 1 (mendorong masuk)
arr.push('galih', 'mamun');
// 2. pop (memecahkan / menghilangkan)
arr.pop();

// unshift dan shift / menambahkan dan menghapus (untuk halaman pertama)
// 1. unshift (geser ke dalam)
arr.unshift('halih');
// 2. shift (mengeluarkan)
arr.shift();

// plice dan slice
// 1.splice (menyambung / menambal)
// splice (indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2,......... n)
arr.splice(2, 0, 'aziz', 'didi');
// menghapus array dari sebelah kiri
arr.splice(1, 2, 'aziz', 'didi');

// 2. slice (mengiris)
// slice(awal,akhir); akhir tidak dihapus dari awal sebelum akhir
var arr = ['budiono', 'haris', 'hawasi'];
var arr2 = arr.slice(1, 4);

console.log(arr.join(' - '));
console.log(arr2.join(' - '));