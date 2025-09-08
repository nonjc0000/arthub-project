import React from 'react'
import { useRef } from 'react'




const PageTop = () => {


  const topRef = useRef(null);


  function gotoTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }


  return (
    <div ref={topRef} className='pageTop_box'>
      <button onClick={gotoTop} className='pageTop_link'>
        <div className='pageTop_text'>
          <img src="./images/pageTop/pageTop_text.svg" alt="pageTop_text" />
        </div>
        <div className='pageTop_finger'>
          <img src="./images/pageTop/pageTop_finger.svg" alt="pageTop_finger" />
        </div>
      </button>
    </div>
  )
}


export default PageTop

