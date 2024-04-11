function calcular() {
    var nometxt = document.querySelector('#nometxt')
    var nota1txt = document.querySelector('#nota1_txt')
    var nota2txt = document.querySelector('#nota2_txt')
    var nome = (nometxt.value)
    var nota1 = Number(nota1txt.value)
    var nota2 = Number(nota2txt.value)
    var media = (nota1 + nota2) / 2
    if (media <= 4.9) { 
        res.innerHTML = `A média do aluno(a) <b>${nome}</b> foi de <b>${media}</b> : <b>REPROVADO</b>`
    } else if ( media >= 5 && media <= 6.9) {
        res.innerHTML = `A média do aluno(a) <b>${nome}</b> foi de <b>${media}</b> : <b>RECUPERAÇÃO</b>`   
    } else if ( media >= 7 ) {
        res.innerHTML = `A média do aluno(a) <b>${nome}</b> foi de <b>${media}</b> : <b>APROVADO</b>`   
    }
    
}