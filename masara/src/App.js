
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavScroll from './components/mainPage/navbar';
import Hero from './components/mainPage/hero';
import HorizontalCardComponent from './components/mainPage/cards';
function App() {
  return (
    <div className="App">
       <NavScroll/>
       <Hero/>
       <HorizontalCardComponent/>
     hello I am alive
    </div>
  );
}

export default App;
