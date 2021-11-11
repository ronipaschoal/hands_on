import type { NextPage } from 'next';
import Link from 'next/link';

import styles from './styles.module.scss';

import Header from '../../component/Header';
import Menu from '../../component/Menu';
import Footer from '../../component/Footer';

const Users: NextPage = () => {
  return (
    <>
      <Header />
      <main className={styles.users}>
        <Menu menuActive={''} />
        <h1>Users</h1>
        <Link href={`/users/1`}><a>{'usuario um'}</a></Link>
        <Footer />
      </main>
    </>
  )
}

export default Users;