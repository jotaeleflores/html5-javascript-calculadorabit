function sumar () {
    var primerValor = parseInt(document.getElementById("primerValor").value);
    var segundoValor = parseInt(document.getElementById("segundoValor").value);
    document.getElementById("resultado").innerHTML = primerValor + segundoValor;
}

function restar () {
    var primerValor = parseInt(document.getElementById("primerValor").value);
    var segundoValor = parseInt(document.getElementById("segundoValor").value);
    document.getElementById("resultado").innerHTML = primerValor - segundoValor;
}

function dividir () {
    var primerValor = parseInt(document.getElementById("primerValor").value);
    var segundoValor = parseInt(document.getElementById("segundoValor").value);
    document.getElementById("resultado").innerHTML = primerValor / segundoValor;
}

function multiplicar () {
    var primerValor = parseInt(document.getElementById("primerValor").value);
    var segundoValor = parseInt(document.getElementById("segundoValor").value);
    document.getElementById("resultado").innerHTML = primerValor * segundoValor;
}