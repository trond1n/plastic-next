import Image from 'next/image';
import styles from '../styles/Header.module.scss';
import Button from './UI/Button/Button';
const Header = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/images/logo.png" width={70} height={70} />
          <h1>PLAST</h1>
        </div>
        <div className={styles.feedback}>
          <p>Свяжитесь с нами:</p>

          <ul>
            <Image src="/images/phone.png" width={23} height={23} />

            <li>(8452) 32-01-05 </li>
            <li>(8452) 25-11-85</li>
            <li>+7 (937) 225-11-85</li>
          </ul>
          <div>
            <a href="mailto:info@ortoplast.ru">info@ortoplast.ru</a>
            <Button title="Задать вопрос" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
