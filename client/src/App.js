import React, {useState} from 'react';
import HeaderComponent from './components/Header/header.component';
import FooterComponent from './components/Footer/footer.component';
import CreateUser from './components/Users/CreateUser/create-user.component';
import LandginPage from './pages/Landing/landing.page';
import HomePage from './pages/Home/home.page';
import LoginPage from './pages/Login/login.page';
import ProtectedRoute from './components/CustomElements/ProtectedRoute/protected-route.component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ContextStore } from './context/ContextStore';
import ShowUser from './components/Users/ShowUser/user-show.component';
import EditUser from './components/Users/EditUser/edit-user.component';
import "./App.css"


function App() {
  const storedUser = JSON.parse(window.localStorage.getItem("user"));
  const [userObj, userObjSet] = useState(storedUser ? storedUser : {});
  const [responseObj, responseObjSet] = useState({});

  const storeValue = {
    LoggedInUserInfo: [userObj, userObjSet],
    ResponseObj: [responseObj, responseObjSet],
  }

  return (
    <ContextStore.Provider value={storeValue}>
    <Router>
      <HeaderComponent />
      <Switch>
        <Route exact path="/">
          <LandginPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <ProtectedRoute 
          exact
          path="/admin" 
          component={HomePage}
        />
        <ProtectedRoute 
          exact
          path="/admin/show/:user" 
          component={ShowUser}
        />
        <ProtectedRoute 
          exact
          path="/admin/edit/:user" 
          component={EditUser}
        />
        <ProtectedRoute 
          exact
          path="/admin/create"
          component={CreateUser}
        />
      </Switch>
      <FooterComponent />
    </Router>
    </ContextStore.Provider>
  );
}

export default App;
