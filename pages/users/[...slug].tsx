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
      <h1>User { `${router.query.slug?.[0] } / ${router.query.slug?.[1]}` }</h1>
        {
          router.query.slug?.[1] == 'posts' && 
            <Link href={`/posts/1`}><a>{'posts'}</a></Link>
        }
      </section>
    </LoggedIn>
  )
}

export default Users;