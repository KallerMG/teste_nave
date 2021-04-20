/* E1
  Crie uma função que recebe duas strings
  e retorna a de maior comprimento.
*/

const maiorString = (stringUm, stringDois) => {
  if (typeof stringUm === "string" && typeof stringDois === "string") {
    if (stringUm.length > stringDois.length) {
      return stringUm;
    } else {
      if (stringUm.length === stringDois.length) {
        return "Strings de mesmo tamanho";
      } else {
        return stringDois;
      }
    }
  } else {
    return "Não é uma string";
  }
};
window.exercise01 = function () {
  console.log("resultado ex1: ", maiorString("olaa", "bom"));
};
