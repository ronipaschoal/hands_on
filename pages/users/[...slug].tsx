import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';

import styles from './styles.module.scss';

import LoggedIn from '../../templates/LoggedIn';
import { useEffect, useState } from 'react';
import { getPostsByUserId } from '../../services/posts';
import { getUserById } from '../../services/users';
import Link from '../../component/Link';
import Title from '../../component/title';

const Users: NextPage = () => {

  const router = useRouter();
  const [posts, setPosts] = useState([{id: '', title: ''}]);
  
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
  });

  const { slug } = router.query;
  
  useEffect(() => {
    if (slug) {
      const currentUsersPromise = getUserById(slug[0]);
      currentUsersPromise.then(user => setCurrentUser(user));

      const userPostsPromise = getPostsByUserId(slug[0]);
      userPostsPromise.then(userPosts => setPosts(userPosts));
    }
  }, [slug]);

  return (
    
    <LoggedIn currentPage="">
      <section className={styles.users}>
        <Title>User {currentUser.name} {slug?.[1]}</Title>
        {
          router.query.slug?.[1] == 'posts' && 
          posts.map((post, index) => {
            return <div key={index}>
              <div>
                <Image
                  src='https://via.placeholder.com/750/535353'
                  alt='Logotipo'
                  width='150'
                  height='150'
                />
              </div>
              <div>
                <br/>{post.id}
                <br/>{post.title}
                <br/>{currentUser.id}
                <br/>{currentUser.name}
                <br/>{currentUser.username}
                <br/>{currentUser.email}
                <br/>{posts.length} 
              </div>
              <Link href={`/posts/${post.id}`} type="secondary" >Ver detalhes</Link>
              <br />
              <br />
              <hr />
              <br />
            </div>
          })
        }
      </section>
    </LoggedIn>
  )
}

export default Users;