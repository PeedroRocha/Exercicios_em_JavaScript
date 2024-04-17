function contar() {
    res.innerHTML += `Contando: `
    for (let c = 30; c >= 1; c = c - 1) {
        if (c % 2 = 0 ) {  // tentando usar o If e Else dentro do for
            res.innerHTML += `${c}`
        } else {
            res.innerHTML += `${[c]}`
        }
            
        
          
    }
    res.innerHTML += ` Acabou!`
}