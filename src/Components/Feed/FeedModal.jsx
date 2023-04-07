import React from "react";
import styles from "./FeedModal.module.css";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import PhotoContent from "../Photo/PhotoContent";
import { PHOTO_GET } from "../../api";

function FeedModal({ photo, setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getPhoto() {
      const { url, options } = PHOTO_GET(photo.id);
      const { response, json } = await request(url, options);
      console.log(json);
    }
    getPhoto();
  }, [photo]);

  function handleOutsideClick({ target, currentTarget }) {
    if (target === currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={erro} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}

export default FeedModal;
