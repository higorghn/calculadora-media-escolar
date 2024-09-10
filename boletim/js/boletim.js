

export function calcularMedia() {
    // Obtém os valores das notas dos campos de entrada e verifica se são números
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
  
    // Verifica se os valores são números válidos
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
      alert("Por favor, insira apenas números nas notas.");
      return; // Interrompe a função se houver algum erro
    }
  
    // Calcula a média
    const media = (nota1 + nota2 + nota3) / 3;
  
    // Exibe a média no elemento com id "media"
    document.getElementById("media").textContent = media.toFixed(2);
  
    // Verifica a situação do aluno e exibe na tela
    if (media >= 7) {
      document.getElementById("situacao").textContent = "Aprovado";
    } else if (media >= 5 && media < 7) {
      document.getElementById("situacao").textContent = "Exame";
    } else {
      document.getElementById("situacao").textContent = "Reprovado";
    }
  }