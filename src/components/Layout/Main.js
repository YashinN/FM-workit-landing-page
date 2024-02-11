import styles from "./Main.module.scss";

const Main = ({ children }) => {
  return <main className={styles.mainLayout}>{children}</main>;
};

export default Main;
