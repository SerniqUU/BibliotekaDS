import { useEffect, useState } from 'react';

export function DarkLight() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDark ? 'dark' : 'light'
    );
  }, [isDark]);

  return (
    <button
      id="lightDarkSwitch"
      onClick={() => setIsDark(prev => !prev)}
    >
      {isDark ? 'Ustaw jasny motyw' : 'Ustaw ciemny motyw'}
    </button>
  );
}
