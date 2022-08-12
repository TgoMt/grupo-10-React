import React from 'react'
import error from "../assets/image/error.gif"
import background from "../assets/image/background.jpg"

const Error404 = () => {
  return (
    <div class="not-found">
          <div>
{/*       <img class= "backgrund" src={background} /> */}
        <p class="image" />
    <img class="gif" src={error} alt="gif"/>

    <h1>Ups... Parece que esta pagina no existe!!</h1>
    <p >Te invitamos a seguir explorando nuestros productos</p>
    <p class="button"/>
    <a href="/"><button>Si pinta, Pinta</button></a>

    </div>
</div>





  )
}

export default Error404