// perbandingan ==
// identitas ===
// parseInt menjadikan angka string "1" menjadi string 1

var item = prompt('masukan nama makanan ? ');
switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('makanan / minuman SEHAT');
        break;
    case 'hamburger':
    case 'softdring':
        alert('makanan / minuman TIDAK SEHAT');
        break;
    default:
        alert('anda memasukan makanan / minuman yang salah');
        break;
}

// var angka = prompt('masukan angka :');
// switch (angka) {
//     case 1:
//         alert('anda memasukan angka 1');
//         break;
//     case 2:
//         alert('anda memasukan angka 2');
//         break;
//     case 3:
//         alert('anda memasukan angka 3');
//         break;
//     default:
//         alert('angka yang anda masukan salah');
//         break;

// }