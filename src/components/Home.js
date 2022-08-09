import React, { useEffect } from 'react';
import Header from './Header';
import TotalProducts from './TotalProducts';
import Categories from './Categories';
import Users from './Users';

import "../assets/css/Home.css";
import { Link, Routes, Route } from 'react-router-dom';



function Home() {

  useEffect(() => {
    document.title = "Si pinta, pinta"

  })

  return (
    <React.Fragment>
      <div className="Home">
        <header>
          <div className='logo'>
            <Header />
          </div>
        </header>

        <body>
          <div className='panels'>
            
            <Categories />

            <Link to="/products">
              <TotalProducts/>
            </Link>
            
            <Users />
          </div>
        </body>
      </div>


      

    </React.Fragment>
    
  );
}


export default Home;
