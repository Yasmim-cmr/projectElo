import { BrowserRouter,  Route,  Switch } from 'react-router-dom';

import RegisterPage from './modules/registerPage';
import LeadsPanel from './modules/leadsPanel';


const Routes = () =>{
    return(
        <BrowserRouter>
        <Switch>
       <Route path='/register'>
           <RegisterPage/>
       </Route>
       <Route path='/leadsPanel'>
           <LeadsPanel/>
       </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;