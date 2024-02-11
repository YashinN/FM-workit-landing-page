import SolutionItem from "./SolutionItem";
import styles from "./Solutions.module.scss";

const test = [1, 2, 3];

const Solutions = () => {
  return (
    <section className={styles.solutionsSection}>
      <ul className={styles.solutionsList}>
        {test.map((item) => (
          <li>
            <SolutionItem />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Solutions;
