function contar () {
    var c = 6
    res.innerHTML += `Contando...<br>`
    while (c <= 11) {
        res.innerHTML += ` ${c} ,`
        c++
    }
    res.innerHTML += ` Acabou!  ` 
}