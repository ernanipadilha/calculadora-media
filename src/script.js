function calcular() {
  var nota1 = document.getElementById("nota1").value;
  var nota2 = document.getElementById("nota2").value;
  var nota3 = document.getElementById("nota3").value;
  var nota4 = document.getElementById("nota4").value;

  var somaNotas = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4);
  var notaFinal = (parseFloat(somaNotas) / 4).toFixed(1);
  valida_form()

  if (isNaN(notaFinal)) {
    console.log("Campos não preenchidos")
  } else if (notaFinal >= 6) {
    var elementoExibeMedia = document.getElementById("exibeMedia");
    var exibeMedia = "Sua média final foi <br>" + notaFinal + " Aluno aprovado";
    elementoExibeMedia.innerHTML = exibeMedia;
  } else {
    var elementoExibeMedia = document.getElementById("exibeMedia");
    var exibeMedia = "Sua média final foi <br>" + notaFinal + " Aluno reprovado";
    elementoExibeMedia.innerHTML = exibeMedia;
  }
}

function valida_form() {
  if (document.getElementById("nota1").value.length < 1) {
    alert('Por favor, preencha o valor da nota do 1º bimestre');
    document.getElementById("nota1").focus();
    return false
  } else if (document.getElementById("nota2").value.length < 1) {
    alert('Por favor, preencha o valor da nota do 2º bimestre');
    document.getElementById("nota2").focus();
    return false
  } else if (document.getElementById("nota3").value.length < 1) {
    alert('Por favor, preencha o valor da nota do 3º bimestre');
    document.getElementById("nota3").focus();
    return false
  } else if (document.getElementById("nota4").value.length < 1) {
    alert('Por favor, preencha o valor da nota do 4º bimestre');
    document.getElementById("nota4").focus();
    return false
  }
}