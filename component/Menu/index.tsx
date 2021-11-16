import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

import { getLoggedInUser, logoutService } from '../../services/auth';


interface Props {
  menuActive?: string;
}

const Menu: NextPage<Props> = ({menuActive}) => {

  const [loggedUser, setLoggedUser] = useState({ name:'' });

  useEffect(() => {
    setLoggedUser(getLoggedInUser());
  }, []);

  return (
    <header id='menu' className={styles.header}>
      <nav className={styles.navbar}>
        <Link href={'/'}>
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
          {
            !loggedUser ? (
              <>
                <li className={menuActive == 'login' ? styles.active : ''}>
                    <a onClick={logoutService}>{'LogIn'}</a>
                </li>
              </>
            ):(
              <>
                <li className={menuActive == 'home' ? styles.active : ''}>
                  <Link href={`/`}>
                    <a>{'Home'}</a>
                  </Link>
                </li>
                <li className={menuActive == 'profile' ? styles.active : ''}>
                  <Link href={`/profile`}>
                    <a>{loggedUser.name}</a>
                  </Link>
                </li>
                <li className={menuActive == 'logout' ? styles.active : ''}>
                    <a onClick={logoutService}>{'Logout'}</a>
                </li>
              </>
            )
          }
          
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
