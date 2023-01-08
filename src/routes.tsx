// Home Page
import Home from './pages/home/home';
// Error Response Pages
import PageNotFoundError from './pages/error/404';
// Shared Components
import { Route, Index } from './shared/components/routes/routes';


const Routes = () => {
  return <Index>

    { // [DEFAULT] Home Page
      Route({
        path: '',
        page: Home
      })
    }

    { // [ERROR 404] Page not found
      Route({
        path: '*',
        page: PageNotFoundError
    })}

  </Index>
}


export default Routes;
