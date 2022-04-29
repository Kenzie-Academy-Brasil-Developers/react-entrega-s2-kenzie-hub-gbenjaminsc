import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Dashboard from '../pages/Dashboard/index'
import Login from '../pages/Login/index'
import Register from '../pages/Register/index'

function Routes() {

    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('@KenzieHub:token'))
        if(token) {
            return setAuthenticated(true)
        }
    }, [authenticated])

    const history = useHistory()

    const handleNavigation = (path) => {
        return history.push(path)
    }

    return(
        <Switch>
            <Route exact path='/'>
                <Login handleNavigation={handleNavigation}authenticated={authenticated} setAuthenticated={setAuthenticated}/>
            </Route>

            <Route path='/register'>
                <Register handleNavigation={handleNavigation} authenticated={authenticated}/>
            </Route>

            <Route>
                <Dashboard handleNAvigation={handleNavigation} authenticated={authenticated} setAuthenticated={setAuthenticated}/>
            </Route>
        </Switch>

    )
}

export default Routes