function calcular() {
    var txti = document.getElementById('txti')
    var txts = document.getElementById('txts')
    var txtf = document.getElementById('txtf')
    var imo = Number(txti.value)
    var sal = Number(txts.value)
    var fin = Number(txtf.value)
    var parc = imo / (fin*12)
    var preco = parc.toLocaleString("pt-BR", {
        currency: "BRL",
        style: "currency",
        minimumFractionDigits: 2,
    })
    var renda = sal * 0.30 
     if (parc <= renda) {
        res.innerHTML = ` O valor da parcela ficou em ${preco}.` 
    } else {
        res.innerHTML = `O financiamento não foi aprovado, renda compromentida acima de 30%.`
    } 
}
