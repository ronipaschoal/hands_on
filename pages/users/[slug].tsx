import type { NextPage } from 'next';
import Link from 'next/link';

import { useRouter } from 'next/dist/client/router';

import styles from './styles.module.scss';

import Header from '../../component/Header';
import Menu from '../../component/Menu';
import Footer from '../../component/Footer';

const Users: NextPage = () => {

  const router = useRouter();

  return (
    <>
      <Header />
      <main className={styles.users}>
        <Menu menuActive={''} />
        <h1>User { router.query.slug }</h1>
        <Link href={`/users/1/posts`}><a>{'posts'}</a></Link>
        {' / '}
        <Link href={`/users/1/coments`}><a>{'coments'}</a></Link>
        <Footer />
      </main>
    </>
  )
}

export default Users;

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   // const { slug } = ctx.params;
//   // console.log(slug);
//   // const { data } = await api.get(`episodes/${slug}`);

//   const user = {
//       id: true
//   }

//   return {
//       props: { user },
//       revalidate: 60 * 60 * 8,
//   }
// }