import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

function UserHeader() {
  const [title, setTitle] = React.useState("");
  const { pathname } = useLocation();

  React.useEffect(() => {
    setTitle(location.pathname);
    switch (pathname) {
      case "/conta/postar":
        setTitle("Post sua foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Minha conta");
    }
  }, [pathname]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
}

export default UserHeader;
