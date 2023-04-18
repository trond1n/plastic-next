import FeedbackForm from '@/components/FeedbackForm';
import BlockTitle from '@/components/UI/BlockTitle/BlockTitle';
import styles from '@/styles/Contacts.module.scss';
import Link from 'next/link';
const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <BlockTitle title="Контакты" />
        <div className={styles.items}>
          <div className={styles.item}>
            <h4>Адрес</h4>
            <p>620137, Екатеринбург, ул. Кулибина, 2</p>
          </div>
          <div className={styles.item}>
            <h4>Телефон</h4>
            <Link href="tel:+78452320105">+7 (800) 555 3535</Link>
          </div>
          <div className={styles.item}>
            <h4>email</h4>
            <Link href="mailto:info@m2m.ru">info@m2m.ru</Link>
          </div>
        </div>
      </div>

      {/* модуль яндекс карт */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <a
          href="https://yandex.ru/maps/54/yekaterinburg/?utm_medium=mapframe&utm_source=maps"
          style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>
          Екатеринбург
        </a>
        <a
          href="https://yandex.ru/maps/54/yekaterinburg/house/ulitsa_kulibina_2/YkkYcAJnSkcHQFtsfXR0dHxmbQ==/?ll=60.657320%2C56.855059&utm_medium=mapframe&utm_source=maps&z=17"
          style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>
          Улица Кулибина, 2 на карте Екатеринбурга — Яндекс Карты
        </a>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=60.657320%2C56.855059&mode=whatshere&whatshere%5Bpoint%5D=60.657320%2C56.855059&whatshere%5Bzoom%5D=17&z=17"
          width="100%"
          height="400"
          // frameborder="1"
          allowFullScreen={true}
          style={{ position: 'relative' }}></iframe>
      </div>
    </div>
  );
};

export default Contacts;
