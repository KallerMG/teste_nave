/* E1
  Crie uma função que recebe duas strings
  e retorna a de maior comprimento.
*/

const maiorString = (stringUm, stringDois) => {
  if (stringUm.length > stringDois.length) {
    return stringUm;
  } else {
    return stringDois;
  }
};

const maiorString2 = (stringUm, stringDois) => {
  if (stringUm.length > stringDois.length) {
    return stringUm;
  } else {
    return stringDois;
  }
};

window.exercise01 = function () {
  console.log("resultado ex1: ", maiorString("olaa", "bom"));
};
