import React from "react";

function PhotoPost() {
  const [token, setToken] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [idade, setIdade] = React.useState("");
  const [img, setImg] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("img", img);
    formData.append("nome", nome);
    formData.append("peso", peso);
    formData.append("idade", idade);
    console.log(formData);

    fetch("https://dogsapi.origamid.dev/json/api/photo", {
      method: "POST",
      headers: {
        Authorization: "Bearer" + token,
      },
      body: formData,
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="photoToken">Token:</label>
      <input
        type="text"
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />

      <label htmlFor="photoNome">Nome:</label>
      <input
        type="text"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />

      <label htmlFor="photoPeso">Peso:</label>
      <input
        type="text"
        value={peso}
        onChange={({ target }) => setPeso(target.value)}
      />

      <label htmlFor="photoIdade">Idade:</label>
      <input
        type="text"
        value={idade}
        onChange={({ target }) => setIdade(target.value)}
      />

      <label htmlFor="photoImg">Imagem:</label>
      <input type="file" onChange={({ target }) => setImg(target.files[0])} />

      <button>Enviar</button>
    </form>
  );
}

export default PhotoPost;
