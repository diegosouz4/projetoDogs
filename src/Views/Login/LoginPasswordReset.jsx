import React from "react";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import Error from "../../Components/Helpers/Error";
import { PASSWORD_RESET } from "../../api";
import { useNavigate } from "react-router-dom";

function LoginPasswordReset() {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const password = useForm();
  const {error, loading, request} = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if(password.validate()) {
      const {url, options} = PASSWORD_RESET({login: login, key: key, password: password.value});
      const {response, json} = await request(url, options);
      if(response.ok) {
        navigate('/login');
      }
    }
  }

  return <section className="animeLeft">
    <h1 className="title">Resetar senha</h1>
    <form onSubmit={handleSubmit}>
      <Input label='Nova senha' type='password' id='password' name='password' {...password}/>
      {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar senha</Button>}
      <Error error={error} />
    </form>
  </section>;
}

export default LoginPasswordReset;
