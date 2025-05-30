import styles from './Styles.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <a href="#">Entenda a técnica Pomodoro</a>
            <a href="#">
                Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💜 por{' '}
                <a href="https://github.com/viniciusrigo" className={styles.aName}>
                    Vinicius Rigo
                </a>
            </a>
        </footer>
    );
}
