import type { NextPage } from 'next';

import styles from './styles.module.scss';

import Footer from '../../component/Footer';
import Header from '../../component/Header';
import Button from '../../component/Button';

import {loginService} from '../../services/auth';

const Login: NextPage = () => {

  const handleSubimit = (event: React.SyntheticEvent) => {
    
    event.preventDefault();

    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    loginService({ email: email, password: password });

  }

  return (
    <>
      <Header />
      <main className={styles.login}>
        <form onSubmit={handleSubimit}>
          <h1>Faça seu login</h1>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="text" placeholder="Digite seu e-mail" />
          <label htmlFor="password">Senha:</label>
          <input id="password" name="password" type="password" placeholder="Digite sua senha" />
          <Button>Entrar</Button>
        </form>
        <Footer botton={true} />
      </main>
    </>
  )
}

export default Login;