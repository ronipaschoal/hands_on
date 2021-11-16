import { NextPage } from 'next';

import styles from './styles.module.scss';

const Title: NextPage = ({children}) => {

  return (
    <div className={styles.title}>
      <h1>{children}</h1>
      <hr />
    </div>
  );
};

export default Title;
