import { NextPage } from 'next';

import styles from './styles.module.scss';

const Button: NextPage = ({children}) => {

  return (
    <button className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
