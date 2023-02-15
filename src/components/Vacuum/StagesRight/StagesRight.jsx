import Image from 'next/image';
import styles from './StagesRight.module.scss';
const StagesRight = () => {
  return (
    <div className={styles.stages_right}>
      <div className={styles.container}>
        <Image src="/images/stages/right-1.jpg" width={330} height={222} alt="пластиковая штучка" />

        <div className={styles.text}>
          <div className={styles.title}>
            <Image src="/images/stages/logo-2.png" width={60} height={55} alt="ikonka" />
            <h3>Изготовление мастер-модели изделия</h3>
          </div>
          <p>
            На втором этапе мастер-модель проходит обработку лицевых и внутренних поверхностей. На
            лицевой поверхности создается фактура, согласованная с заказчиком или указанная в
            техническом задании.
          </p>
          <p>
            Для получения различных видов поверхностей, модель неоднократно шлифуется, грунтуется,
            окрашивается и, при необходимости, полируется. Например, для получения гладкой
            поверхности даже фотополимерные образцы, отпечатанные с высоким разрешением и точностью,
            необходимо дорабатывать.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StagesRight;
