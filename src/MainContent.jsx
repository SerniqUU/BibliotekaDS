import {przedmioty} from './main.jsx';
import {useState} from 'react';

export function MainContent()
{
    const [result, setResult] = useState("");
    const filteredItems = przedmioty.filter((element) => element.name.toLowerCase().includes(result.toLowerCase()));

    function RenderCards()
    {
        return filteredItems.map((element, index) => (
            <div className="itemCard" key={index} style={{backgroundImage: `linear-gradient(rgb(0, 0, 0), rgba(0,0,0,0.5)), url(${element.imgLink})`}}>
                <h2 className="itemPrimary">{element.name}</h2>
                <p className="itemSecondary">
                    {element.desc.split(/<br\s*\/?>/i).map((text, index) => (
                        <span key={index}>
                            {text}
                            <br />
                        </span>
                    ))}
                </p>
            </div>
        ));
    }

    return<>
    <div>
        <input type="text" placeholder="Wyszukaj przedmiot..." value={result} onChange={(e) => setResult(e.target.value)}/>
        <section id="mainSection">
            {filteredItems.length > 0 ? (RenderCards()) : (<p className="secondaryText">Nie znaleziono...</p>)}
        </section>
    </div>
    </>
}