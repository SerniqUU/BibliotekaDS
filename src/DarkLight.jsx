import { useState, useEffect } from 'react';

export function DarkLight() {
    const [theme, setTheme] = useState(() => {return localStorage.getItem('sT') || 'auto';});

    const themes = ['auto', 'light', 'dark'];

    function changeTheme() 
    {
        const currentIndex = themes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        setTheme(themes[nextIndex]);
        localStorage.setItem("sT", themes[nextIndex]);
    }

    useEffect(() => {
        const colorScheme = document.querySelector(
            'meta[name="color-scheme"]'
        );

        if (colorScheme) {
            colorScheme.content =
                theme === 'auto' ? 'light dark' : theme;
        }

        if (theme === 'auto') {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.dataset.theme = theme;
        }
    }, [theme]);

    return (
        <button
            onClick={changeTheme}
            id="lightDarkSwitch"
        >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </button>
    );
}
