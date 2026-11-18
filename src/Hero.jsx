import { DarkLight } from './DarkLight';
import { Hello } from './Hello';
import { Podpowiedz } from './Podpowiedz';

export function Hero() {
    return (
        <section id="heroSection">
            <section aria-label="Color scheme">
                <DarkLight />
            </section>

            <div id="heroText">
                Biblioteka <br/>
                Przedmiotów Death Stranding
            </div>
            <p className='secondaryText' id="heroSubText">{<Hello/>} <br/>Tutaj dowiesz się o sprzęcie dostępnym w grze <br/> Podpowiedź: {<Podpowiedz />}</p>
            <div className='gradientDecor'>
                <div className='gD1'></div>
                <div className='gD2'></div>
                <div className='gD3'></div>
            </div>
        </section>
    );
}