import BlockTitle from '@/components/UI/BlockTitle/BlockTitle';
import Button from '@/components/UI/Button/Button';
import Image from 'next/image';
import styles from './ConditionsBlock.module.scss';

const ConditionsBlock = ({ conditions, title }) => {
  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <div className={styles.conditions}>
          <h3>{title}</h3>
          <ul>
            {conditions.map((i, idx) => (
              <li key={idx}>
                <div></div>
                {i}
              </li>
            ))}
          </ul>
        </div>

        <Button title="ОТПРАВИТЬ ЗАЯВКУ" />
      </div>
    </div>
  );
};

export default ConditionsBlock;
