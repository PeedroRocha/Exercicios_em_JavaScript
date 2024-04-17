function contar() {
    res.innerHTML += `Contando: `
    for (let c = 30; c >= 1; c = c - 1) {
        if (c % 4 == 0 ) { 
            res.innerHTML += ` [${c}],`
        } else {
            res.innerHTML += ` ${c},`
        }
    }
    res.innerHTML += ` Acabou!`
}