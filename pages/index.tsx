import type { NextPage } from 'next';
import Link from 'next/link';

import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

import LoggedIn from '../templates/LoggedIn';
import { getLoggedInUser } from '../services/auth';
import Button from '../component/Button';

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
        <h1>Seja bem vindo {loggedUser.name}!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ad. Modi, iusto! Quaerat sint laboriosam in cum, suscipit veniam consectetur ut consequatur sapiente voluptatibus esse enim veritatis, eius cumque saepe repellendus porro sunt tempore! Eius, quidem! Quo vel sequi obcaecati, suscipit corrupti veritatis incidunt, sunt error ad sapiente soluta. Minima modi, ipsa inventore sapiente animi iste consectetur corrupti dolorem eum hic adipisci blanditiis fuga, perferendis rem repudiandae voluptates quam aliquid sed esse eius deleniti voluptatibus porro. Delectus dicta est esse non ullam. Nulla doloremque dolorem, reiciendis nisi, incidunt similique neque aut sint impedit, rerum beatae nostrum. Deleniti minus provident corrupti!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat vel nihil nesciunt expedita sapiente voluptatum, obcaecati alias quis dolor rem sequi labore fuga veniam reprehenderit. Facere similique iste officiis impedit doloribus, perspiciatis provident quis ipsum beatae laudantium at aut incidunt quasi, blanditiis adipisci dolore ad natus fuga? Nisi ipsa reiciendis iusto voluptas! Sunt temporibus quas consequatur sequi nulla natus quo obcaecati veniam repellat, excepturi officiis eos, voluptate dignissimos quibusdam doloremque tempore quia atque provident praesentium ducimus minus assumenda itaque! Sit pariatur quae laudantium iste esse ea perspiciatis veritatis eaque ipsa hic voluptatum vitae error, obcaecati quidem eos! Sunt, ipsa ut blanditiis ipsum itaque deserunt odit eos doloremque reiciendis in tempore ullam similique voluptate ducimus autem expedita, eligendi modi. Culpa, quo quia voluptate minus, vitae dignissimos veniam, excepturi ducimus eligendi aut accusantium esse necessitatibus pariatur quaerat a quisquam voluptates. Earum molestiae beatae officiis reprehenderit enim aliquam voluptas quisquam distinctio placeat nostrum.</p>
        <Link href={`/users`}><a><Button>Listar Usuários</Button></a></Link>
      </section>
    </LoggedIn>
  )
}

export default Home;
