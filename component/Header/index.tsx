import { NextPage } from 'next';
import Head from 'next/head';

const Header: NextPage = () => {

  return (
    <Head>
      <title>Hands On | The System!</title>
      <meta
        name="description" 
        content="Sistema desenvolvido em React + Next para testar os conhecimentos!" />
      <link rel="icon" href="../images/favicon.ico" type="image/png" />
    </Head>
  );
};

export default Header;
