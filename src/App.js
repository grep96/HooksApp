import React, {useState, useEffect} from 'react';
import './App.css';
import LifeCycleHooks from "./components/LifeCycleHooks/LifeCycleHooks.js";

function App() {
  //Creao una variabile di stato che si chiama "appCounter", con la sintassi ES6 decostruction
  //"appCounter" è la variabile che conterrà il valore del contatore
  //"setAppCounter" è la funzione che occorre utilizzare per aggiornare il valore del contatore
  //"useState(0)" inizializza la variabile con il valore 0
  const [appCounter, setAppCounter] = useState(0);
  const [buttonClass, setButtonClass] = useState('active-button');

  const handleClickApp = (sign) => {
    if (sign === "+"){
      setAppCounter (appCounter + 1);
      setButtonClass ('green-button');
    } else{
      setAppCounter (appCounter - 1);
      setButtonClass ('red-button');
    }
  };

  //React Hooks: componentDidMount e componentWillUnmount
  useEffect(
    () => {
      //Tutto il codice nel corpo della funzione verrà eseguito se si verifica l'evento componentDidMount
      console.log('App.js componentDidMount');
    return () => {
      //Se voglio eseguire delle righe di codice durante l'evento componentWillMount devo mettere "return" e passargli una funzione
      console.log('App.js componentWillUnmount');
    }
  },
  []); //Il secondo parametro è un array vuoto, per intercettare uno dei due eventi (...DidMount / ...WillUnmount)

  //React Hooks: componentDidUpdate
  useEffect (() => {
    console.log('App.js componentDidUpdate');
  });

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

        <h4 className = {buttonClass}>Contatore App.js: {appCounter}</h4>

        <LifeCycleHooks
          text="Bottone LifeCycleHooks.js 1"
          counterProp={appCounter}
        />
        <LifeCycleHooks
          text="Bottone LifeCycleHooks.js 2"
          counterProp={appCounter}
        />
      </header>
    </div>
  );
}

export default App;
