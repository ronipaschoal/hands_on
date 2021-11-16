import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

import styles from './styles.module.scss';

import LoggedIn from '../../templates/LoggedIn';
import { useEffect, useState } from 'react';
import { getUserById } from '../../services/users';
import Button from '../../component/Button';

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
        <h1>User { router.query.slug }</h1>

        <div>
          <div>
            <input type="text" value={currentUser.id} disabled/>
            <input type="text" value={currentUser.name}/>
            <input type="text" value={currentUser.email}/>
            <input type="text" value={currentUser.username}/>
            <input type="text" value={`${currentUser.address.street}, ${currentUser.address.suite}`}/>
            <input type="text" value={currentUser.phone}/>
            <input type="text" value={currentUser.company.name}/>
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
        <Link href={`/users/${currentUser.id}/posts`}><a><Button>{'Posts do Usuário'}</Button></a></Link>
        <br />
        <br />
        <Button>Apagar Usuário</Button>
      </section>
    </LoggedIn>
  )
}

export default Users;