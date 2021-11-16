import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import  styles  from './styles.module.scss';

import LoggedIn from '../../templates/LoggedIn';
import { getLoggedInUser, updateLoggedInUser } from '../../services/auth';
import Button from '../../component/Button';
import Title from '../../component/title';

const Profile: NextPage = () => {
  
  const [loggedUser, setLoggedUser] = useState({id: '', name: '', email: '', lastAccess: ''});
  const [lastAccess, setLastAccess] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  function titleize(text: string) {
    var words = text.toLowerCase().split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        if(w[0] != undefined) {
          words[a] = w[0].toUpperCase() + w.slice(1);
        }
    }
    return words.join(" ");
}

  const validateName = (nameToTest: string) => {
    if(!nameToTest) {
      setNameError('O nome deve ser preenchido');
      return false;
    }
    if(nameToTest.length < 2) {
      setNameError('O nome deve possuir ao menos 2 caracteres');
      return false;
    }
    setNameError('');
    return true;
  }

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

  const handleSubimit = (event: React.SyntheticEvent) => {
    
    event.preventDefault();

    const target = event.target as typeof event.target & {
      name: { value: string };
      email: { value: string };
    };
    
    const validName = validateName(target.name.value);
    const validEmail = validateEmail(target.email.value);
    
    if(validName && validEmail) {
      loggedUser.name = target.name.value;
      loggedUser.email = target.email.value;
      updateLoggedInUser(loggedUser);
    }
  }

  useEffect(() => {
    
    setLoggedUser(getLoggedInUser());
    
    const date = new Date(loggedUser.lastAccess);
    setLastAccess(
      `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}
      ${date.getHours()}:${date.getMinutes()}`
    );

    setName(loggedUser.name);
    setEmail(loggedUser.email);
  }, [loggedUser.lastAccess, loggedUser.name, loggedUser.email]);

  return (
    <LoggedIn currentPage="profile">
      <section className={styles.profile}>
        <Title>Editar Perfil</Title>
        <div className={styles.image}>
          <Image
            src='https://via.placeholder.com/750/535353'
            alt='Logotipo'
            width='150'
            height='150'
          />
        </div>
        <div>
          <form onSubmit={handleSubimit}>
            <div>
              <label htmlFor="id">Id</label>
              <input id="id" type="text" value={loggedUser.id} disabled/>
            </div>
            <div>
              <label htmlFor="name">Nome</label>
              <input
              id="name"
              type="text"
              value={name}
              onChange={e => setName(titleize(e.target.value))} />
              <span className={styles.invalid}>{nameError}</span>
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)} />
                <span className={styles.invalid}>{emailError}</span>
            </div>
            <div>
              <label htmlFor="lastAccess">Último Acesso</label>
              <input id="lastAccess" type="text" value={lastAccess} disabled/>
            </div>
            <div>
              <Button>Salvar</Button>
            </div>
          </form>
        </div>
      </section>
    </LoggedIn>
  )
}

export default Profile;