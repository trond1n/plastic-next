import styles from './Button.module.scss';

const Button = ({ title }) => {
  return <button className={styles.button}>{title}</button>;
};

export default Button;
