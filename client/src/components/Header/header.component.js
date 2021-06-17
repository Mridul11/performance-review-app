import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { ContextStore } from '../../context/ContextStore';
import paypaylogo from '../../paypay_logo.png';
import "./header.component.css";

export default function HeaderComponent() {
  const store = useContext(ContextStore);
  const [userObj, userObjSet] = store.LoggedInUserInfo;
  // console.log(userObj);

  const handleLogoutClick = () => {
    userObjSet({});
    window.localStorage.clear();
  }

  return (
    <div className="ui inverted vertical masthead center aligned segment">
      <div className="ui container">
        <div className="ui large secondary inverted menu">
        <img className="ui small image left aligned container" src={paypaylogo} alt="PayPay image"/>  
          <Link to="/" className=" item">Home</Link>
          {userObj && userObj.admin ? <>
            <Link to="/admin/create" className="item">Create</Link>
            <Link to="/admin" className="item">All Users</Link>
            <Link to="/" className="item">Careers</Link>
          </>
           : null}
          
          <div className="right item">
            {
              ( userObj && Object.keys(userObj).length === 0)
              ? 
              <Link to="/login" 
              // onClick={handleLoginClick}
              className="ui inverted button">LOGIN</Link>
              :
              <div>
             
                <Link to="/" 
              onClick={handleLogoutClick}
              className="ui inverted button">LOGOUT</Link>
              </div>
              
            } 
          </div>
        </div>
      </div>
    </div>
  )
}