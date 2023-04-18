import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';
import Image from 'next/image';

const navigation = [
  { id: 1, title: 'Главная', path: '/' },
  { id: 4, title: 'Выполненные работы', path: '/done' },
  { id: 5, title: 'Условия заказа', path: '/conditions' },
  { id: 6, title: 'Контакты', path: '/contacts' },
];

const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <Link href={'/'}>
        <Image src="/images/logo.png" width={72} height={72} alt="logo" />
      </Link>

      <nav className={styles.nav}>
        <div className={styles.links}>
          {navigation.map(({ id, title, path }) => (
            <Link key={id} href={path} className={pathname === path ? styles.active : null}>
              {title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
