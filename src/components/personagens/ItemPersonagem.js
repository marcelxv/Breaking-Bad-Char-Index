import React from 'react'

const ItemPersonagem = ({ card }) => {

  // tratando status e traduzindo para português
  if(card.status === 'Alive') {
    card.status = 'Vivo'
  } else if (card.status === 'Deceased') {
    card.status = 'Morto'
  } else if (card.status === 'unknown') {
    card.status = 'Desconhecido'
  } else if (card.status === 'Presumed dead') {
    card.status = 'Presumido morto'
  }

  // tratando data de nascimento em padrão brasileiro e traduzindo para português
  if(card.birthday === 'Unknown') {
    card.birthday = 'Desconhecido'
  } else {
    card.birthday = card.birthday.split('-').join('/')
  }

  // tratando apelido colocando entre aspas simples
  if(card.nickname === 'unknown') {
    card.nickname = 'Desconhecido'
  } else {
    card.nickname = `'${card.nickname}'`
  }


  return (
    <div className='card'>
        <div className= 'card-inner'>
            <div className='card-front'>
                <img src={card.img} alt={card.name} />
                </div>
                <div className='card-back'>
                    <h1>{card.name}</h1>
                    <ul>
                        <li><strong>Nome do ator:</strong> {card.portrayed}</li>
                        <li><strong>Apelido: </strong>{card.nickname}</li>
                        <li><strong>Status: </strong>            
                        {card.status}</li>
                        <li><strong>Nascimento: </strong>{card.birthday}</li>
                    </ul>
                </div>
    </div>
    </div>
  )
}



export default ItemPersonagem