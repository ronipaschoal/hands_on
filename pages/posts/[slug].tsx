import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';

import styles from './styles.module.scss';

import LoggedIn from '../../templates/LoggedIn';

const Posts: NextPage = () => {

  const router = useRouter();

  return (
    <LoggedIn currentPage="">
      <section className={styles.posts}>
        <h1>Posts { router.query.slug }</h1>
      </section>
    </LoggedIn>
  )
}

export default Posts;