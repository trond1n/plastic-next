import styles from './BlockTitle.module.scss';

const BlockTitle = ({ title }) => {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.line}></div>
    </div>
  );
};

export default BlockTitle;
