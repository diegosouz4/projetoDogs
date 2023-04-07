import React from "react";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../api";
import Error from "../../Components/Helpers/Error";
import Header from "../../Components/Helpers/Header";

function LoginPasswordLost() {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      const { response, json } = await request(url, options);
      console.log(json);
    }
  }

  return (
    <section className="animeLeft">
      <Header title='Perdeu senha' />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{color: '#4c1'}}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" id="login" {...login} />
          {loading ? (
            <Button disabled>Enviar...</Button>
          ) : (
            <Button>Enviar email</Button>
          )}
          <Error error={error} />
        </form>
      )}
    </section>
  );
}

export default LoginPasswordLost;
