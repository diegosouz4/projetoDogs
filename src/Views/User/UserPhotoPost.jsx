import React from "react";
import styles from "./UserPhotoPost.module.css";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";
import Error from '../../Components/Helpers/Error';
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import Header from '../../Components/Helpers/Header';
import { PHOTO_POST } from "../../api";
import { useNavigate } from "react-router-dom";

function UserPhotoPost() {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = React.useState({});
  const { data, loading, error, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if(data) navigate('/conta');
  }, [data, navigate])

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    const {response, json } = request(url, options);
    
    console.log(json);
  }

  function handleImgChange({ target }) {
    setImg({
      raw: target.files[0],
      preview: URL.createObjectURL(target.files[0]),
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Header title='Post sua foto' description="Home do site Dogs, com o feed de fotos." />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome"  {...nome}/>
        <Input label="Idade" type="number" name="idade" {...idade}/>
        <Input label="Peso" type="number" name="peso" {...peso}/>
        <input className={styles.file} type="file" name="img" id="img" onChange={handleImgChange} />
        {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar</Button>}
        <Error error={error} />
      </form>
      <div>
        {img.preview && <div className={styles.preview} style={{backgroundImage: `url(${img.preview})`}}></div>}
      </div>
    </section>
  );
}

export default UserPhotoPost;
