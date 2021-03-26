import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";
import Header from "./components/header";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/dashboard";
import UserContext from "./context/userContext";
import { Redirect } from 'react-router';
import config from "./config";
import Forgot_Password from "./components/forgot_password";
import Analytics from "./components/analytics";
import Accounts_List from "./components/accounts/accounts_list";
import Profile from "./components/accounts/profile";
import Accounts_Add from "./components/accounts/account_add";
import Rep_Management from "./components/rep_management"
import Products_List from "./components/products/products_list";
import Product_Detail from "./components/products/product_detail";
import Product_Add from "./components/products/product_add";
import Customers from "./components/customers/customers";
import Projects from "./components/customers/projects";
import Members from "./components/customers/members";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  const authGuard = (Component) => () => {
    return localStorage.getItem("auth-token") ? (
      <Component />
    ) : (
      <Redirect to="/login" />
    );
  };

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/accounts/profile" render={authGuard(Profile)} />
              <Route path="/dashboard" render={authGuard(Dashboard)}/>
              <Route path="/forgot_password" component={Forgot_Password}/>
              <Route path="/analytics" component={Analytics}/>
              <Route path="/accounts/all" component={Accounts_List}/>
              <Route path="/accounts/add" component={Accounts_Add}/>
              <Route path="/rep_management" component={Rep_Management}/>
              <Route path="/products/all" component={Products_List}/>
              <Route path="/products/detail" component={Product_Detail}/>
              <Route path="/products/add" component={Product_Add}/>
              <Route path="/customers" render={authGuard(Customers)}/>
              <Route path="/customers/projects" render={authGuard(Projects)}/>
              <Route path="/customers/members" render={authGuard(Members)}/>


            </Switch>
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}