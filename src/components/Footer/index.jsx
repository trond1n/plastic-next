import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <ul>
            <li>
              <Link href="done">Выполненные работы</Link>
            </li>
            <li>
              <Link href="conditions">Условия заказа</Link>
            </li>
            <li>
              <Link href="contacts">Контакты</Link>
            </li>
          </ul>
          <div className={styles.contacts}>
            <Link href="tel:+78452320105">+7 (8452) 32 01 05</Link>
            <Link href="mailto:info@ortoplast.ru">info@ortoplast.ru</Link>
          </div>
        </div>
        <p className={styles.copyright}>© Ortoplast, 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
