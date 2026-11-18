import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import drabina from './assets/przedmioty/drabina.png';
import zaczep from './assets/przedmioty/zaczep.png';
import asembler from './assets/przedmioty/asembler.png';
import asembler2 from './assets/przedmioty/asembler2.png';
import spray from './assets/przedmioty/spray.png';
import bloodbag from './assets/przedmioty/bloodbag.png';
import buty from './assets/przedmioty/buty1.png';
import buty2 from './assets/przedmioty/buty2.png';
import egzoWspo from './assets/przedmioty/egzoWspo.png';
import egzoWzma from './assets/przedmioty/egzoWzma.png';
import egzoSzyb from './assets/przedmioty/egzoSzyb.png';
import pancerz from './assets/przedmioty/pancerz.png';
import maser from './assets/przedmioty/maser.png';
import bola from './assets/przedmioty/bola.png';
import wynu from './assets/przedmioty/wynu.png';
import pistolet from './assets/przedmioty/pistolet.png';
import karabin from './assets/przedmioty/karabin.png';
import nieKarabin from './assets/przedmioty/nieKarabin.png';
import hemato from './assets/przedmioty/hemato.png';
import granat from './assets/przedmioty/granat.png';
import aero from './assets/przedmioty/aero.png';

export const przedmioty = [
  {
    name: "Drabina", 
    desc: "Drabina, którą można złożyć w celu wygodnego transportu - po całkowitym rozłożeniu ma jednak aż 10 metrów długości. Jeśli ułoży się ją poziomo, może służyć jako prowizoryczny most, umożliwiając przeprawę przez rzeki i pokonywanie innych przeszkód. <br/>Gdy ustawisz drabinę, inni kurierzy równierz będą mogli z niej korzystać.",
    imgLink: drabina
  },
  {
    name: "Zaczep wspinaczkowy (poz.1)",
    desc: "Kołek, który można wbić w ziemię, żeby stworzyć punkty zaczepienia splotu. Umożliwia wędrówkę po stromych powierchniach i bezpieczne schodzenie po zboczach przez maksymalnie 30 m. <br/>Gdy umieścisz zaczep, z twojej liny będą mogli korzystać inni kurierzy.",
    imgLink: zaczep
  },
  {
    name: "Asembler (poz.1)",
    desc: "Przenośny asembler chiralny, który umożliwia budowanie różnych obiektów na obszarach połączonych z siecią chiralną. <br/> Wybudowanie obiektu spowoduje wykorzystanie części dostępnej przepustowości sieci chiralnej. <br/>Kiedy to zrobisz, twoje obiekty będą dostępne dla innych kurierów.",
    imgLink: asembler
  },
  {
    name: "Asembler (poz.2)",
    desc: "Ulepszona wersja asemblera (poz.1), która umożliwia budowanie większej liczby obiektów. <br/> Wybudowanie obiektu spowoduje wykorzystanie części dostępnej przepustowości sieci chiralnej. <br/>Kiedy to zrobisz, twoje obiekty będą dostępne dla innych kurierów.",
    imgLink: asembler2
  },
  {
    name: "Spray naprawczy do pojemników",
    desc: "Środek naprawczo-konserwujący w sprayu, którego można użyć, by naprawić szkody i zwiększyć odporność na drgania i uderzenia. Można go stosować wyłącznie do pojemników na ładunek. <br/>Spray jest mniej skuteczny, gdy używa się go podczas opadu temporalnego, dlatego warto najpierw poszukać schronu.",
    imgLink: spray
  },
  {
    name: "Worek z krwią",
    desc: "Worek wypełniony krwią Sama. Założenie go pozwala przywrócić z czasem poziom krwi na zasadzie ciągłej transfuzji za pośrednictwem kajdanek. Jeśli posiadasz kilka takich worków, po opróżnieniu pierwszego automatycznie podłączony zostanie kolejny. <br/>W przypadku używania broni wykorzystującej krew, zostanie ona w pierwszej kolejności pobrana z worków, następnie z ciała Sama. <br/>Worki można przechowywać w kieszeniach użytkowych.",
    imgLink: bloodbag
  },
  {
    name: "Buty Bridges (poz.1)",
    desc: "Standardowe buty Bridges. Zaprojektowano je tak, aby wytrzymały szeroki zakres warunków, dzięki czemu są trwalsze i wytrzymalsze od starszych konstrukcji.",
    imgLink: buty
  },
  {
    name: "Buty Bridges (poz.2)",
    desc: "Ulepszona wersja butów Bridges (poz.1). <br/>Poprawiono w nich wyrzymałość oraz odporność na uderzenia, co przekłada się na zmniejszenie obrażeń użytkownika, jak i ładunku w przypadku twardego lądowania. <br/>Według dowództwa Bridges buty te powinny przetrwać nawet najtrudniejsze dostawy.",
    imgLink: buty2
  },
  {
    name: "Egzoszkielet wspomagający",
    desc: "\"Egzoszkielet\" wspomagający kurierów podczas pracy. Założenie egzoszkieletu znacznie zwiększa pojemność załadunkową - pod warunkiem, że akumulator jest naładowany.",
    imgLink: egzoWspo
  },
  {
    name: "Egzoszkielet wzmacniający",
    desc: "\"Egzoszkielet\" zmniejszający obciążenie ładunkiem poprzez przejęcie części jego wagi. Założenie egzosszkieletu z naładowanym akumulatorem znacznie zwiększa pojemność załadunkową.",
    imgLink: egzoWzma
  },
  {
    name: "Egzoszkielet szybkościowy",
    desc: "\"Egzoszkielet\" zwiększający mobilność użytkownika. Załóż go i wciśnij SHIFT, żeby uzyskać dodatkową moc. Dzięki czemu zwiększysz swoją prędkość i pokonasz większy dystans, gdy skoczysz w trakcie biegu.",
    imgLink: egzoSzyb
  },
  {
    name: "Pancerz (poz.1)",
    desc: "Powłoka, którą można przymocować do ramion i bioder w celu ochrony użytkownika przed ostrzałem. Po otrzymaniu zbyt wielu obrażeń ulega zniszczeniu. <br/>Im więcej warstw pancerza, tym wyższy poziom ochrony, lecz jednocześnie mniej ładunku można przymocować do kombinezonu.",
    imgLink: pancerz
  },
  {
    name: "Broń maserowa",
    desc: "Broń strzelająca potężnymi ładunkami elektrycznymi. <br/>Korzysta z technologii MASER. Jej działanie opiera się na interakcji między polem chiralnym i magnetycznym. Pozbawia przytomności ludzkie cele i tymczasowo unieruchamia pojazdy. Zasięg rażenia broni maserowej zwiększa się w pobliżu wody. <br/> Nieśmiercionośna broń do odpierania siły żywej",
    imgLink: maser
  },
  {
    name: "Wyrzutnia bolasów (poz.1)",
    desc: "Strzela przewodami, które okresowo unieruchamiają cele w obrębie strefy działania. <br/>Przewody są tak naprawde splotami napełnianymi krwią Sama, co czyni je skutecznymi w walce z wynurzonymi. <br/>Nieśmiercionośna broń do odpierania siły żywej",
    imgLink: bola
  },
  {
    name: "Pistolet przeciwko wynurzonym (poz.1)",
    desc: "Strzela pociskami transfuzyjnymi naładowanymi krwią Sama. <br/>Należy pamiętać, że ta broń została zaprojektowana z myślą o walce z wynurzonymi i nie jest skuteczna przeciwko ludziom <br/>Nieśmiercionośna broń przeciwko wynurzonym",
    imgLink: wynu
  },
  {
    name: "Pistolet (poz.1)",
    desc: "Półautomatyczna broń boczna. <br/>Amunicja:64<br/>Kompaktowa i poręczna.<br/>Śmiercionośna broń do zwalczania siły żywej",
    imgLink: pistolet
  },
  {
    name: "Karabin (poz.1)",
    desc: "Karabin automatyczny, który strzela zabójczymi pociskami. <br/>Amunicja:180<br/>Ponieważ to broń automatyczna, karabin będzie strzelał, dopóki nie puścisz spustu, jednak im dłuższa seria, tym trudniej będzie utrzymać celność.<br/>Śmiercionośna broń do zwalczania siły żywej",
    imgLink: karabin
  },
  {
    name: "Nieśmiercionośny karabin automatyczny (poz.1)",
    desc: "Karabin automatyczny, który strzela gumowymi nabojami, zdolnymi pozbawić cel przytomności.<br/>Amunicja:120<br/>Ponieważ to broń automatyczna, karabin będzie strzelał, dopóki nie puścisz spustu, jednak im dłuższa seria, tym trudniej będzie utrzymać celność.<br/>Nieśmiercionośna broń do odpierania siły żywej",
    imgLink: nieKarabin
  },
  {
    name: "Hematogranat (poz.1)",
    desc: "Granat stworzony, by doskonale sprawdzać się w walce z wynurzonymi.<br/>Na etapie celowania krew Sama zostaje przetoczona do granatu, który wybucha w chwili zderzenia z dowolną powierchnią. Jeśli wcześniej założysz jakieś worki z krwią, granat w pierwszej kolejności użyje krwi z nich. Granat może pobrać sporą ilość krwi z ciała Sama, dlatego należy uważać, żeby nie doprowadzić do anemii.<br/>Nieśmiercionośna broń przeciwko wynurzonym",
    imgLink: hemato
  },
  {
    name: "Granat",
    desc: "Standardowy granat.<br/>Amunicja:5<br/>Wybucha w określonym czasie od momentu rzutu i powoduje śmiertelne obrażenia w bliskiej okolicy.<br/>Śmiercionośna broń do zwalczania siły żywej.",
    imgLink: granat
  },
  {
    name: "Aerobagażnik (poz.1)",
    desc: "Unosząca się w powietrzu przyczepa płynąca gładko po każdym terenie.<br/>Aerobagażniki uruchamia się automatycznie umieszczając je w terenie, po czym obciąża ładunkiem i mocuje do pasa. Do działania wymagają chiralium, a w trakcie korzystania zużywają kryształy chiralne. Służą również za środek transportu. Możliwe jest także połączenie dwóch aerobagażników.",
    imgLink: aero
  }
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
