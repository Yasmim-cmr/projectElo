import { BrowserRouter,  Route,  Switch } from 'react-router-dom';

import RegisterPage from './modules/registerPage';
const Routes = () =>{
    return(
        <BrowserRouter>
        <Switch>
       <Route path='/register'>
           <RegisterPage/>
       </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;