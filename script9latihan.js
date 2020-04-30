// membuat Object Angkot
function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function (namaPenumpang) {
        this.namaPenumpang.push(namaPenumpang);
        return this.penumpang;
    }
    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            alert('angkot masih kosong');
            return false;
        }
        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] === namaPenumpang) {
                this.penumpang = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}
var Angkot1 = new Angkot('Budiono', ['sukajaya', 'rau'], [], 0);
var Angkot2 = new Angkot('haris', ['pandeglang', 'kota serang'], [], 0);