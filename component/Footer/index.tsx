import { NextPage } from 'next';
import Image from 'next/image';

import linkedin from '../../public/images/linkedin.png';
import github from '../../public/images/github.png';

import styles from './styles.module.scss';

interface Props {
  botton?: boolean;
}

const Footer: NextPage<Props> = ({botton}) => {

  return (
    <footer 
      className={ !botton ? styles.footer : `${styles.footer} ${styles.botton}`}
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
