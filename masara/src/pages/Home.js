
import Hero from "../components/mainPage/hero";
import HorizontalCardComponent from "../components/mainPage/cards";
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = ()=>{
    return (
    <div className="App">
       <Hero/>
       <HorizontalCardComponent/>    
    </div>
    )
};

export default Home;