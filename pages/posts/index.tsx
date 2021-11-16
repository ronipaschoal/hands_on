import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';

import styles from './styles.module.scss';

import LoggedIn from '../../templates/LoggedIn';
import { useEffect, useState } from 'react';
import { getAllPosts } from '../../services/posts';

const Posts: NextPage = () => {

  const [posts, setPosts] = useState();

  useEffect(() => {

    const currentUsersPromise = getAllPosts();
    currentUsersPromise.then(posts => setPosts(posts));

    console.log(posts);
  }, []);

  return (
    <LoggedIn currentPage="">
      <section className={styles.posts}>
        <h1>Todos os Posts</h1>
      </section>
    </LoggedIn>
  )
}

export default Posts;