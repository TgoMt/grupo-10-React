import React, { useEffect } from 'react';
import Header from './Header';
import TotalProducts from './TotalProducts';
import Categories from './Categories';
import "../assets/css/Home.css";
import { Link } from 'react-router-dom';
import TotalUsers from './TotalUsers';



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

            <Link to="/products">
              <TotalProducts />
            </Link>

          <Link to="/users">
            <TotalUsers />
            </Link>
            
           

          </div>

        </body>
      </div>




    </React.Fragment>

  );
}


export default Home;
