import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./new/Header"
import  routes from "./new/routes"

const App = () => {
    return (
        <Router>
          <Header />
            <Switch>
              {
                routes.map((routes)=>(
                  <Route 
                    path={routes.path}
                    component={routes.component}
                    exact={routes.exact}
                  /> )
                )
              }
            </Switch>
        </Router>
    )
}

export default App
