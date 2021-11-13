import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

import styles from './styles.module.scss';

import LoggedIn from '../../templates/LoggedIn';

const Users: NextPage = () => {

  const router = useRouter();

  return (
    <LoggedIn currentPage="">
      <section className={styles.users}>
        <h1>User { router.query.slug }</h1>
        <Link href={`/users/1/posts`}><a>{'posts'}</a></Link>
        {' / '}
        <Link href={`/users/1/coments`}><a>{'coments'}</a></Link>
      </section>
    </LoggedIn>
  )
}

export default Users;