import React, {useState} from 'react';
import './App.css';

function App() {
  //Creao una variabile di stato che si chiama "appCounter", con la sintassi ES6 decostruction
  //"appCounter" è la variabile che conterrà il valore del contatore
  //"setAppCounter" è la funzione che occorre utilizzare per aggiornare il valore del contatore
  //"useState(0)" inizializza la variabile con il valore 0
  const [appCounter, setAppCounter] = useState(0);

  const handleClickApp = (sign) => {
    if (sign === "+"){
      setAppCounter (appCounter + 1);
    } else{
      setAppCounter (appCounter - 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Gestione useState e React Hooks</h2>
        {/**
         Inserisce i due bottoni dove in corrispondenza dell'evento "onClick" chiamo una funzione handleClickApp che
         riceve un parametro che indica se fare +1 o -1 sul contatore. 
         */}
        <button onClick={() => handleClickApp('+')}>Aggiungi 1 App.js</button>
        <button onClick={() => handleClickApp('-')}>Sottrai 1 App.js</button>

        <h4>Contatore App.js: {appCounter}</h4>
      </header>
    </div>
  );
}

export default App;
