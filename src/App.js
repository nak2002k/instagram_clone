import './App.css';
import Header from './components/Header';
import MainArea from './components/Main area/MainArea';
import SideBar from './components/Main area/SideBar';

function App() {

  return (

  <div>
    <div>
        <Header/>
        </div>
        <div className="appbody">
        <MainArea/>
        
        <SideBar/>
        </div>
  </div>
 
  );
}

export default App;
