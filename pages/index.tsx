import type { NextPage } from 'next';
import Link from 'next/link';

import { useEffect } from 'react';

import styles from './styles.module.scss';

import Footer from '../component/Footer';
import Header from '../component/Header';
import Menu from '../component/Menu';

import { loginContolService } from '../services/auth';

const Home: NextPage = () => {

  useEffect(() => {
    loginContolService();
  });

  return (
    <>
      <Header />
      <main className={styles.home}>
        <Menu menuActive="home" />
        <h1>Home</h1>

        <Link href={`/users`}>
          <a>{'Usuários'}</a>
        </Link>
        <Footer />
      </main>
    </>
  )
}

export default Home;
