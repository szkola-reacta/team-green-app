import React from 'react';

function My(){

    const handleEdit = (e) => {
        console.log(e.target);
    }

    const handleRemove = (e) => {
        console.log(e.target);
    }

    return(
        <div>
            <a href="#">Dodaj przepis</a>
            <h1>Twoje przepisy:</h1>
            <ul>
                <li>
                    <a href="#">Schabowy</a>
                    <input name="edit" type="button" value="Edytuj" id="1" onClick={handleEdit} />
                    <input name="remove" type="button" value="Usuń" id="1" onClick={handleRemove} />
                </li>
                <li>
                    <a href="#">Rosół</a>
                    <input name="edit" type="button" value="Edytuj" id="2" onClick={handleEdit} />
                    <input name="remove" type="button" value="Usuń" id="2" onClick={handleRemove} />
                </li>
                <li>
                    <a href="#">Pomidorowa</a>
                    <input name="edit" type="button" value="Edytuj" id="3" onClick={handleEdit} />
                    <input name="remove" type="button" value="Usuń" id="3" onClick={handleRemove} />
                </li>
                <li>
                    <a href="#">Ziemniaki zasmażane</a>
                    <input name="edit" type="button" value="Edytuj" id="4" onClick={handleEdit} />
                    <input name="remove" type="button" value="Usuń" id="4" onClick={handleRemove} />
                </li>
                <li>
                    <a href="#">Bigos</a>
                    <input name="edit" type="button" value="Edytuj" id="5" onClick={handleEdit} />
                    <input name="remove" type="button" value="Usuń" id="5" onClick={handleRemove} />
                </li>
            </ul>
        </div>
    );
}

export default My;