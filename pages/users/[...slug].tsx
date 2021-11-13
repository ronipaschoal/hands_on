import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

import { useEffect } from 'react';

import styles from './styles.module.scss';

import Header from '../../component/Header';
import Menu from '../../component/Menu';
import Footer from '../../component/Footer';

import { loginContolService } from '../../services/auth';

const Users: NextPage = () => {

  useEffect(() => {
    loginContolService();
  });

  const router = useRouter();
  console.log(router.query.slug);

  return (
    <>
      <Header />
      <main className={styles.users}>
        <Menu menuActive={''} />
        <h1>User { `${router.query.slug?.[0] } / ${router.query.slug?.[1]}` }</h1>
        {
          router.query.slug?.[1] == 'posts' && 
            <Link href={`/posts/1`}><a>{'posts'}</a></Link>
        }
        <Footer />
      </main>
    </>
  )
}

export default Users;