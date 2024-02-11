import styles from "./BackgroundPattern.module.scss";

const BackgroundPattern = () => {
  return (
    <div className={styles.backgroundPattern}>
      <div className={styles.svgContainer}>
        <svg
          className={styles.bgPurple}
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

        <svg
          className={styles.bgPink}
          viewBox="0 0 1440 960"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0H1440V892C1440 892 1082.96 960 722 960C361.039 960 0 892 0 892V0Z"
            fill="#FCF8FF"
          />
        </svg>
      </div>
    </div>
  );
};

export default BackgroundPattern;
