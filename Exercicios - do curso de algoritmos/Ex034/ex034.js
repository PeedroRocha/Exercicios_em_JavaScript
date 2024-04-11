function calcular() {
    let pes = document.querySelector('#txtp')
    let alt = document.querySelector('#txta')
    let peso = Number(pes.value)
    let altura = Number(alt.value)
    let imc = peso / (altura * 2)
    let imc2 = parseFloat(imc.toFixed(2)) // IMC com o valor arredondado em duas casas decimais
    if (imc2 <= 18.5 ) {
        res.innerHTML = `Seu IMC é ${imc2} : Abaixo do peso.`
    } else if (imc2 > 18.5 && imc2 <= 25) {
        res.innerHTML = `Seu IMC é ${imc2} : Peso ideal.`
    } else if (imc2 > 25 && imc2 <= 30) {
        res.innerHTML = `Seu IMC é ${imc2} : Sobrepeso.`
    } else if (imc2 > 30 && imc2 <= 40) {
        res.innerHTML = `Seu IMC é ${imc2} : Obesidade.`
    } else {
        res.innerHTML = `Seu IMC é ${imc2} : Obesidade mórbida.`
    }
     
}