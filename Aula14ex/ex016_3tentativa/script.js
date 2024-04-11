function contar() {
    let ini = document.querySelector('#itxt')
    let fim = document.querySelector('#ftxt')
    let pas = document.querySelector('#ptxt')
    
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERRO] dados incompletos')
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        res.innerHTML += `Contando...`
        if (i < f ) {
            //Contagem progressiva
            for (let c = i; c<=f; c = c+p) {
                res.innerHTML += `${c} \u{1F449},`
            }                 
        } else  {
            //Contagem regressiva
            for(let c = i; c>=f ; c = c-p) {
                res.innerHTML += `${c} \u{1F449},`
            }

        }
        res.innerHTML += ` \u{1F3C1}`
    } 
}