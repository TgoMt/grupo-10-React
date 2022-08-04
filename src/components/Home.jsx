import React from 'react';
import Header from './Header';
import Products from './Products';
import Categories from './Categories';
import Users from './Users';

function Home() {
  return (
<React.Fragment>  
    <div className="Home">
     <header>
      <Header/>
     </header>
     <body>
     <Products />
     <Categories />
     <Users />
     </body>
    </div>
    </React.Fragment>
  );
}

export default Home;
