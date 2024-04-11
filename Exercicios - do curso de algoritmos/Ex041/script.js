function contar() {
    res.innerHTML = `Contando: `
    for (let c = 100; c >= 0; c = (c - 5)) {
        res.innerHTML += ` ${c} ,`
    }
    res.innerHTML += ` Acabou!`
}