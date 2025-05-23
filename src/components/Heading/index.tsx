import styles from './Styles.module.css';

type HeadingProps = {
  children: React.ReactNode;
};

// export function Heading(props: HeadingProps) {
export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
