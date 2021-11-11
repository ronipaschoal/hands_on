import { NextPage } from 'next';

import styles from './styles.module.scss';

const Footer: NextPage = () => {

  return (
    <footer className={styles.footer}>
      <div>
        <a href="https://ronipaschoal.com.br" target="_blank" rel="noreferrer">
          Design By Roni Paschoal
        </a>
      </div>
    </footer>
  );
};

export default Footer;
