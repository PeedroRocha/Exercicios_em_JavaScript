function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 13 //data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.webp'
        document.body.style.background = '#fbe787'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'fototarde.webp'
        document.body.style.background = '#ffaf3b'
    } else {
        // BOA NOITE!
        img.src = 'fotonoite.webp'
        document.body.style.background = '#171e30'
    }
}