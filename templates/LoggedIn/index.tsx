import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import Header from '../../component/Header';
import Menu from '../../component/Menu';
import Footer from '../../component/Footer';

import { getLoggedInUser } from '../../services/auth';
import LoginContext from '../../contexts/LoginContext';

interface Props {
  currentPage?: string;
}

const LoggedIn: NextPage<Props> = ({children, currentPage}) => {

  const [user, setUser] = useState({});
  useEffect(() => {
    const loggedInUser = getLoggedInUser();
    loggedInUser && setUser(loggedInUser);
  }, []);

  return (
    <LoginContext.Provider value={user}>
      <Header />
      <main>
        <Menu menuActive={currentPage} />
          {children}
        <Footer />
      </main>
    </LoginContext.Provider>
  );
};

export default LoggedIn;
