import Image from 'next/image';
import React from 'react';
import styles from '../styles/FeedbackForm.module.scss';
import Button from './UI/Button/Button';
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
            <div class="screen-body-item left">
              <div class="app-title">
                <span>Узнать цену и </span>
                <span>сроки изготовления</span>
              </div>
              <div class="app-contact">
                Для расчета стоимости изготовления вашего заказа вы можете заполнить форму и
                прикрепить файл Мы свяжемся с вами в течение 3 рабочих часов
              </div>
            </div>
            <div class="screen-body-item">
              <div class="app-form">
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="ФИО" />
                </div>
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="EMAIL" />
                </div>
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="CONTACT NO" />
                </div>
                <div class="app-form-group message">
                  <input class="app-form-control" placeholder="MESSAGE" />
                </div>
                <div class="app-form-group buttons">
                  <button class="app-form-button">ОТМЕНА</button>
                  <button class="app-form-button">ОТПРАВИТЬ</button>
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
