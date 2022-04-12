import { BrowserRouter,  Route,  Switch } from 'react-router-dom';

import RegisterPage from './modules/registerPage';
import LeadsPanel from './modules/leadsPanel';

import SaveLeads from './modules/saveLeads';
const Routes = () =>{
    return(
        <BrowserRouter>
        <Switch>
       <Route path='/Register'>
           <RegisterPage/>
       </Route>
       <Route path='/leadsPanel'>
           <LeadsPanel/>
       </Route>
       <Route path='/registerLeads'>
          <SaveLeads/>
       </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;