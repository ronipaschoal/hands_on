import { NextPage } from 'next';
import { useEffect } from 'react';

import Header from '../../component/Header';
import Menu from '../../component/Menu';
import Footer from '../../component/Footer';

import { getLoggedInUser } from '../../services/auth';

interface Props {
  currentPage?: string;
}

const LoggedIn: NextPage<Props> = ({children, currentPage}) => {

  useEffect(() => {
    getLoggedInUser();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Menu menuActive={currentPage} />
          {children}
        <Footer />
      </main>
    </>
  );
};

export default LoggedIn;
