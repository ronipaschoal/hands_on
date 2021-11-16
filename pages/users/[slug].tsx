import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

import styles from './styles.module.scss';

import LoggedIn from '../../templates/LoggedIn';
import { useEffect, useState } from 'react';
import { getUserById } from '../../services/users';
import Button from '../../component/Button';
import Title from '../../component/title';

interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  address: {
    street: string;
    suite: string;
  }
  phone: string;
  company: {
    name: string;
  }
}

const Users: NextPage = () => {

  const [currentUser, setCurrentUser] = useState({
    id: '',
    name: '',
    email: '',
    username: '',
    address: {
      street: '',
      suite: '',
    },
    phone: '',
    company: {
      name: '',
    }
  } as User);
  
  const router = useRouter();
  const {slug} = router.query;

  useEffect(() => {

    if(slug != undefined) {
      const currentUsersPromise = getUserById(slug[0]);
      currentUsersPromise.then(user => setCurrentUser(user));
    }
  }, [slug]);


  return (
    <LoggedIn currentPage="">
      <section className={styles.user}>
        <Title>User { router.query.slug }</Title>
        <div>
          <div className={styles.image}>
            <Image
              src='https://via.placeholder.com/750/535353'
              alt='Logotipo'
              width='150'
              height='150'
            />
          </div>
          <div>
            <p>
              <div>Id</div>
              <div>{currentUser.id}</div>
            </p>
            <p>
              <div>Nome</div>
              <div>{currentUser.name}</div>
            </p>
            <p>
              <div>E-mail</div>
              <div>{currentUser.email}</div>
            </p>
            <p>
              <div>Nome de Usuário</div>
              <div>{currentUser.username}</div>
            </p>
            <p>
              <div>Endereço</div>
              <div>{`${currentUser.address.street}, ${currentUser.address.suite}`}</div>
            </p>
            <p>
              <div>Telefone</div>
              <div>{currentUser.phone}</div>
            </p>
            <p>
              <div>Empresa</div>
              <div>{currentUser.company.name}</div>
            </p>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button><Link href={`/users/${currentUser.id}/posts`}>Posts do Usuário</Link></Button>
          <Button>Apagar Usuário</Button>
        </div>
      </section>
    </LoggedIn>
  )
}

export default Users;