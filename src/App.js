import React, {useEffect, useState} from "react";
import HomePage from "./components/pages/HomePage";
import {useDispatch, useSelector} from "react-redux";
import Lk from "./components/pages/LK";
import RegisterPopup from "./components/parts/RegisterPopup";
import AuthPopup from "./components/parts/AuthPopup";
import Header from "./components/parts/Header";
import {Route, Switch, Redirect} from 'react-router-dom'
import {logToken, setUser} from "./redux/actions/UserActions";

function App() {

  const dispatch = useDispatch()

  const isAuth = useSelector(state => state.UserReducer)
  const isRegisterPopup = useSelector(state => state.HeaderReducers.isLogInOpen)
  const isAuthPopup = useSelector(state => state.HeaderReducers.isAuthOpen)
  const [test, reRender] = useState('')

  useEffect( async () => {
    const user = await dispatch(logToken())
    console.log(user)
  }, [])

  return (
    <div className="App">

      <div></div>

      {isRegisterPopup && <RegisterPopup />}
      {isAuthPopup && <AuthPopup />}

      <Header />

      {isAuth ?
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/lk" exact component={Lk}/>
          <Redirect to='/'></Redirect>
        </Switch>
        :
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Redirect to='/'></Redirect>
        </Switch>
      }
    </div>
  );
}

export default App;
