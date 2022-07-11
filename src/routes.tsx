// Local Apps ---------------------
// Default Home Page
import Home from './pages/home/home';
// Documentation / Example Page
import Documentation from './pages/docs/docs';
// Locals Apps error imports ------
import PageNotFoundError from './pages/error/404';
// Local imports ------------------
import { Route, Switch } from './shared/components/routes/routes';


// App routes
const Routes = () => {
  return <Switch>

    { // [HOME] Default Page
      Route({path: '', app: Home})
    }

    { // [DOCS] Documentation Page
      Route({
        path: 'docs',
        app: Documentation
    })}

    { // [ERROR 404] Page not found
      Route({
        path: '*',
        any: true,
        app: PageNotFoundError
    })}

  </Switch>
}

export default Routes;
