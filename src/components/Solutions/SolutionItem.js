import styles from "./SolutionItem.module.scss";

const SolutionItem = () => {
  return (
    <div className={styles.solutionItem}>
      <span>1</span>
      <div className={styles.solutionItemContent}>
        <h2>Actionable insights</h2>
        <p>
          Optimize your products, improve customer satisfaction and stay ahead
          of the competition with our product data analytics.
        </p>
      </div>
    </div>
  );
};

export default SolutionItem;
