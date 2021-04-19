/* E3
  Dado o objeto `{4: ‘a’, 3: ‘e’, 1: ‘i’, 5: ‘s’}`,
  substitua os números na frase `‘T35t3 d3 35t4g1o’` conforme a sua respectiva letra
*/

let objetos = { 4: "a", 3: "e", 1: "i", 5: "s" };

const trocaObjeto = (string, objetos) => {
  for (let prop in objetos) {
    string = string.replace(new RegExp(prop, "g"), String(objetos[prop]));
  }
  return string;
};

window.exercise03 = function () {
  console.log("resultado ex3: ", trocaObjeto("T35t3 d3 35t4g1o", objetos));
};
