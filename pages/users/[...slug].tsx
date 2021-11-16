import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';

import styles from './styles.module.scss';

import LoggedIn from '../../templates/LoggedIn';
import { useEffect, useState } from 'react';
import { getPostsByUserId } from '../../services/posts';
import { getUserById } from '../../services/users';
import Button from '../../component/Button';
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
              <Image
                src='https://via.placeholder.com/750/535353'
                alt='Logotipo'
                width='150'
                height='150'
              />
              {post.id}
              {post.title}
              <Button><Link href={`/posts/${post.id}`}><a>Ver detalhes</a></Link></Button>
               <br />
              {currentUser.id}
              {currentUser.name}
              {currentUser.username}
              {currentUser.email}
              {posts.length}
            </div>
          })
        }
      </section>
    </LoggedIn>
  )
}

export default Users;