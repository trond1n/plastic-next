import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.scss';

const navigation = [
  { id: 1, title: 'Главная', path: '/' },
  { id: 4, title: 'Выполненные работы', path: '/done' },
  { id: 5, title: 'Условия заказа', path: '/conditions' },
  { id: 6, title: 'Контакты', path: '/contacts' },
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path} className={pathname === path ? styles.active : null}>
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
