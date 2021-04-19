/* E1
  Crie uma função que recebe duas strings
  e retorna a de maior comprimento.
*/

const maiorString = (stringUm, stringDois) =>
  stringUm.length >= stringDois.length ? stringUm : stringDois;

window.exercise01 = function () {
  console.log("resultado ex1: ", maiorString("olaa", "bom"));
};
