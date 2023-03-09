import FeedbackForm from '@/components/FeedbackForm';
import BlockTitle from '@/components/UI/BlockTitle/BlockTitle';
import styles from '@/styles/Contacts.module.scss';
const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <BlockTitle title="Контакты" />
        <div className={styles.items}>
          <div className={styles.item}>
            <h4>Адрес</h4>
            <p>410089, Саратов, ул. Песчано-Уметский тракт 2км</p>
          </div>
          <div className={styles.item}>
            <h4>Телефон</h4>
            <a href="tel:+78452320105">+7 (8452) 32 01 05</a>
          </div>
          <div className={styles.item}>
            <h4>email</h4>
            <a href="mailto:info@ortoplast.ru">info@ortoplast.ru</a>
          </div>
        </div>
      </div>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <a
          href="https://yandex.ru/maps/194/saratov/?utm_medium=mapframe&utm_source=maps"
          style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>
          Саратов
        </a>
        <a
          href="https://yandex.ru/maps/194/saratov/geo/peschano_umyotskiy_trakt_2_y_kilometr/4130726656/?ll=45.867098%2C51.591067&utm_medium=mapframe&utm_source=maps&z=17.05"
          style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>
          Песчано-Умётский тракт, 2-й километр — Яндекс Карты
        </a>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=45.867098%2C51.591067&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0MTMwNzI2NjU2El%2FQoNC%2B0YHRgdC40Y8sINCh0LDRgNCw0YLQvtCyLCDQn9C10YHRh9Cw0L3Qvi3Qo9C80ZHRgtGB0LrQuNC5INGC0YDQsNC60YIsIDIt0Lkg0LrQuNC70L7QvNC10YLRgCIKDep3N0IVQF1OQg%3D%3D&z=17.05"
          width="100%"
          height="400"
          frameborder="0"
          allowfullscreen="true"
          style={{ position: 'relative' }}></iframe>
      </div>
    </div>
  );
};

export default Contacts;
