import React from 'react'
import Footer from './../Footer/Footer';
import Header from './../Header/Header';
import Menu from './../Menu/Menu';
import { Route } from 'react-router-dom';


const DashboardLayout = ({ children, ...rest }) => {
    return (
      <>
        <Header />
         <Menu />
         
          <div className="content-wrapper">
          {children}
          </div>
             
        <Footer />
      </>
    );
  };


  const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => (
          <DashboardLayout>
            <Component {...props} />
          </DashboardLayout>
        )}
      />
    );
  };
  
  export default DashboardLayoutRoute;
  