import type { NextPage } from 'next';

import  style  from './styles.module.scss';

import Footer from '../../component/Footer';
import Header from '../../component/Header';
import Menu from '../../component/Menu';

const Profile: NextPage = () => {
  return (
    <>
      <Header />
      <main className={style.profile}>
        <Menu menuActive="profile" />
        <h1>Profile</h1>
        <Footer />
      </main>
    </>
  )
}

export default Profile;