import type { NextPage } from 'next';
import { NextResponse } from 'next/server';
import Router from 'next/router';
import Link from 'next/link';

import styles from './styles.module.scss';

import Footer from '../../component/Footer';
import Header from '../../component/Header';
import Button from '../../component/Button';

import {loginService} from '../../services/auth';

const Login: NextPage = () => {

  const handleSubimit = (event: React.SyntheticEvent) => {
    
    event.preventDefault();

    const target = event.target as typeof event.target & {
      login: { value: string };
      password: { value: string };
    };
    const login = target.login.value;
    const password = target.password.value;

    console.log('email', login);
    console.log('password', password);

    interface user {
      name: string;
      email: string;
      senha: string;
    }

    loginService({
      name: 'string',
      email: 'string',
      senha: 'string'
    });

    Router.push('/');
  }

  return (
    <>
      <Header />
      <main className={styles.login}>
        <h1>Login</h1>
        <form onSubmit={handleSubimit}>
          <label htmlFor="login">Login</label>
          <input id="login" name="login" type="text" />
          <label htmlFor="password">Senha</label>
          <input id="password" name="password" type="password" />
          <Button>Entrar</Button>
        </form>
        <Footer botton={true} />
      </main>
    </>
  )
}

export default Login;