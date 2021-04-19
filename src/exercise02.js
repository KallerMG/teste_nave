/* E2
  Dado a seguinte string `‘teste 1 de 2 string 3’`,
  substitua todas as ocorrências de números por `$`.
*/

const trocaOcorrencia = (string) => string.replace(/[\d]/g, "$");

window.exercise02 = function () {
  console.log("resultado ex2: ", trocaOcorrencia("teste 1 de 2 string 3"));
};
