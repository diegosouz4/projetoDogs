import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { ReactComponent as Dog } from "../assets/dogs.svg";
import { UserContext } from "../UserContext";

function Header() {
  const { data } = React.useContext(UserContext);

  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`}>
        <Link className={style.logo} to="/" aria-label="Dogs - Home">
          <Dog />
        </Link>
        {data ? (
          <Link className={style.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={style.login} to="/login">
            Login / Criar login
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
