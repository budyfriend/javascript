var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if (penumpang[i] == namaPenumpang) {
                console.log(namaPenumpang + ' nama penumpang sudah ada diangkot');
                return penumpang;
            } else if (i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log('angkot masih kosong');
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            } else if (i == penumpang.length - 1) {
                console.log(namaPenumpang + 'tidak ada didalam angkot');
                return penumpang;
            }
        }
    }
}
// jika angkot kosong
// tambah penumpang diawal array
// kembalikan isi array & keluar dari function

// else
// teusuri seluruh kursi dari awal
// jika ada kursi kosong
// kembalikan isi array & keluar dari function

// jika sudah ada nama yang sama
// tampilkan pesan kesalahannya
// kembalikan isi array & keluar dari function

// jika seluruh kursi terisi
// tambah penumpang diakhir array
// kembalikan isi array & keluar dari function