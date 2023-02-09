import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.lists}>
          <ul>
            <li>
              <h3>Название</h3>
            </li>
            <li>Номер телефона</li>
            <li>Адрес</li>
            <li>Почта</li>
          </ul>
          <div className={styles.links}>
            <ul>
              <li>Контакты</li>
              <li>Реквизиты</li>
              <li>Доставка и оплата</li>
              <li>Вопросы и ответы</li>
              <li>Политика конфиденциальности</li>
            </ul>
            <ul>
              <li>Заявка на изготовление</li>
              <li>Вакуумное литье в силикон</li>
              <li>Быстрое прототипирование</li>
              <li>Выполненные работы</li>
              <li>Условия заказа</li>
            </ul>
          </div>
        </div>
        <div className={styles.info}>
          <h3>OOO Opтопласт, 2023</h3>
          <p>Создание и продвижение сайтов</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
