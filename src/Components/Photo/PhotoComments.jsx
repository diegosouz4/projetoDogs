import React from "react";
import UseContext from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from "./PhotoComments.module.css";

const PhotoComments = ({ id, comments, single }) => {
  const { login } = React.useContext(UseContext);
  const commentsSection = React.useRef(null);
  const [commentsList, setCommentsList] = React.useState(() => comments);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [commentsList]);

  return (
    <>
      <ul ref={commentsSection} className={`${styles.comments} ${single ? styles.single : ''}`}>
        {commentsList.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>{" "}
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm single={single} id={id} setCommentsList={setCommentsList} />}
    </>
  );
};

export default PhotoComments;
