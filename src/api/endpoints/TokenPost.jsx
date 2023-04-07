import React from "react";

const url = "https://dogsapi.origamid.dev/json/jwt-auth/v1/token";

function TokenPost() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        console.log(json);
        setToken(json.token);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome:</label>
      <input
        id="nome"
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />

      <label htmlFor="senha">Senha:</label>
      <input
        id="senha"
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />

      <button>Enviar</button>
      <p style={{ wordBreak: 'break-all' }}>{token}</p>
    </form>
  );
}

export default TokenPost;
