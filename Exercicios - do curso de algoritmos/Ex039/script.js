function contar() {
    //let n = 10
    res.innerHTML += `Contando...<br>`
    for(let c = 10; c >=3 ; c--) {
        res.innerHTML += ` ${c} ,`
    }
    res.innerHTML += `<br> Acabou!`    
}