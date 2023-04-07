import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as FeedIcon} from "../../assets/feed.svg";
import { ReactComponent as StatsIcon} from "../../assets/estatisticas.svg";
import { ReactComponent as NewIcon} from "../../assets/adicionar.svg";
import { ReactComponent as LogoutIcon} from "../../assets/sair.svg";
import styles from './UserHeaderNav.module.css';
import useMedia from "../../Hooks/useMedia";

function UserHeaderNav() {
  const { userLogout } = React.useContext(UserContext);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const mobile = useMedia('(max-width: 40rem)');

  const { pathname } = useLocation()
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);
  
  return (
    <>
    { mobile && <button className={`${styles.mobileBtn} ${mobileMenu && styles.mobileBtnActive}`} aria-label="Menu" onClick={ () =>setMobileMenu(!mobileMenu) }></button> }
    <nav className={`${ mobile ? styles.navMobile : styles.nav } ${mobileMenu && styles.navMobileActive}`}>
      <NavLink to="/conta" end><FeedIcon/>{ mobile && 'Minhas fotos' }</NavLink>
      <NavLink to="/conta/estatisticas"><StatsIcon/>{ mobile && 'Estatístivas' }</NavLink>
      <NavLink to="/conta/postar"><NewIcon/>{ mobile && 'Adicionar Fotos' }</NavLink>
      <button onClick={userLogout}><LogoutIcon/>{ mobile && 'Sair' }</button>
    </nav>
    </>
  );
}

export default UserHeaderNav;
