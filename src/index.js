import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Error404 from './components/Error404';
import AllProducts from './components/AllProducts';
import PanelsLoose from './components/PanelsLoose';
import AllUsers from './components/AllUsers';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* Link /products nos va a cargar productos */}
    <Routes>

<Route exact path='/' element={<React.Fragment><Home/><PanelsLoose/></React.Fragment>} />

<Route exact path='/products' element={<React.Fragment>
  <Home/><AllProducts/>
  </React.Fragment>} /> 

<Route exact path='/users' element={<React.Fragment><Home/><AllUsers/></React.Fragment>} />


  <Route path= "*" element={<Error404 />}/>
</Routes> 
  </BrowserRouter>
);


//anidar enrutadores


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
