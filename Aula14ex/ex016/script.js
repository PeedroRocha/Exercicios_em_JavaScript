function contar() {
    var iniciotxt = document.querySelector('#inicio_txt');
    var fimtxt = document.querySelector('#fim_txt');
    var passotxt = document.querySelector('#passo_txt');
    var inicio = Number(iniciotxt.value);
    var fim = Number(fimtxt.value);
    var passo = Number(passotxt.value);
    var contador = inicio + 1;
    while (contador <= fim) {
        res.innerHTML = `Contando...`
        cont.innerHTML += (`,${contador}...`);
        contador++;
    }


}
