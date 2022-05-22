import React from 'react'
import matchDiagram from '../assets/images/MatchDiagram.png'
import match from '../assets/images/match.svg'
import matchdesk from '../assets/images/matchdesk.png'
const MatchDiagram = () => {
  return (
    <div >
            <div className="lg:items-left">
            <img class="lg:ml-10 lg:max-w-2xl" src={match}></img>
            </div>
{/* <h1 className='text-left underline text-4xl font-bold text-white p-2'>MATCH DIAGRAM</h1> */}
<div className='flex justify-center mt-12 mb-14'>
<img  src={matchdesk}></img>

</div>
    
</div>

  )
}

export default MatchDiagram