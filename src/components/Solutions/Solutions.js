import SolutionItem from "./SolutionItem";
import styles from "./Solutions.module.scss";

const solutionItems = [
  {
    title: "Actionable insights",
    description:
      "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.",
  },
  {
    title: "Data-driven decisions",
    description:
      "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.",
  },
  {
    title: "Always affordable",
    description:
      "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.",
  },
];

const Solutions = () => {
  return (
    <section className={styles.solutionsSection}>
      <ul className={styles.solutionsList}>
        {solutionItems.map((item, index) => (
          <li>
            <SolutionItem
              key={item.title}
              title={item.title}
              description={item.description}
              index={index}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Solutions;
