import heroImage from "../../Assets/Images/image-hero.webp";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.headerBlock}>
        <h1 className={styles.heading}>
          Data <span className={styles.heading_underline}>tailored</span> to{" "}
          <span className={styles.heading_inline}>your needs.</span>
        </h1>
        <a href="#" className={styles.learnBtn}>
          Learn more
        </a>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src={heroImage}
          alt="imgae of cellphone"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default HeroSection;
