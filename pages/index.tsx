import type { NextPage } from 'next';
import Link from 'next/link';

import styles from './styles.module.scss';

import LoggedIn from '../templates/LoggedIn';

const Home: NextPage = () => {

  return (
    <LoggedIn currentPage="home">
      <section className={styles.home}>
        <h1>Home</h1>
        <Link href={`/users`}><a>{'Usuários'}</a></Link>
      </section>
    </LoggedIn>
  )
}

export default Home;
