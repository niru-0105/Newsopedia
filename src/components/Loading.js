import React from 'react'
import loading from './loading.gif'

const Loading =  ()=> {


    return (
      <>
        <div className="tex-center">
            <img className='text-center' style={{marginLeft:'50%'}} src={loading} alt="" />
        </div>
      </>
    )
}

export default Loading