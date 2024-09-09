
import LoginPage from "../components/portal/Login";
import DashboardPage from "../components/portal/DashboardPage";
import 'bootstrap/dist/css/bootstrap.min.css'

const Portal = ()=>{
    return (
    <div className="App">
       <LoginPage/>
       <DashboardPage/>    
    </div>
    )
};

export default Portal;