import React from 'react'
import bg from '../assets/images/block2.png'
import match from '../assets/images/match.svg'
import matchdesk from '../assets/images/matchdesk.png'
const MatchDiagram = () => {
  return (
    <div style={{backgroundColor:'#101822'}}>
            <div className="lg:items-left px-2">
              <div className='mt-52  md:mt-96 md:ml-80 w-100 z-3' style={{position:'absolute', }}>
                <a href='/select-team'><button style={{visibility:'hidden'}}>bhfgfgdfdfdffxdsd </button></a>
              </div>
            <img class="lg:ml-10 lg:max-w-2xl mx-2" src={match}></img>
            </div>
{/* <h1 className='text-left underline text-4xl font-bold text-white p-2'>MATCH DIAGRAM</h1> */}
<div className='flex justify-center mt-12 mb-14'>
<img  src={matchdesk}></img>

</div>
    
</div>

  )
}

export default MatchDiagram