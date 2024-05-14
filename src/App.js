import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import PComponent from './components/PComponent';
import User from './components/User'
import Props from './components/Props'
import PropDy from './components/PropDy'
import Fields from './components/Fields'
import HideShow from './components/HideShow'
import Formhandle from './components/Formhandle'
import Life from './components/Life'
import Hooks from './components/Hooks'
import ArrayMap from './components/ArrayMap';
import Child from './components/Child';
import UseMemo from './components/UseMemo';
import ContCompo from './components/ContCompo';
import HighOrder from './components/HighOrder';
import HOCRed from './components/HOCRed';
import HOCGreen from './components/HOCGreen';
import { useState } from 'react/cjs/react.development';

import AppRoute from './AppRoute';

const App = () => {

  const [name, setName] = useState("Amit");

  const sendAks = () => {
    setName("AKS");
  }

  const alertprop = () => {
    alert("Hello");
  }

  const parentMethod = (data) =>{
    console.log(data);
  }

  return (
    <>
      <div className="App">
        <AppRoute />
        <User />
        <PComponent />
        <Props users={[{name:"Amit", email:"amit@mail.com"},{name:"Aks", email:"aks@mail.com"}]}/>
        <PropDy name={name} alertprop={alertprop} />
        <button onClick={sendAks}> Send AKS </button>
        <Fields />
        <HideShow />
        <Formhandle />
        <Life />
        <Hooks />
        <ArrayMap />
        <UseMemo />
        <ContCompo />
        <HOCRed cmp={HighOrder}/>
        <HOCGreen cmp={HighOrder}/>
        <Child pMethod={parentMethod}/>
        <ClickCounter />
        <HoverCounter />
      </div>
    </>
    
  );
}

export default App;
