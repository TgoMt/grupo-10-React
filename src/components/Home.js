import React, { useEffect } from 'react';
import Header from './Header';
import TotalProducts from './TotalProducts';
import Categories from './Categories';
import Users from './Users';

import "../assets/css/Home.css";
import { Link } from 'react-router-dom';



function Home() {

  useEffect(() => {
    document.title = "Si pinta, pinta"

  })

  return (
    <React.Fragment>
      <div className="home">
        <header>


          <Link to="/">
            <Header />
          </Link>

        </header>

        <body>
          <div className='panels'>

            <Categories />

            <Link to="/products" className='XXX'>
              <TotalProducts />
            </Link>

            <Users />
          </div>
        </body>
      </div>




    </React.Fragment>

  );
}


export default Home;
