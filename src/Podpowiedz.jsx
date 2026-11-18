export function Podpowiedz()
{
    const podpowiedzi = [
        "Bronie transfuzyjne nie wystrzelą, kiedy Sam cierpi na anemię!",
        "Lepiej korzystać z broni nieśmiercionośnych, niż śmiercionośnych!",
        "Przed wyprawą przygotuj chociaż jedną zapasową parę butów!",
        "Normalny wynurzony potrzebuje 50ml aby zostać pokonanym!",
        "Inni kurierzy mogą używać twoich obiektów, w zamian możesz dostać lajki kategorii BridgeLink!",
        "Fundament mostu stworzony przez asembler potrzebuje 800 sztuk metalu!",
        "Tyrolka stworzona przez asembler (poz.2) na poziomie pierwszym ma zasięg 300 metrów!",
        "Egzoszkielet, kiedy Sam nie sprintuje, ładuje się baterią słoneczną!",
        "Wyrzutnia Bolasów (poz.1) przy trafieniu w ciało spętuje MUŁ-a, a przy trafieniu w głowę MUŁ-a ogłuszy!",
        "Aerobagażnik (poz.1) pasywnie zużywa twój zapas kryształów chiralnych!",
        "Egzoszkielet Szybkościowy (poz.1) pozwala Sam-owi na daleki skok!",
        "Egzoskielet Wzmacniający (poz.1) znacznie ułatwia Sam-owi utrzymanie równowagi!",
        "Egzoszkielet Wspomagający delikatnie ulepsza wszystkie aspekty poruszania się Sam-a!",
        "Worek z krwią jest w stanie przechować 500ml!",
        "Zaczep wspinaczkowy (poz.1) ma zasięg 30 metrów!"
    ]

    function RandomTip()
    {
        if(podpowiedzi.length < 1) return "Podpowiedzi brak :)";
        let tipId = Math.floor(Math.random() * podpowiedzi.length);
        return podpowiedzi[tipId]
    }

    return RandomTip();
}