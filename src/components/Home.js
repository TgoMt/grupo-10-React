import React, { useEffect } from 'react';
import Header from './Header';
import TotalProducts from './TotalProducts';
import Categories from './Categories';
import LastUser from './LastUser';

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
<<<<<<< HEAD

            <Users />
=======
            
            <LastUser />
>>>>>>> fed81281c3e1b5a25313453bada607dfec060014
          </div>
        </body>
      </div>




    </React.Fragment>

  );
}


export default Home;
