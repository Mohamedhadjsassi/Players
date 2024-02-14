import React from 'react'
import Player from './Player'
import Players from './Players'

function PlayerList() {
  return (
   <div style={{display:'flex', flexWrap:"wrap",gap:'20px', justifyContent:'center' , alignItems:'center'}}>
    {Players.map((e) => (   <Player 
    name ={e.name} 
     team ={e.team}  
     nationality={e.nationality} 
    jersey={e.jersey}
     age={e.age} 
     image={e.image}  
     />))}

   </div>
  )
}

export default PlayerList