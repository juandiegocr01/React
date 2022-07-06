import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './HelloWorldApp'; //importando un componente
import {FirstApp} from './FirstApp';
import './styles.css';
import { CounterApp } from './CounterApp';



//renderizando un componente y ejecutandolo en donde queremos que aparezca en el html
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       
        <CounterApp value={123}/>
    </React.StrictMode>
);