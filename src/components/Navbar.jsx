import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.scss';

const navigation = [
  { id: 1, title: 'Главная', path: '/' },
  { id: 2, title: 'Вакуумное литье', path: '/vacuum' },
  { id: 3, title: '3D-прототипирование', path: '/3dPrototype' },
  { id: 4, title: 'Выполненные работы', path: '/done' },
  { id: 5, title: 'Условия заказа', path: '/conditions' },
  { id: 6, title: 'Отзывы', path: '/reviews' },
  { id: 7, title: 'Контакты', path: '/contacts' },
];

const Navbar = () => {
  const { pathname } = useRouter();
  console.log(pathname);

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
