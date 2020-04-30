var jumlahangkot = 10;
for (var noangkot = 1; noangkot <= jumlahangkot; noangkot++) {
    if (noangkot <= 6 && noangkot !== 5) {
        console.log('Angkot No. ' + noangkot + ' beroperasi dengan baik');
    } else if (noangkot === 5 || noangkot === 8 || noangkot === 10) {
        console.log('ANgkot No. ' + noangkot + ' Sedang lembur');
    } else {
        console.log('Angkot No. ' + noangkot + ' sedang tidak beroperasi');
    }
}