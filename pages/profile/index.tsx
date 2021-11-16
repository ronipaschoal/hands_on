import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import  styles  from './styles.module.scss';

import LoggedIn from '../../templates/LoggedIn';
import { getLoggedInUser } from '../../services/auth';
import Button from '../../component/Button';

interface User {
  id: string;
  name: string;
  email: string;
  lastAccess: number;
}

const Profile: NextPage = () => {
  
  const [loggedUser, setLoggedUser] = useState({} as User);
  const [lastAccess, setLastAccess] = useState('');

  useEffect(() => {
    
    setLoggedUser(getLoggedInUser());
    
    const date = new Date(loggedUser.lastAccess);
    setLastAccess(
      `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}
      ${date.getHours()}:${date.getMinutes()}`
    );
  }, [loggedUser.lastAccess]);

  return (
    <LoggedIn currentPage="profile">
      <section className={styles.profile}>
        <h1>Perfil</h1>
        <div>
          <div>
            <input type="text" value={loggedUser.id} disabled/>
            <input type="text" value={loggedUser.name}/>
            <input type="text" value={loggedUser.email}/>
            <input type="text" value={lastAccess} disabled/>
          </div>
          <div className={styles.image}>
            <Image
              src='https://via.placeholder.com/750/535353'
              alt='Logotipo'
              width='150'
              height='150'
            />
          </div>
        </div>
        <br />
        <Button>Salvar</Button>
      </section>
    </LoggedIn>
  )
}

export default Profile;