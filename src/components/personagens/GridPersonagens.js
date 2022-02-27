import React from 'react'
import ItemPersonagem from './ItemPersonagem'
import Spinner from '../ui/Spinner'



const GridPersonagens = ({estaCarregando, cards}) => {
  return estaCarregando ? (<Spinner />
    ) : (
    <section className="cards">{cards.map(card => (
        <ItemPersonagem key={card.char_id} card={card} />
  ))}
  </section>
    )
}


  export default GridPersonagens