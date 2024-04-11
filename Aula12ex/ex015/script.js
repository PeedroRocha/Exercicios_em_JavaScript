function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') // Esse é a variável do formulario onde o usuário digita o ano de nascimento.
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value > ano)) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
           gênero = 'Homem'
           if (idade >= 0 && idade < 10) {
               // Criança
               img.setAttribute('src', 'foto-bebe-m.webp')                
           } else if (idade < 21) {
               // Jovem
               img.setAttribute('src', 'foto-jovem-m.webp')
           } else if (idade < 50) {
              // Adulto
              img.setAttribute('src', 'foto-adulto-m.webp')
           } else {
              // Idoso
              img.setAttribute('src', 'foto-idoso-m.webp')
           }      
       } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-f.webp')                
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.webp')
            } else if (idade < 50) {
               // Adulto
               img.setAttribute('src', 'foto-adulto-f.webp')
            } else {
               // Idoso
               img.setAttribute('src', 'foto-idoso-f.webp')
            }      
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }    
}