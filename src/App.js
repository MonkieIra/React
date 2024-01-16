import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';

function App() {

  let links = ['Главная', 'Мои работы' , 'И что-то еще'];

  const[counter, setCounter] = useState(0);


  const plus = () => {
    setCounter(counter +1);
  }

  const minus = () => {
    setCounter(counter -1);
  }


  return (
    <div className="App">
        <Header   links={links} bgcolor="#fff"/>
        <Main  img="https://hatber.ru/upload/iblock/570/5700453ac0233366e3afc2eb18c0d5c0.jpg" text='Привет!!!!!' button='Привет ^_^'/>
        <h1>{counter}</h1>
        <button onClick={() => minus()}>-</button>
        <button onClick={() =>plus()}>+</button>
    </div>
  );
}

export default App;
