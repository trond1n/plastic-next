// import Image from 'next/image';
import React from 'react';
import styles from '../styles/FeedbackForm.module.scss';
// import Button from './UI/Button/Button';
import classNames from 'classnames';
const items = [
  { id: 1, text: 'от 1 до 1000 штук', imgPath: 'ic1-1.png' },
  { id: 2, text: 'срок производства от 3 дней', imgPath: 'ic2-1.png' },
  { id: 3, text: 'цвета по каталогу RAL', imgPath: 'ic3-1.png' },
];
const FeedbackForm = () => {
  return (
    <div className={styles.form}>
      <div className={styles.container}>
        <div className={styles.screen}>
          <div className={styles.screen_body}>
            <div className={classNames(styles.screen_body_item, styles.left)}>
              <div className={styles.app_title}>
                <span>Узнать цену и </span>
                <span>сроки изготовления</span>
              </div>
              <div className={styles.app_contact}>
                Для расчета стоимости изготовления вашего заказа вы можете заполнить форму. Мы
                свяжемся с вами в течение 3 рабочих часов
              </div>
            </div>
            <div className={classNames(styles.screen_body_item, styles.right)}>
              <div className={styles.app_form}>
                <div className={styles.app_form_group}>
                  <input className={styles.app_form_control} placeholder="ФИО" />
                </div>
                <div className={styles.app_form_group}>
                  <input className={styles.app_form_control} placeholder="EMAIL" />
                </div>
                <div className={styles.app_form_group}>
                  <input className={styles.app_form_control} placeholder="Номер телефона" />
                </div>
                <div className={classNames(styles.app_form_group, styles.message)}>
                  <input className={styles.app_form_control} placeholder="Сообщение" />
                </div>
                <div className={classNames(styles.app_form_group, styles.buttons)}>
                  <button className={styles.app_form_button}>ОТМЕНА</button>
                  <button className={styles.app_form_button}>ОТПРАВИТЬ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
