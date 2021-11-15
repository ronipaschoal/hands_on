import { NextPage } from 'next';
import Image from 'next/image';

import linkedin from '../../public/images/linkedin.png';
import github from '../../public/images/github.png';

import styles from './styles.module.scss';

const Footer: NextPage = () => {

  return (
    <footer 
      className={styles.footer}
    >
      <div>
        15/11/2021
        <a href="https://ronipaschoal.com.br/" target="_blank" rel="noreferrer">
          Roni Paschoal
        </a>
        <a
          className={styles.icon}
          href="https://www.linkedin.com/in/roni-paschoal/"
          target="_blank"
          rel="noreferrer">
          <Image 
            src={linkedin}
            alt={'Logo Linkedin'}
            height={'16rem'}
            width={'16rem'}
            layout="fixed" />
        </a>
        <a
          className={styles.icon}
          href="https://github.com/ronipaschoal/"
          target="_blank"
          rel="noreferrer">
          <Image 
            src={github}
            alt={'Logo Github'}
            height={'16rem'}
            width={'16rem'}
            layout="fixed" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
