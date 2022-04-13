import { BrowserRouter,  Route,  Switch } from 'react-router-dom';

import RegisterPage from './modules/registerPage';
import LeadsPanel from './modules/leadsPanel';

import SaveLeads from './modules/saveLeads';
import LeadsPage from './modules/leadPage';
const Routes = () =>{
    return(
        <BrowserRouter>
        <Switch>
       <Route path='/'>
           <RegisterPage/>
       </Route>
       <Route path='/leadsPanel'>
           <LeadsPage/>
       </Route>
       <Route path='/registerLeads'>
          <SaveLeads/>
       </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;