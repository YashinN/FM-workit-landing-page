import styles from "./LinkButton.module.scss";

const LinkButton = ({ link = "#", text }) => {
  return (
    <a className={styles.linkBtn} href={link}>
      {text}
    </a>
  );
};

export default LinkButton;
