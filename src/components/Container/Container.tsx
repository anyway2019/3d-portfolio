import styles from './Container.module.scss'

type Props = {
  children: JSX.Element[],
};

const Container = ({ children }: Props) =>(
        <div className={styles.Container}>
            {children}
        </div>
);
export default Container;
