function somar() {
    var t = 500
    //res.innerHTML += `500 + `
    for (var c = 500; c >= 0; c = c - 50) {
        var t = t + c
        res.innerHTML += ` ${c} +`
    }
    res2.innerHTML += ` O valor total da soma é de: ${t}`
}