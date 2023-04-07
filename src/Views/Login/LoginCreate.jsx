import React from "react";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";
import { UserContext } from "../../UserContext";
import useFetch from "../../Hooks/useFetch";
import Error from "../../Components/Helpers/Error";
import Header from "../../Components/Helpers/Header";

function LoginCreate() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { request, loading, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response, json } = await request(url, options);

    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Header title='Criar conta' />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" id="username" {...username} />
        <Input label="Email" type="email" id="email" {...email} />
        <Input label="Senha" type="password" id="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
}

export default LoginCreate;
