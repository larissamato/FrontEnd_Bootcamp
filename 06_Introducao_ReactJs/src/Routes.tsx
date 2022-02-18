import {
    BrowserRouter as Router,
    Routes,
    Route
    

} from 'react-router-dom';
import { Card} from './pages/Card';
import { Catalago} from './pages/Catalogo';

export function AppRoutes(){
    return(
        <Router> 
            <Routes> 
                <Route path='/card' element ={<Card />}/>
                <Route path='/catalogo' element ={<Catalago />}/>
            </Routes>
        </Router>
       
       
    )
}