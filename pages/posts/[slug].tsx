import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import styles from './styles.module.scss';

import LoggedIn from '../../templates/LoggedIn';
import { useEffect, useState } from 'react';
import { getUserById } from '../../services/users';
import { getPostById } from '../../services/posts';
import Button from '../../component/Button';

const Posts: NextPage = () => {

  const [post, setPost] = useState({id: '', title: '', body: ''});
  
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
  
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      const currentUsersPromise = getUserById(slug[0]);
      currentUsersPromise.then(user => setCurrentUser(user));

      const postsDetailsPromise = getPostById(slug[0]);
      postsDetailsPromise.then(postDetail => setPost(postDetail));
    }
  }, [slug]);
  
  return (
    <LoggedIn currentPage="">
      <section className={styles.posts}>
        <br/>{currentUser.id}
        <br/>{currentUser.name}
        <br/>{currentUser.username}
        <br/>{currentUser.email}
        <br />
        <br />
        <hr />
        <h1>Posts { slug }</h1>
        <br/>{post.id}
        <br/>{post.title}
        <br/>{post.body}
        <br/>{/* {posts.length} */}
        <Button><Link href={`/users/${currentUser.id}`}><a>Editar</a></Link></Button>

      </section>
    </LoggedIn>
  )
}

export default Posts;