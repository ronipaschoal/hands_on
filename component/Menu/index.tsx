import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

interface Props {
  menuActive: string;
}

const Menu: NextPage<Props> = ({menuActive}) => {
  
  return (
    <header id='menu' className={styles.header}>
      <nav className={styles.navbar}>
        <Link href={`/`}>
          <a className={styles.navLogo}>
          <Image
            src='https://via.placeholder.com/100/fff'
            alt='Logotipo'
            width='50'
            height='50'
          />
          </a>
        </Link>
        <ul>
          <li className={menuActive == 'home' ? styles.active : ''}>
            <Link href={`/`}>
              <a>{'Home'}</a>
            </Link>
          </li>
          <li className={menuActive == 'profile' ? styles.active : ''}>
            <Link href={`/profile`}>
              <a>{'<Name>'}</a>
            </Link>
          </li>
          <li className={menuActive == 'logout' ? styles.active : ''}>
            <Link href={`/login`}>
              <a>{'Logout'}</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
