import React from "react";

const url = "https://dogsapi.origamid.dev/json/api/user";

function UserPost() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        console.log(json);
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

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />

      <button>Enviar</button>
    </form>
  );
}

export default UserPost;
