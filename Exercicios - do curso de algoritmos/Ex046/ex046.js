function contar(){
    var t = 4
    for (var c = 4; c <= 100; c = c + 2) {
        var t = c + t
        res.innerHTML += ` ${c} ,`
    }
    res.innerHTML += ` O valor total da soma é de: total = ${t}`

}