function somar() {
    var n1_txt = document.querySelector("#n1_txt")
    var n2_txt = document.querySelector("#n2_txt")
    var n3_txt = document.querySelector("#n3_txt")
    var n4_txt = document.querySelector("#n4_txt")
    var n5_txt = document.querySelector("#n5_txt")
    var n6_txt = document.querySelector("#n6_txt")
    var n7_txt = document.querySelector("#n7_txt")
    var n1 = Number(n1_txt.value)
    var n2 = Number(n2_txt.value)
    var n3 = Number(n3_txt.value)
    var n4 = Number(n4_txt.value)
    var n5 = Number(n5_txt.value)
    var n6 = Number(n6_txt.value)
    var n7 = Number(n7_txt.value)
    var total = n1 + n2 + n3 + n4 + n5 + n6 + n7
    res.innerHTML = `A soma entre os números mencionados é de ( ${total} )`
}