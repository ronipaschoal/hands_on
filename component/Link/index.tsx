import { NextPage } from 'next';
import Link from 'next/link';

import styles from './styles.module.scss';

interface Props {
  href: string;
  type: string;
}

const LinkHandsOn: NextPage<Props> = ({children, href, type}) => {

  return (
    <Link href={href}>
      <a className={
        (type == 'default') ?
        `${styles.link} ${styles.default}` :
        `${styles.link} ${styles.secondary}`
        }>
        {children}
      </a>
    </Link>
  );
};

export default LinkHandsOn;
