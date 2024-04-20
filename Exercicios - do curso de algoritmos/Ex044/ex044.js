var i_txt = document.querySelector('#i_txt')
var f_txt = document.querySelector('#f_txt')
var inc_txt = document.querySelector('#inc_txt')
var i = Number(i_txt.value)
var f = Number(f_txt.value)
var inc = Number(inc_txt.value)

function contar() {
   res.innerHTML += `Contando...` 
   for (var num = i; num <= f; num = (num + inc) ) {
        res.innerHTML += ` ${num} ,`
   }
   res.innerHTML += ` Acabou!`
}