/* E4
 Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada,
 imprima o seu endereço no formato `‘ENDERECO, NUMERO, CIDADE/ESTADO’`.
 Utilize a fetch API (https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API) para realizar a requisição.
*/

const apiViacep = async (string) => {
  const myRequest = new Request(
    "https://viacep.com.br/ws/" + string + "/json",
    {
      method: "GET"
    }
  );

  fetch(myRequest)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Ops! Houve um erro em nosso servidor.");
      }
    })
    .then((response) => {
      "ENDERECO, NUMERO, CIDADE/ESTADO";
      console.log(
        response.logradouro +
          ", " +
          response.gia +
          ", " +
          response.localidade +
          "/" +
          response.uf
      );
    })
    .catch((error) => {
      console.error(error);
    });
};

window.exercise04 = function () {
  console.log("resultado ex4: ", apiViacep("01001000"));
};
