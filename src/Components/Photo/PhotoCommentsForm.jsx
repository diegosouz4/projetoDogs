import React from "react";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helpers/Error";
import styles from './PhotoCommentsForm.module.css';
import { ReactComponent as Enviar } from "../../assets/enviar.svg";
import { COMMENTS_POST } from "../../api";

const PhotoCommentsForm = ({ id, setCommentsList, single }) => {
  const [comment, setComment] = React.useState("");
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENTS_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setCommentsList((commentsList) => [...commentsList, json]);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} ${single ? styles.single : ''}`}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        className={styles.textarea}
      />
      <button className={styles.btn}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
