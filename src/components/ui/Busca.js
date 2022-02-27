import React, { useState } from 'react'

const Busca = ( { getQuery }) => {
const [text, setText] = useState('')

const onChange = (q) => {
  setText(q)
  getQuery(q)
}


  return (
    <section className='search'>
        <input className="form-control" value={text} onChange={(e) => onChange(e.target.value)} type='text' placeholder='Buscar...' autoFocus />
    </section>
  )
}

export default Busca