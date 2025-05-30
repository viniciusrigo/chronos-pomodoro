import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './Styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const savedTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark';
        return savedTheme;
    });

    const nextThemeIcon = theme === 'dark' ? <SunIcon /> : <MoonIcon />;

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return newTheme;
        });
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <nav className={styles.menu}>
            <a href="#" className={styles.menuLink} aria-label="Página inicial" title="Página inicial">
                <HouseIcon />
            </a>
            <a href="#" className={styles.menuLink} aria-label="Histórico" title="Histórico">
                <HistoryIcon />
            </a>
            <a href="#" className={styles.menuLink} aria-label="Configurações" title="Configurações">
                <SettingsIcon />
            </a>
            <a
                href="#"
                className={styles.menuLink}
                aria-label="Alternar o tema"
                title="Alternar o tema"
                onClick={handleThemeChange}
            >
                {nextThemeIcon}
            </a>
        </nav>
    );
}
