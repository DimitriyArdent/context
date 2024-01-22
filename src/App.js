import logo from './logo.svg';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import { MainContext } from './context/Context';
import React, {useState} from 'react'
import MainContextProvider from './context/Context';
import { SecondContextProvider } from './context/SecondContext';

function App() {
   return (
    <div className="App">
      <MainContextProvider>   
          <SecondContextProvider>
              <ComponentA  ></ComponentA>     
          </SecondContextProvider>
               <ComponentB></ComponentB>
      </MainContextProvider>
      
    </div>
  );
}

export default App;
