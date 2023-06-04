function tabuada(){
    var primeironum = window.document.getElementById("primeironum")
    var segundonum = window.document.getElementById("segundonum")
    var p = Number(primeironum.value)
    var s = Number(segundonum.value)
    x = 0
    var r = ""
    var res = window.document.getElementById("resposta")
    res.innerHTML = `A resposta é: ${p} <br>` 
    do{
        r = p*x
        res.innerHTML += `${p} x ${x} = ${r} <br>` 
        x++
    } while(x <= s)
       
}