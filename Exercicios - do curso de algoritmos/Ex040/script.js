function contar() {
    res.innerHTML += `Contando: `
    for (let c = 0; c <= 18; c = (c + 3) ) {
        res.innerHTML += `${c} ,`
    }
    res.innerHTML += ` Acabou!`

}