// membuat object
// cara 1 - function declaration
function halo() {
    console.log('halo');
}
halo();

// cara 2 - object lteral
var obj = {};
obj.halo = function () {
    console.log('halo');
}
obj.halo();

// cara 3 constructor
// biasanya huruf depan kapital
function Halo() {
    console.log('halo');
}
new Halo;

// this == window
console.log(this);

// membuat object menggunakan this
// cara 1 - function declaration
function halo() {
    console.log(this);
    console.log('halo');
}
// window.halo();
this.halo;
//this mengembalikan object global

// cara 2 - object lteral
var obj = {};
obj.halo = function () {
    console.log(this);
    console.log('halo');
}
obj.halo();
// this mengembalikan object yang bersangkutan (var)

// cara 3 constructor
// biasanya huruf depan kapital
function Halo() {
    console.log(this);
    console.log('halo');
}
new Halo;
//this mengembalikan object yang baru dibuat