function contar() {
    let ntxt = document.getElementById('ntxt')
    let num = Number(ntxt.value)
    res.innerHTML += `Contando: <br>`
    for (let c = 0; c <= num; c = (c + 1)) {
        res.innerHTML += ` ${c} ,`
    }
    res.innerHTML += `Acabou!`
}