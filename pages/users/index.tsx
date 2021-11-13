import type { NextPage } from 'next';
import Link from 'next/link';

import styles from './styles.module.scss';

import LoggedIn from '../../templates/LoggedIn';

const Users: NextPage = () => {

  return (
    <LoggedIn currentPage="">
      <section className={styles.users}>
        <h1>Users</h1>
        <Link href={`/users/1`}><a>{'usuario um'}</a></Link>
      </section>
    </LoggedIn>
  )
}

export default Users;