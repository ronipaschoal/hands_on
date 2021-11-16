import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import styles from './styles.module.scss';
import LoggedIn from '../templates/LoggedIn';
import Button from '../component/Button';
import Link from '../component/Link';
import Title from '../component/title';
import { getLoggedInUser } from '../services/auth';

interface User {
  name: string;
}

const Home: NextPage = () => {

  const [loggedUser, setLoggedUser] = useState({} as User);
  useEffect(() => {
    setLoggedUser(getLoggedInUser());
  }, []);

  return (
    <LoggedIn currentPage="home">
      <section className={styles.home}>
        <Title>Seja bem vindo {loggedUser.name}!</Title>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ad. Modi, iusto! Quaerat sint laboriosam in cum, suscipit veniam consectetur ut consequatur sapiente voluptatibus esse enim veritatis, eius cumque saepe repellendus porro sunt tempore! Eius, quidem! Quo vel sequi obcaecati, suscipit corrupti veritatis incidunt, sunt error ad sapiente soluta. Minima modi, ipsa inventore sapiente animi iste consectetur corrupti dolorem eum hic adipisci blanditiis fuga, perferendis rem repudiandae voluptates quam aliquid sed esse eius deleniti voluptatibus porro. Delectus dicta est esse non ullam. Nulla doloremque dolorem, reiciendis nisi, incidunt similique neque aut sint impedit, rerum beatae nostrum. Deleniti minus provident corrupti!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero natus numquam cum, nihil ex voluptatum cumque quasi repellat dolores libero hic iusto dolorem expedita modi nobis, repellendus ipsam quis labore. A natus similique commodi aliquam incidunt ab nobis enim eligendi repellat, eius veritatis perferendis ex ullam tempora eum nemo tenetur facere cupiditate aliquid dolorum. Voluptas, porro architecto quis suscipit distinctio ut officia temporibus id provident necessitatibus laudantium quibusdam, deserunt omnis consectetur quos officiis eaque aliquam. Praesentium numquam, quasi itaque consequuntur a earum soluta nesciunt vel accusamus, exercitationem maiores molestias ipsam quos optio corporis dolorum autem quidem eius similique reiciendis esse.</p>
        <Button><Link href={`/users`} type="default">Listar Usuários</Link></Button>
      </section>
    </LoggedIn>
  )
}

export default Home;
