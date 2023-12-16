/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo.jpeg" className="App-logo" alt="logo" /><br></br>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;*/
import ArrowFunction from "./component/ArrowFuction.js";
import Classcomponent from "./component/Classcomponent.js";
import Functional from "./component/Functional.js";
import PropsClass from "./component/Day4/PropsClass.js";
import PropsFunction from "./component/Day4/PropsFunction.js";
import PropsFunctionex1 from "./component/Day4/PropsFunctionex1.js";
import ArrowProps from "./component/Day4/ArrowProps.js";
import StateClass from "./component/Day4/StateClass.js";
import StateFunction from "./component/Day4/StateFunction.js";
import StateHoldObject from "./component/Day4/StateHoldObject.js";
import TwoWayBinding from "./component/Day4/TwoWayBinding.js";
import DyanmicRendering from "./component/Day4/DynamicRendering.js";
import DefaultProps from "./component/Day4/DefaultProps.js";
import ParentChild from "./component/Day4/ParentChild.js";
import List from "./component/day6/List.js";
import Demo from "./component/day6/Demo.js";
import Listobject from "./component/day6/Listobject.js";
import BasicButtons from "./component/day6/materialui.js";
function App() {
  return(
  <div>
  <Functional />
   <Classcomponent />
   <ArrowFunction />
  <PropsFunction name="Siddarthan M R"></PropsFunction>
  <PropsClass college="SKCT"></PropsClass>
  <PropsFunctionex1 college="SKCT" place="Coimbatore"></PropsFunctionex1>
  <ArrowProps name="Aravi"></ArrowProps>
  <StateClass></StateClass>
  <StateFunction></StateFunction>
  <StateHoldObject></StateHoldObject>
  <TwoWayBinding></TwoWayBinding>
  <DyanmicRendering></DyanmicRendering>
  <DefaultProps></DefaultProps>
  <ParentChild></ParentChild>

  <List></List>
  <Demo></Demo>
  <Listobject></Listobject>
  <BasicButtons></BasicButtons>
  <ErrorBoundary><Hero heroName="Vijay"></Hero>
  </ErrorBoundary> 
  <ErrorBoundary><Hero heroName="Joker"></Hero>
  </ErrorBoundary> 
  </div> 
  )
  }
export default App;

