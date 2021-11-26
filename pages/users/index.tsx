import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import styles from './styles.module.scss';
import LoggedIn from '../../templates/LoggedIn';
import Link from '../../component/Link';
import { getAllUsers } from '../../services/users';
import Title from '../../component/title';

const Users: NextPage = () => {
  
  const [allUsers, setAllUsers] = useState([{id: '', name: '', email: ''}]);

  useEffect(() => {
    const allUsersPromise = getAllUsers();
    allUsersPromise.then(allUsers => setAllUsers(allUsers));
  }, []);

  return (
    <LoggedIn currentPage="">
      <section className={styles.users}>

        <Title>Listagem de usuários</Title>
        <div className={styles.tableContainer}>
          <table>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Ações</th>
              </tr>
              {
                allUsers.map(user => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <Link href={`/users/${user.id}`} type="secondary">Editar</Link>
                        <Link href={`/users/${user.id}/posts`} type="secondary">Ver posts</Link>
                        <Link href={`/users/${user.id}/coments`} type="secondary">Ver Comentários</Link>
                      </td>
                    </tr>
                  )
                })
              }
          </table>
        </div>
      </section>
    </LoggedIn>
  )
}

export default Users;