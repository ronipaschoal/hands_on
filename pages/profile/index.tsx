import type { NextPage } from 'next';

import  styles  from './styles.module.scss';

import LoggedIn from '../../templates/LoggedIn';

const Profile: NextPage = () => {
  return (
    <LoggedIn currentPage="profile">
      <section className={styles.profile}>
        <h1>Profile</h1>
      </section>
    </LoggedIn>
  )
}

export default Profile;