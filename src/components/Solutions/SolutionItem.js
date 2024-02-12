import styles from "./SolutionItem.module.scss";

const SolutionItem = ({ title, description, index }) => {
  return (
    <div className={styles.solutionItem}>
      <span>{index + 1}</span>
      <div className={styles.solutionItemContent}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SolutionItem;
