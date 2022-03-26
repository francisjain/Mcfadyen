import {useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Sidefade from './components/Sidefade';


function App() {

  const [sidebar, setsidebar] = useState(false);

  const toggleSidebar = () => {
    setsidebar((prevState) => !prevState)
  }
  return (
    <div className="App">
      <Header openSidebar={toggleSidebar} />
      <Main />
      <Footer />
      <Sidefade sidebar={sidebar} close={toggleSidebar}/>
      <Sidebar sidebar={sidebar}/>
    </div>
  );
}

export default App;
