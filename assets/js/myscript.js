function gebi(id){
    return document.getElementById(id)
}

function multiplicar() {
    let valorN1 = parseInt(gebi("n1").value);
    let valorN2 = parseInt(gebi("n2").value)
    let valorN3 = parseInt(gebi("n3").value);
    let valorN4 = parseInt(gebi("n4").value)
    let valorN5 = parseInt(gebi("n5").value);
    let valorN6 = parseInt(gebi("n6").value)
    let valorN7 = parseInt(gebi("n7").value);
    let valorN8 = parseInt(gebi("n8").value)
    let valorN9 = parseInt(gebi("n9").value);
    let valorN10 = parseInt(gebi("n10").value)
    let valorN11 = parseInt(gebi("n11").value);
    let valorN12 = parseInt(gebi("n12").value)
    let resultadoDaMultiplicacao1 = valorN1 * valorN2
    let resultadoDaMultiplicacao2 = valorN3 * valorN4
    let resultadoDaMultiplicacao3 = valorN5 * valorN6
    let resultadoDaMultiplicacao4 = valorN7 * valorN8
    let resultadoDaMultiplicacao5 = valorN9 * valorN10
    let resultadoDaMultiplicacao6 = valorN11 * valorN12
    gebi("resultado1").value = resultadoDaMultiplicacao1
    gebi("resultado2").value = resultadoDaMultiplicacao2
    gebi("resultado3").value = resultadoDaMultiplicacao3
    gebi("resultado4").value = resultadoDaMultiplicacao4
    gebi("resultado5").value = resultadoDaMultiplicacao5
    gebi("resultado6").value = resultadoDaMultiplicacao6
}

function somar(){
    let valorc1 = parseInt(gebi("resultado1").value)
    let valorc2 = parseInt(gebi("resultado2").value)
    let valorc3 = parseInt(gebi("resultado3").value)
    let totalalimentos = valorc1 + valorc2 + valorc3
    gebi("totalalimentos").value = totalalimentos
}

function somardivul(){
    let valord1 = parseInt(gebi("resultado4").value)
    let valord2 = parseInt(gebi("resultado5").value)
    let valord3 = parseInt(gebi("resultado6").value)
    let totaldivul = valord1 + valord2 + valord3
    gebi("totaldivul").value = totaldivul
}

function somatotal(){
    let valort1 = parseInt(gebi("totalalimentos").value)
    let valort2 = parseInt(gebi("totaldivul").value)
    let somatotal = valort1 += valort2  
    gebi("somatotal").value = ("R$ " + somatotal)
}

function montartexto(){
    gebi("texto").value = ("O total em reais de comida vendida foi " + totalalimentos + ", o total em reais de itens de divulgação foi " + totaldivul + ", o total de itens em reais vendidos no evento foi de " + somatotal)
}
