function contar() {
    var ini = document.querySelector('#itxt')
    var fim = document.querySelector('#ftxt')
    var passo = document.querySelector('#ptxt')
    var res = document.querySelector('#res')

     if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = `Impossível realizar a contagem`
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if ( i < f) {
            //Contagem progressiva
        for(var c = i; c <= f ; c += p ) {
            res.innerHTML += `${c} \u{1F449}`
        }
    } else {
        //Contagem regressiva
        for( var c = i; c >= f ; c -= p) {
            res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML +=` \u{1F3C1}`
    }    
} 
  

  