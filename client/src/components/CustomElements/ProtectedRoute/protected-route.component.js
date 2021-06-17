import React, {  useContext,  } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ContextStore } from '../../../context/ContextStore';
import EmployeePage from '../../../pages/Employee/employee.page';

function ProtectedRoute({ component: Component, ...rest }) {
  const store = useContext(ContextStore);
  const [userObj, ] = store.LoggedInUserInfo;
  console.log(userObj);
  return (
      <Route
          {...rest}
          render={props =>
             (userObj && JSON.stringify(userObj) !== "{}")
                ? 
                userObj.admin ? <Component {...props} /> : <EmployeePage obj={userObj}/>
                :
                <Redirect to="/" />
          }
       />
  );
}

export default ProtectedRoute;