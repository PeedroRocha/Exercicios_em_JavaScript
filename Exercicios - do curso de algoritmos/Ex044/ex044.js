

function contar() {
   var i_txt = document.querySelector('#i_txt')
   var f_txt = document.querySelector('#f_txt')
   var inc_txt = document.querySelector('#inc_txt')
   var i = Number(i_txt.value)
   var f = Number(f_txt.value)
   var inc = Number(inc_txt.value)
   res.innerHTML += `Contagem: `
   if ( i < f ) {
      for (var cont = i; cont <= f ; cont = cont + inc ) 
         res.innerHTML += ` ${cont} ,`
   } else {
      for (var cont = i; cont >= f ; cont = cont - inc ) {
         res.innerHTML += ` ${cont} ,`
   }
  
   }
   res.innerHTML += ` Acabou!`
}

// Neste código temos o exercício 44 e 45.