// bisa dipangginl mhs.nama / mhs["nama"]
// atau digabung mhs.alamat["jalan"] / mhs.ips[2]
var mhs = {
    nama: "budiono",
    umur: 21,
    ips: [3.00, 2.50, 2.30],
    alamat: {
        jalan: "Jl. sukajaya",
        kabupaten: "serang",
        provinsi: "banten"
    }
};
// membuat object 
// object literal
var mhs = {
    nama: "budiono",
    npm: "1101161060",
    email: "budyfriend764@gmail.com",
    jurusan: "Teknik Informatika"
};
var mhs2 = {
    nama: "haris",
    npm: "1101161061",
    email: "haris@gmail.com",
    jurusan: "Teknik Informatika"
};


// function deklarasi
function buatObjectMahasiswa(nama, npm, email, jurusan) {
    var mhs = {}
    mhs.nama = nama;
    mhs.npm = npm;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}
var mhs3 = buatObjectMahasiswa('Budiono', '1101161060', 'budyfriend764@gmail.com', 'Teknik Informatika');
var mhs4 = buatObjectMahasiswa('haris', '1101161061', 'haris@gmail.com', 'Teknik Informatika');

// function Constructor
function Mahasiswa(nama, npm, email, jurusan) {
    // var this = {}
    this.nama = nama;
    this.npm = npm;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}
var mhs5 = new Mahasiswa('Budiono', '1101161060', 'budyfriend764@gmail.com', 'Teknik Informatika');