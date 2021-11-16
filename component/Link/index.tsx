import { NextPage } from 'next';
import Link from 'next/link';

import styles from './styles.module.scss';

interface Props {
  href: string;
}

const LinkHandsOn: NextPage<Props> = ({children, href}) => {

  return (
    <Link href={href}>
      <a className={styles.link}>
        {children}
      </a>
    </Link>
  );
};

export default LinkHandsOn;
