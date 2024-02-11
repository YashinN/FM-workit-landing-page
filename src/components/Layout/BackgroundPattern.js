import styles from "./BackgroundPattern.module.scss";

const BackgroundPattern = () => {
  return (
    <svg
      className={styles.bgPurpleCurve}
      viewBox="0 0 1440 730"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0H1440V662C1440 662 1082.96 730 722 730C361.039 730 0 662 0 662V0Z"
        fill="#24053E"
      />
    </svg>
  );
};

export default BackgroundPattern;
