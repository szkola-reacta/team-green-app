import React from 'react';

function Recipe() {
    return (
        <div>
            <h1>
                Kluski śląskie
            </h1>
            <img src="kluski" alt="kluski slaskie" />
            <table>
                <tr>
                    <th target="recipe-description">Opis</th>
                    <th target="recipe-recipe">Przepis</th>
                    <th target="recipe-alergen">Alergeny</th>
                </tr>
                <tr id="recipe-description">
                    <p>
                    rodzaj klusek ziemniaczanych przygotowanych z gotowanych ziemniaków i mąki, formowane w mocno spłaszczone kulki z wgłębieniem, gotowane w osolonym wrzątku. Kluski śląskie wpisane są na Listę produktów tradycyjnych województwa opolskiego oraz osobno śląskiego.
                    </p>
                </tr>
                <tr id="recipe-recipe">
                    <h2>SKŁADNIKI</h2>
                    <ul>
                        <li>1 kg ziemniaków</li>
                        <li>2 żółtka</li>
                        <li>1 łyżeczka Oleju Wielkopolskiego</li>
                        <li>sól</li>
                        <li>1 łyżka mąki pszennej</li>
                        <li>10 dag mąki ziemniaczanej</li>
                    </ul>
                    <h2>Przygotowanie</h2>
                    <ul>
                        <li>Ugotuj ziemniaki w mundurkach.</li>
                        <li>Jeszcze gorące przeciśnij przez praskę, a gdy lekko przestygną, dodaj żółtka, odrobinę Oleju Wielkopolskiego i obie mąki.</li>
                        <li>Masę posól do smaku, zagnieć i ulep kluseczki nieco większe od orzecha włoskiego.</li>
                        <li>Każdą spłaszcz, pośrodku zrób palcem dołek.</li>
                        <li>Kluski wkładaj do wrzącej, osolonej wody i gotuj na średnim ogniu około 5 minut (aż wypłyną na powierzchnię).</li>
                        <li>Wyjmuj łyżką cedzakową, osączaj z wody i podawaj do pieczeni, rolad, sosu mięsnego lub polane skwarkami z boczku.</li>
                    </ul>
                </tr>
                <tr id="recipe-alergen">
                    <h2>Alergeny</h2>
                    <p>gluten, soja, seler, mleko</p>
                </tr>
            </table>
        </div>
    );
}

export default Recipe();