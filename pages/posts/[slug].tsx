import type { NextPage } from 'next';
import Link from 'next/link';

import { useRouter } from 'next/dist/client/router';

import styles from './styles.module.scss';

import Header from '../../component/Header';
import Menu from '../../component/Menu';
import Footer from '../../component/Footer';

const Posts: NextPage = () => {

  const router = useRouter();

  return (
    <>
      <Header />
      <main className={styles.posts}>
        <Menu menuActive={''} />
        <h1>Posts { router.query.slug }</h1>
        <Link href={`/`}><a>{'home'}</a></Link>
        <Footer />
      </main>
    </>
  )
}

export default Posts;