function calcular() {
    var ltxt = document.querySelector('#larg_txt')
    var ctxt = document.querySelector('#comp_txt')
    var larg = Number(ltxt.value)
    var comp = Number(ctxt.value)
    var metragem = larg * comp
    if (metragem <= 125) {
        res.innerHTML = `O terreno tem <b>${metragem}m²</b>, sendo um terreno <b>POPULAR<b/>.`
    } else if (metragem >= 126 && metragem <= 500) {
        res.innerHTML = `O terreno tem <b>${metragem}m²</b>, sendo um terreno <b>MASTER</b>.`
    } else {
        res.innerHTML = `O terreno tem <b>${metragem}m²</b>, sendo um terreno <b>VIP</b>.`
    }
}