function contar(){
    var t = 0
    for (var c = 6; c <= 100; c = c + 2) {
        var t = c + t
        res.innerHTML += ` ${c} ,`
    }
    res2.innerHTML += ` O valor total da soma é de: ${t}`

}