import Image from 'next/image';
import BlockTitle from '../UI/BlockTitle/BlockTitle';
import styles from './About.module.scss';
const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <BlockTitle title={`О предприятии M2M`} />
        <div className={styles.content}>
          {/* <Image src="/images/logo.png" width={70} height={70} alt="иконка" /> */}

          <div className={styles.text__block}>
            <span>
              M2M – одна из ведущих производственно-инжиниринговых компаний в области мелкосерийного
              изготовления изделий из пластика.
            </span>
            <h3>Основными направлениями нашей деятельности являются:</h3>
            <ul>
              <li>Прототипирование.</li>
              <li>
                Изготовление пластмассовых изделий любой сложности в кратчайшие сроки методом
                вакуумного литья в силиконовые формы (изготовление пластиковых корпусов и т.д.)
              </li>
              <li>Инжиниринговые услуги.</li>
            </ul>
            <p>
              Работаем только на профессиональном оборудовании. Промышленные 3D-принтеры позволяют в
              кратчайшие сроки получить точный прототип различных деталей и изделий.
            </p>
            <p>
              Цель нашей компании - оперативная помощь в реализации технических проектов, сокращение
              пути от идеи до готового изделия за счет эффективного применения современных
              технологий.
            </p>
            <p>
              Снизим время и затраты на НИОКР, запуск нового продукта в производственной сфере,
              конструировании, дизайне и медицине!
            </p>
            <p>Нам доверяют крупные предприятия и промышленные холдинги.</p>
            <h3>Преимущества работы с M2M –</h3>

            <ul>
              <li>гибкая ценовая политика</li>
              <li>собственное производство - срок изготовления от 1 дня</li>
              <li>изготовление изделий любой сложности</li>
              <li>индивидуальный подход к каждому клиенту</li>
            </ul>
          </div>
          <div className={styles.technologies}>
            <h3>наши технологии</h3>
            <ul>
              <li>
                <Image src="/images/ic-gear.png" width={32} height={32} alt="шестерня" />
                <p>cтереолитография (StereoLithography Apparatus, SLA)</p>
              </li>
              <li>
                <Image src="/images/ic-gear.png" width={32} height={32} alt="шестерня" />
                <p>cтруйное моделирование (Photopolymer Jetting, PolyJet)</p>
              </li>
              <li>
                <Image src="/images/ic-gear.png" width={32} height={32} alt="шестерня" />
                <p>моделирование осаждением расплавленной нити (Fusing Deposition Modeling, FDM)</p>
              </li>
              <li>
                <Image src="/images/ic-gear.png" width={32} height={32} alt="шестерня" />
                <p>вакумное литье в силиконовые формы</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
