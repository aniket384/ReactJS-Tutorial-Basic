import logo from './logo.svg';
import Home from './home';
import './App.css';
import Profile from './Profile'
import Function from './Function'
import Props from './props'
import State from './state'
import HideAndShow from './hideandshow'
import EventHandling from './EventHandling'
import LifeCycle from './lifecycle'
import ComponentDidUpdate from './componentDidMount'
import View from './view'
import Hooks from './hooks'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       <Home />

       <Profile />

       <Function text="Hello Functional Component" />

       <Props text={{name:'Props in Functional Component'}} data="Props" />

       <State />

      <HideAndShow />

      <EventHandling />

      <LifeCycle />

      <ComponentDidUpdate />

      <View />

      <Hooks />
      </header>
    </div>
  );
}

export default App;
