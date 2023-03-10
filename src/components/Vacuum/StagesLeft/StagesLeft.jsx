import Image from 'next/image';
import styles from './StagesLeft.module.scss';
const StagesLeft = () => {
  return (
    <div className={styles.stages_left}>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.title}>
            <Image src="/images/stages/logo-1.png" width={60} height={55} alt="ikonka" />
            <h3>Изготовление мастер-модели изделия</h3>
          </div>
          <p>
            Мастер-модель - это физический прототип изделия. Необходим для получения формы для
            литья, а в дальнейшем для изготовления партии. Создание мастер-модели, точно повторяющей
            готовую продукцию, — гарантия получить качественный продукт на выходе. С помощью
            мастер-модели возможно увидеть недостатки изделия до запуска его в серийное
            производство, выбрать наилучший вариант дизайна будущей продукции и внести необходимые
            изменения и корректировки в конструкцию.
          </p>
          <p>
            Мы создаем мастер-модели любых размеров и сложности с помощью метода объемной печати на
            промышленных 3D – принтерах. Время получения готовой модели может варьироваться от
            нескольких минут и до нескольких дней.
          </p>
        </div>
        <Image src="/images/stages/left-1.jpg" width={330} height={222} alt="пластиковая штучка" />
      </div>
    </div>
  );
};

export default StagesLeft;
