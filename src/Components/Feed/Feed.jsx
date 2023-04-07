import React from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";
import ProtoTypes from "prop-types";

function Feed({ user }) {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (!infinite) return;

      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;

      if (scroll > height * 0.75) {
        setPages((pages) => [...pages, pages.length + 1]);
        wait = true;

        setTimeout(() => {
          wait = false;
        }, 800);
      }
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          page={page}
          user={user}
          setInfinite={setInfinite}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </div>
  );
}

Feed.defaultProps = {
  user: 0,
};

Feed.protoTypes = {
  user: ProtoTypes.oneOfType([
    ProtoTypes.string.isRequired,
    ProtoTypes.number.isRequired,
  ]),
};

export default Feed;
