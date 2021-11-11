import type { NextPage } from 'next';
import Link from 'next/link';

import styles from './styles.module.scss';

import Footer from '../../component/Footer';
import Header from '../../component/Header';

const Login: NextPage = () => {
  return (
    <>
      <Header />
      <main className={styles.login}>
        <h1>Login</h1>
        <form action="">
          <label htmlFor="login">Login</label>
          <br />
          <input id="login" type="text" />
          <br />
          <label htmlFor="password">Senha</label>
          <br />
          <input id="password" type="password" />
          <br />

          <Link href={`/`}><a>{'Entrar'}</a></Link>
        </form>
        <Footer />
      </main>
    </>
  )
}

export default Login;