import BlockTitle from '@/components/UI/BlockTitle/BlockTitle';
import Image from 'next/image';
import styles from './Possibilities.module.scss';
const Possibilities = () => {
  return (
    <div className={styles.possibilities}>
      <div className={styles.container}>
        <BlockTitle title="Возможности технологии литья в силикон" />
        <div className={styles.info}>
          <div className={styles.image}>
            <Image src="/images/lasertag.png" width={524} height={419} alt="lasertag" />
            <p>Партия датчиков для игры “Лазертаг” нашего производства</p>
          </div>
          <div className={styles.text}>
            <ul>
              <li>
                <span>Максимальные габариты изделий: </span>500х500х400мм.
              </li>
              <li>
                <span>Цвет изделий: </span>окрашивание в массе согласно каталогу RAL или конечное
                поверхностное окрашивание.
              </li>
              <li>
                <span>Максимальная масса изделий: </span>до 2,5 кг.
              </li>
              <li>
                <span>Точность получаемых изделий: </span>+/- IT 14/2
              </li>
              <li>
                <span>Стойкость оснастки: </span>от 10 до 50 циклов в зависимости от геометрии
                изделия.
              </li>
            </ul>
            <p>
              <span>Материалы, используемые для получения изделий </span>– двухкомпонентные смолы,
              различные по физико-механическим свойствам и близкие к свойствам конструкционных
              термопластов (АБС, ПА, ПЭ, ПП, ПК и т.д.), а также резины с различными показателями
              твердости.
            </p>
            <div className={styles.title}>
              <h3>Мы уже изготавливали:</h3>
              <div></div>
            </div>
            <ul className={styles.already}>
              <li>
                <div></div>корпуса для РЭА , нестандартные корпуса для медицинского оборудования
              </li>
              <li>
                <div></div>макетные обзорные образцы для различного вида испытаний
              </li>
              <li>
                <div></div>комплектующие и запасные части для оборудования
              </li>
              <li>
                <div></div>сувенирную продукцию
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Possibilities;
