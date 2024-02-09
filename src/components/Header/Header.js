import logoLight from "../../Assets/Images/logo-light.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <a href="#" className={styles.logoLink}>
          <img src={logoLight} alt="workit logo" />
        </a>
        <a href="" className={styles.link}>
          Apply for access
        </a>
      </nav>
    </header>
  );
};

export default Header;
