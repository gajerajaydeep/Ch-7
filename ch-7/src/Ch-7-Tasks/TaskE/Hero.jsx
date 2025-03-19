import React from 'react'

export default function Hero({name}) {
    if (name === 'joker') {
        throw new Error("joker is not hero");
        
    }
  return (
   <>
   <h1>Hero's name : {name}</h1>
   </>
  )
}
