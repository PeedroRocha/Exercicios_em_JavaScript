function calcular() {
    var nometxt = document.querySelector('#nome_txt')
    var anotxt = document.querySelector('#ano_txt')
    var saltxt = document.querySelector('#sal_txt')
    var nome = (nometxt.value)
    var ano = Number(anotxt.value)
    var sal = Number(saltxt.value)
        if (ano <= 3) {
        var novo_sal = sal * 1.03
        var ajuste = 3
        res.innerHTML = `O reajuste do salário de <b>${nome}</b> foi de <b>${ajuste}%</b>. Salário reajustado para <b>R$${novo_sal}</b>.`
    } else if (ano >= 4 && ano <= 10) {
        var novo_sal = sal * 1.12
        var ajuste = 12.5
        res.innerHTML = `O reajuste do salário de <b>${nome}</b> foi de <b>${ajuste}%</b>. Salário reajustado para <b>R$${novo_sal}</b>.`
    } else {
        var novo_sal = sal * 1.20
        var ajuste = 20
        res.innerHTML = `O reajuste do salário de <b>${nome}</b> foi de <b>${ajuste}%</b>. Salário reajustado para <b>R$${novo_sal}</b>.`
    }
}