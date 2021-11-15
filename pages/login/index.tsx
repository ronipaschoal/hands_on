import type { NextPage } from 'next';

import styles from './styles.module.scss';

import Footer from '../../component/Footer';
import Header from '../../component/Header';
import Button from '../../component/Button';

import {loginService} from '../../services/auth';
import { useState } from 'react';
import Menu from '../../component/Menu';

const Login: NextPage = () => {

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const validateEmail = (email: string) => {
    const regex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    if(!email) {
      setEmailError('O e-mail deve ser preenchido');
      return false;
    }
    if(!regex.test(email)) {
      setEmailError('Favor digitar um e-mail válido');
      return false;
    }
    setEmailError('');
    return true;
  }

  const validatePassword = (password: string) => {
    if(!password) {
      setPasswordError('A senha deve ser preenchida');
      return false;
    }
    if(password.length < 6) {
      setPasswordError('A senha deve possuir ao menos 6 caracteres');
      return false;
    }
    setPasswordError('');
    return true;
  }

  const handleSubimit = (event: React.SyntheticEvent) => {
    
    event.preventDefault();

    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    
    const validEmail = validateEmail(target.email.value);
    const validPassword = validatePassword(target.password.value);
    
    if(validEmail && validPassword) {
      loginService({ email: target.email.value, password: target.password.value });
    }

  }

  return (
    <>
      <Header />
      <main className={styles.login}>
        <Menu menuActive={'login'} />
        <form onSubmit={handleSubimit}>
          <h1>Faça seu login</h1>
          <label htmlFor="email">E-mail:</label>
          <input id="email" name="email" type="text" placeholder="Digite seu e-mail" />
          <span className={styles.invalid}>{emailError}</span>
          <label htmlFor="password">Senha:</label>
          <input id="password" name="password" type="password" placeholder="Digite sua senha" />
          <span className={styles.invalid}>{passwordError}</span>
          <Button>Entrar</Button>
        </form>
        <Footer />
      </main>
    </>
  )
}

export default Login;