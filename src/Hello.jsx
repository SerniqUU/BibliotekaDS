import { useState, useEffect } from "react";

export function Hello() {
    const [name, setName] = useState('');

    useEffect(() => {
        let username = localStorage.getItem("username");

        if (username == null) {
            username = prompt("Przedstaw się");

            if (username !== null) {
                localStorage.setItem("username", username);
            }
        }

        setName(username || '');
    }, []);

    return <p>Witaj {name}</p>;
}