
import Hero from "../components/mainPage/hero";
import HorizontalCardComponent from "../components/mainPage/cards";
import FooterComponent from "../components/mainPage/footer";
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = ()=>{
    return (
    <div className="App">
       <Hero/>
       <HorizontalCardComponent/>
       <FooterComponent/>       
    </div>
    )
};

export default Home;