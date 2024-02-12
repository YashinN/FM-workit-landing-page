import styles from "./Mesage.module.scss";
import founderImage from "../../Assets/Images/image-founder.webp";

const Message = () => {
  return (
    <section className={styles.messageSection}>
      <div className={styles.sectionCenter}>
        <img
          src={founderImage}
          alt="Portrait image of founder"
          className={styles.founderImg}
        />
        <article className={styles.messageBox}>
          <h2>Be the first to test</h2>
          <p>
            Hi, I'm Louis Graham, the founder of the company. Book a demo call
            with me to become a beta tester for our app and kickstart your
            company. Apply for access below and I’ll be in touch to schedule a
            call.
          </p>
          <button>Apply for access</button>
        </article>
      </div>
    </section>
  );
};

export default Message;
