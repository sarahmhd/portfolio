import styles from "./../projects/projects.module.css";

const Card = ({ project }) => {
  return (
    <a
      href={project.demo}
      target="_blank"
      rel="noreferrer"
      className={`${styles.project_card} relative col-span-12 md:col-span-6 lg:col-span-3 block`}
    >
      <div className={styles.img}>
        <img src={project.image} alt={project.title} />
      </div>
      <div
        className={`${styles.project_info} absolute flex flex-col justify-center items-center`}
      >
        <h3>{project.title}</h3>
        <a href={project.demo} target="_blank" rel="noreferrer">
          Demo
        </a>
      </div>
    </a>
  );
};

export default Card;
