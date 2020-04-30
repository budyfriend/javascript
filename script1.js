// var a = 8,
//     b = 3,
//     volumeA,
//     volumeB,
//     total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;

function jumlahVolumeDuaKubus(a, b) {
    var volumeA,
        volumeB,
        total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;
}

alert(jumlahVolumeDuaKubus(8, 3));
alert(jumlahVolumeDuaKubus(10, 16));