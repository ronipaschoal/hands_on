import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from './styles.module.scss';
import LoggedIn from '../../templates/LoggedIn';
import { getAllUsers } from '../../services/users';
import Button from '../../component/Button';

interface User {
  id: string;
  name: string;
  email: string;
}

const Users: NextPage = () => {
  
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const allUsersPromise = getAllUsers();
    allUsersPromise.then(allUsers => setAllUsers(allUsers));
  }, []);

  return (
    <LoggedIn currentPage="">
      <section className={styles.users}>
        <h1>Listagem de usuários</h1>
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <td>Id</td>
                <td>Nome</td>
                <td>E-mail</td>
                <td>Ações</td>
              </tr>
            </thead>
            <tbody>
              {
                allUsers.map(user => {
                  const {id, name, email} = (user as User);

                  return (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>
                        <Link href={`/users/${id}`}>
                          <a><Button>{'Editar'}</Button></a>
                        </Link>
                        <Link href={`/users/${id}/posts`}>
                          <a><Button>{'Ver posts'}</Button></a>
                        </Link>
                        <Link href={`/users/${id}/coments`}>
                          <a><Button>{'Ver Coemtários'}</Button></a>
                        </Link>
                      </td>
                    </tr>
                  )
                })
              }
              
            </tbody>
          </table>
        </div>

      </section>
    </LoggedIn>
  )
}

export default Users;