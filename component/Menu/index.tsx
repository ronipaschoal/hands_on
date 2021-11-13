import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { useContext } from 'react';

import styles from './styles.module.scss';

import LoginContext from '../../contexts/LoginContext';
import { logoutService } from '../../services/auth';


interface Props {
  menuActive?: string;
}

const Menu: NextPage<Props> = ({menuActive}) => {
  
  const user = useContext(LoginContext);

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
              <a>{user.name}</a>
            </Link>
          </li>
          <li className={menuActive == 'logout' ? styles.active : ''}>
              <a onClick={logoutService}>{'Logout'}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
